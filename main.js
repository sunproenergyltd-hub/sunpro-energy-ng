/* =========================================================
   SUNPRO ENERGY — LEAD STORAGE
   Saves every lead (quote request, questionnaire, maintenance
   or partnership enquiry) to this browser's localStorage so the
   Admin panel can list them immediately, and — if configured in
   config.js — also forwards a copy to Formspree / Google Sheets
   so leads from ALL visitors reach the business, not just leads
   captured on the admin's own device.
   ========================================================= */
const LeadStore = {
  KEY: "sunpro_leads_v1",

  all(){
    try{ return JSON.parse(localStorage.getItem(this.KEY)) || []; }
    catch(e){ return []; }
  },

  save(lead){
    const leads = this.all();
    lead.id = "L" + Date.now().toString(36).toUpperCase();
    lead.createdAt = new Date().toISOString();
    lead.status = lead.status || "new";
    leads.unshift(lead);
    localStorage.setItem(this.KEY, JSON.stringify(leads));
    this._forward(lead);
    return lead;
  },

  updateStatus(id, status){
    const leads = this.all().map(l => l.id === id ? {...l, status} : l);
    localStorage.setItem(this.KEY, JSON.stringify(leads));
  },

  remove(id){
    const leads = this.all().filter(l => l.id !== id);
    localStorage.setItem(this.KEY, JSON.stringify(leads));
  },

  clearAll(){
    localStorage.removeItem(this.KEY);
  },

  _forward(lead){
    const cfg = window.SUNPRO_CONFIG || {};
    const payload = JSON.stringify(lead);
    if(cfg.formEndpoint){
      fetch(cfg.formEndpoint, {
        method: "POST",
        headers: {"Content-Type":"application/json", "Accept":"application/json"},
        body: payload
      }).catch(()=>{});
    }
    if(cfg.sheetsWebhook){
      fetch(cfg.sheetsWebhook, {method:"POST", body: payload}).catch(()=>{});
    }
  }
};

/* Builds a pre-filled WhatsApp click-to-chat link from a lead object,
   so even with zero backend set up, every submission can land straight
   in the owner's WhatsApp as a fallback / instant notification. */
function leadToWhatsAppLink(lead, phoneIntl){
  const lines = [`New ${lead.type} lead from the website:`];
  Object.entries(lead).forEach(([k,v])=>{
    if(["id","createdAt","status","type"].includes(k) || !v) return;
    lines.push(`${k}: ${Array.isArray(v) ? v.join(", ") : v}`);
  });
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${phoneIntl}?text=${text}`;
}
