/* ============================================================
   SUNPRO ENERGY — PRODUCT CATALOG
   ------------------------------------------------------------
   HOW TO ADD A NEW BRAND / PRODUCT
   1. Duplicate a brand block below (copy from "id: 'itel'" down
      to its closing bracket).
   2. Give it a new id (lowercase, no spaces), name, logo & tagline.
   3. Add products to its "items" array — same shape as the
      examples. price / oldPrice are in Naira (numbers only).
   4. Save the file and re-upload it — the Products page, the
      home page "Shop by Brand" strip, and the questionnaire all
      read from this single file automatically.

   To have a brand added FOR you: send the product page link(s)
   to whoever maintains this site and ask for the brand to be
   extracted — the same workflow used to build the itel catalog.
   ============================================================ */

const BRANDS = [
  {
    id: "itel",
    name: "itel Energy",
    tagline: "Authorised itel Solar reseller — inverters, batteries, panels & all-in-one power stations.",
    status: "live",
    logoText: "itel",
    items: [
      // ---- Solar Generators / Power Stations ----
      { id: "itel-500w-1000wh", category: "Solar Generator", name: "itel 500W Solar Generator — 1000Wh Lithium Battery Power Tank", specs: "500W inverter · 1000Wh LiFePO4 · 2-yr warranty · Free delivery", price: 292600, oldPrice: 308000, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-Energy-500W-Inverter-1kWh-LifePo4-Battery-All-in-One-Solar-Power-System-1.jpg?w=500" },
      { id: "itel-500w-panel", category: "Solar Generator", name: "itel 500W Solar Generator + 410W Panel — Power Tank", specs: "500W inverter · 1000Wh battery · 1× 410W panel included", price: 437000, oldPrice: 460000, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-500W-Solar-Generator-1000Wh-Lithium-Battery-with-itel-410w-Panel-Power-Tank-IESS-05K10P.jpg?w=500" },
      { id: "itel-130w-320wh", category: "Solar Generator", name: "itel 130W Portable Power Station — 320Wh", specs: "Compact backup for phones, laptops, lights & routers", price: 102410, oldPrice: 109725, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/05/itel-130W-Portable-Power-Station-%E2%80%93-320Wh-Smart-Backup-Power-Solution-IESS-320T.webp?w=500" },
      { id: "itel-8000wh-aio", category: "Solar Generator", name: "itel 8000Wh All-in-One Solar Generator + 3600W Inverter", specs: "IP31 · 3.6kW inverter · 8kWh LiFePO4 · 2-yr warranty", price: 1596000, oldPrice: 1680000, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-3.6kW-All-in-One-Solar-Power-System-with-8kWh-Battery-Complete-Home-Energy-Storage-Solution-1.jpg?w=500" },

      // ---- Inverters ----
      { id: "itel-1.5k-12v", category: "Inverter", name: "itel 1.5kW Hybrid Inverter — 12V, IP54, 1-Phase", specs: "1.5kVA · Ideal for lights, TV, fans, router", price: 227810, oldPrice: 239800, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-1.5kw-1500W-Inverter-Hybrid-12V-IP54-1Phase-IPV-1K512U.webp?w=500" },
      { id: "itel-3k-24v-offgrid", category: "Inverter", name: "itel 3kW Off-Grid Inverter — 24V, IP54, 3kVA", specs: "4000W PV input · Free delivery", price: 313500, oldPrice: 330000, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-3kW-Hybrid-Solar-Inverter-%E2%80%93-24V-Pure-Sine-Wave-Powers-ACs-TVs-Fridge-1.jpg?w=500" },
      { id: "itel-3.6k-24v", category: "Inverter", name: "itel 3.6kW Hybrid Inverter — 4.5kVA, 24V, IP31", specs: "Runs TVs, fridges & 1HP ACs", price: 512595, oldPrice: 539574, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-3.6kVA-Hybrid-Solar-Inverter-Powers-TVs-Fridges-1HP-ACs-24V-IP31-Rated-2.jpg?w=500" },
      { id: "itel-4k-24v", category: "Inverter", name: "itel 4kW Hybrid Inverter — 24V, IP54, WiFi", specs: "4kVA · Powers ACs, fridges & TVs · App monitoring", price: 396055, oldPrice: 416900, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-4kW-Hybrid-Solar-Inverter-%E2%80%93-Powers-ACs-Fridges-TVs-24V-IP54-Rated-1.jpg?w=500" },
      { id: "itel-6k-48v", category: "Inverter", name: "itel 6kW Hybrid Inverter — 48V, IP54, 6kVA", specs: "Dual AC output · Homes & clinics", price: 569525, oldPrice: 599500, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-6kW-Hybrid-Solar-Inverter-%E2%80%93-Dual-AC-Output-for-Homes-Clinics-48V-IP54-Rated-2.jpg?w=500" },
      { id: "itel-8k-48v-3ph", category: "Inverter", name: "itel 8kW Hybrid Inverter — 48V, IP66, 3-Phase, WiFi", specs: "Commercial power for offices & estates", price: 2455750, oldPrice: 2585000, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-8kW-3-Phase-Hybrid-Solar-Inverter-%E2%80%93-Commercial-Power-for-Offices-Estates-IP66-2.jpg?w=500" },
      { id: "itel-12k-48v", category: "Inverter", name: "itel 12kW Hybrid Inverter — 48V, IP54, WiFi", specs: "Heavy-duty · Estates, clinics & offices · Dual MPPT", price: 1191300, oldPrice: 1254000, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/05/itel-12kW-Hybrid-Solar-Inverter-%E2%80%93-Heavy-Duty-Backup-for-Estates-Clinics-Offices-48V-Dual-MPPT-2.jpg?w=500" },
      { id: "itel-12k-3ph", category: "Inverter", name: "itel 12kW Hybrid Inverter — 48V, IP66, 3-Phase", specs: "Commercial backup for large loads", price: 2586375, oldPrice: 2722500, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-12kW-3-Phase-Hybrid-Inverter-%E2%80%93-Commercial-Solar-Backup-for-Clinics-Offices-Estates-48V-IP66-Rated-2.jpg?w=500" },

      // ---- Lithium Batteries ----
      { id: "itel-2.56kwh-24v", category: "Lithium Battery", name: "itel 2.56kWh Lithium Battery — 24V, Wall Mounted", specs: "100Ah · IP21 · 5-yr warranty", price: 571615, oldPrice: 601700, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-2.56kWh-Lithium-Battery-Wall-Mounted-Backup-for-Homes-Shops-25.6V-LiFePO4-2-1.jpg?w=500" },
      { id: "itel-5.12kwh-48v", category: "Lithium Battery", name: "itel 5.12kWh Lithium Battery — 48V, Stackable", specs: "100Ah · IP21 · Long backup for homes & offices", price: 945725, oldPrice: 995500, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-5.12kWh-Lithium-Battery-%E2%80%93-Long-Backup-for-Homes-Clinics-Offices-48V-LiFePO4-2.jpg?w=500" },
      { id: "itel-10.24kwh-48v", category: "Lithium Battery", name: "itel 10.24kWh Lithium Battery — 48V, Standing, IP21", specs: "200Ah · Homes, clinics & offices", price: 1807850, oldPrice: 1903000, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/05/itel-10.24kWh-Lithium-Battery-%E2%80%93-Long-Backup-for-Homes-Clinics-Offices-LiFePO4-48V-2.jpg?w=500" },
      { id: "itel-14.33kwh-48v", category: "Lithium Battery", name: "itel 14.33kWh Lithium Battery — 48V, Standing, IP21", specs: "280Ah · Big homes & offices", price: 2586375, oldPrice: 2722500, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itel-14.3kWh-Silent-Power-Battery-%E2%80%93-Long-Backup-for-Big-Homes-Offices-48V-2.jpg?w=500" },
      { id: "itel-16kwh-48v", category: "Lithium Battery", name: "itel 16kWh Lithium Battery — 48V, Standing, IP21", specs: "314Ah · Indoor, whole-home storage", price: 2299000, oldPrice: 2420000, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/05/itel-10240Wh-Lithium-Battery-Standing-48V-200Ah-10.24kWh-IPL-51200.webp?w=500" },

      // ---- Solar Panels ----
      { id: "itel-410w-mono", category: "Solar Panel", name: "itel 410W Monocrystalline Solar Panel", specs: "20.97% efficiency · 108 mono cells · IP68 rated", price: 123500, oldPrice: 130000, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2025/04/itel-410W-Monocrystalline-Solar-Panel-%E2%80%93-Rooftop-Solar-for-Homes-Shops-Offices-High-Efficiency-IP68-Rated-2.jpg?w=500" },
      { id: "itel-590w-bifacial", category: "Solar Panel", name: "itel 590W Bi-Facial Solar Panel — N-Type Mono", specs: "21.29% efficiency · 144 N-type mono cells", price: 137750, oldPrice: 145000, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2025/04/iTel-550W-Solar-Panel-21.29-module-efficiency-with-144-N-Type-Mono-cells-11.jpg?w=500" },

      // ---- Complete Home Systems ----
      { id: "itel-6kw-8kwh-installed", category: "Complete Solar System", name: "iTel 8kWh All-in-One Solar Kit — 3.6kW Inverter + 8×590W Panels", specs: "Full installation included", price: 3420000, oldPrice: 3600000, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/iTel-8kWh-All-in-One-Solar-Power-Kit-3.6kW-Hybrid-Inverter-8%C3%97550W-Panels-%E2%80%93-with-Installation.jpg?w=500" },
      { id: "itel-16kwh-powermax", category: "Complete Solar System", name: "itelSolar PowerMax 16kWh Whole-Home System", specs: "6kW hybrid inverter · 16kWh battery · 12× 590W panels · Installed", price: 5130570, oldPrice: 5400600, image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/04/itelSolar-PowerMax-16K-The-Ultimate-16kWh-6kW-Whole-Home-Energy-System-with-Installation-6kw-Hybrid-inverter-16kwh-Lithium-Battery-12unit-of-590W-Panels.webp?w=500" },
      { id: "itel-6kva-system", category: "Complete Solar System", name: "6kW Complete Hybrid Solar System (Customizable)", specs: "Choose your battery & panel size at checkout", price: 1501038, oldPrice: null, priceNote: "from", image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/05/6kw-complete-solar-system-with-16kwh-lithium-battery-with-panel.webp?w=500" },
      { id: "itel-12kva-system", category: "Complete Solar System", name: "12kW Complete Hybrid Solar System (Customizable)", specs: "Choose your battery & panel size at checkout", price: 2170329, oldPrice: null, priceNote: "from", image: "https://i0.wp.com/itelsolar.ng/wp-content/uploads/2026/05/12kw-complete-solar-system-with-16kwh-lithium-battery-and-with-solar-panel.webp?w=500" }
    ]
  },
  {
    id: "lg",
    name: "LG Energy",
    tagline: "LG solar & storage — catalog coming soon.",
    status: "coming-soon",
    logoText: "LG",
    items: []
  },
  {
    id: "cworth",
    name: "Cworth Energy",
    tagline: "Cworth inverters, panels & lithium batteries — catalog coming soon.",
    status: "coming-soon",
    logoText: "CE",
    items: []
  }
];

function nairaFormat(n) {
  return "₦" + Number(n).toLocaleString("en-NG");
}
