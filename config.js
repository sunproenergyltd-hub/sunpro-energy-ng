/* =========================================================
   SUNPRO ENERGY — SHARED SITE BEHAVIOUR
   ========================================================= */
(function(){
  const cfg = window.SUNPRO_CONFIG || {};

  document.addEventListener("DOMContentLoaded", () => {
    injectContactDetails();
    wireNav();
    wireFloatingActions();
    wireNewsletter();
    wireChatWidget();
    document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  });

  function injectContactDetails(){
    document.querySelectorAll("[data-phone]").forEach(el => el.textContent = cfg.phoneDisplay);
    document.querySelectorAll("[data-phone-href]").forEach(el => el.href = "tel:+" + cfg.phoneIntl);
    document.querySelectorAll("[data-email]").forEach(el => el.textContent = cfg.email);
    document.querySelectorAll("[data-email-href]").forEach(el => el.href = "mailto:" + cfg.email);
    document.querySelectorAll("[data-address]").forEach(el => el.textContent = cfg.address);
    document.querySelectorAll("[data-hours]").forEach(el => el.textContent = cfg.hours);
    document.querySelectorAll("[data-wa-href]").forEach(el => {
      const msg = el.getAttribute("data-wa-msg") || "Hello SunPro Energy, I'd like to know more about your solar systems.";
      el.href = `https://wa.me/${cfg.phoneIntl}?text=${encodeURIComponent(msg)}`;
    });
  }

  function wireNav(){
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");
    if(!toggle || !links) return;
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      toggle.textContent = links.classList.contains("open") ? "✕" : "☰";
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.textContent = "☰";
    }));
  }

  function wireFloatingActions(){
    const chatFab = document.querySelector(".fab-chat");
    const chatWindow = document.querySelector(".chat-window");
    const chatClose = document.querySelector(".chat-close");
    if(chatFab && chatWindow){
      chatFab.addEventListener("click", () => chatWindow.classList.toggle("open"));
    }
    if(chatClose && chatWindow){
      chatClose.addEventListener("click", () => chatWindow.classList.remove("open"));
    }
  }

  function wireNewsletter(){
    document.querySelectorAll(".newsletter-form").forEach(form => {
      form.addEventListener("submit", e => {
        e.preventDefault();
        const emailInput = form.querySelector("input[type=email]");
        const msg = form.parentElement.querySelector(".form-msg") || form.nextElementSibling;
        if(!emailInput.value || !emailInput.checkValidity()){
          showMsg(msg, "Please enter a valid email address.", false);
          return;
        }
        const subs = JSON.parse(localStorage.getItem("sunpro_newsletter") || "[]");
        subs.push({email: emailInput.value, at: new Date().toISOString()});
        localStorage.setItem("sunpro_newsletter", JSON.stringify(subs));
        if(window.LeadStore){
          LeadStore.save({type:"Newsletter", email: emailInput.value});
        }
        showMsg(msg, "You're subscribed — watch out for power-saving tips & offers.", true);
        form.reset();
      });
    });
  }

  function showMsg(el, text, ok){
    if(!el) return;
    el.textContent = text;
    el.className = "form-msg " + (ok ? "ok" : "err");
  }

  /* ---------------- Chat widget ----------------
     If Tawk.to credentials are set in config.js, load the real widget.
     Otherwise show the lightweight built-in FAQ bot with a WhatsApp
     hand-off, so live support always works even with zero setup. */
  function wireChatWidget(){
    if(cfg.tawkPropertyId && cfg.tawkWidgetId){
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = `https://embed.tawk.to/${cfg.tawkPropertyId}/${cfg.tawkWidgetId}`;
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      document.body.appendChild(s1);
      document.querySelectorAll(".fab-chat, .chat-window").forEach(el => el.style.display = "none");
      return;
    }

    const input = document.querySelector(".chat-input input");
    const sendBtn = document.querySelector(".chat-input button");
    const body = document.querySelector(".chat-body");
    const quickWrap = document.querySelector(".chat-quick");
    if(!input || !body) return;

    const faq = [
      { q: "price", a: "Our systems start from ₦292,600 for a small power tank up to multi-million naira whole-home installs. Tell me your budget or load and I'll point you to the right size — or open our Products page." },
      { q: "installation", a: "Yes — every complete system we sell includes professional installation in Port Harcourt & across Rivers State, with wider Nigeria coverage on request." },
      { q: "warranty", a: "Inverters and batteries carry manufacturer warranties of 2–5 years depending on the unit, and solar panels up to 15 years." },
      { q: "maintenance", a: "Head to our Maintenance page to book a specialist call or WhatsApp session for servicing an existing system." },
      { q: "default", a: "Thanks for reaching out! For anything specific, our specialist can help directly on WhatsApp — tap the green button below." }
    ];
    quickWrap && quickWrap.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => handleUserMessage(btn.textContent));
    });
    sendBtn && sendBtn.addEventListener("click", () => {
      if(input.value.trim()) handleUserMessage(input.value.trim());
      input.value = "";
    });
    input && input.addEventListener("keydown", e => {
      if(e.key === "Enter" && input.value.trim()){
        handleUserMessage(input.value.trim());
        input.value = "";
      }
    });

    function handleUserMessage(text){
      addMsg(text, "me");
      const lower = text.toLowerCase();
      const hit = faq.find(f => lower.includes(f.q)) || faq.find(f=>f.q==="default");
      setTimeout(() => addMsg(hit.a, "bot"), 500);
    }
    function addMsg(text, who){
      const div = document.createElement("div");
      div.className = "msg " + who;
      div.textContent = text;
      body.appendChild(div);
      body.scrollTop = body.scrollHeight;
    }
  }
})();
