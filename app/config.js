/* ============================================================
   DOUBLE L APP — CONFIGURATION

   This is the only file you have to edit to connect the app to
   the Google Sheet. Follow SETUP.md, paste the web-app URL below,
   and the app is live.
   ============================================================ */

window.DL_CONFIG = {

  /* Paste the Apps Script deployment URL here. It looks like:
     https://script.google.com/macros/s/AKfycb.....……/exec
     Until it is filled in, the app runs on the sample data in
     DEMO_DATA below so the whole flow stays clickable.          */
  API_URL: "https://script.google.com/macros/s/AKfycbwoMYRgTjhhcA37g7DtKiX-COw9CMhW07RhalegMoTHCEmEE71qW92Y4k5QTSLbuF-n/exec",

  /* The yard's number — used by every call button. */
  YARD_PHONE: "+16822621318",
  YARD_PHONE_DISPLAY: "(682) 262-1318",

  /* Which screen the app opens on. Both are built; this is the only
     thing that decides which one a member lands on.

       "fleet"  — comp C, the board, labelled "Order now" in the tab
                  bar. Five machines, price and availability on each,
                  Book on every card.
       "orders" — comp B, the ledger. Your own order history, one
                  tap to run the same order again.

     Whichever you choose, the other is one tab away. If you switch
     this to "orders", swap the first two buttons in the tab bar in
     index.html so the tab order matches where members land.        */
  HOME_TAB: "fleet",

  /* Bump this when you change app.js, styles.css or index.html:
     it is the service worker's cache name, so a new value is what
     pushes the update out to installed devices.                  */
  VERSION: "0.3.1",

  /* Demo mode only — never shown once API_URL is set. Sample data
     so the app can be demonstrated with no sheet behind it.      */
  DEMO_DATA: {
    member: {
      company: "Sample Rental Co",
      name: "Demo user",
      phone: "(555) 555-5555",
      since: "2026"
    },
    units: [
      { id:"u1", name:"6×6 Water Truck",       kind:"Water truck", spec1:"Capacity|4,000 gal",  spec2:"Drive|6×6",            rate:1600, image:"img/water-6x6.jpg",   available:true },
      { id:"u2", name:"Water Truck — Automatic", kind:"Water truck", spec1:"Capacity|4,000 gal", spec2:"Trans|Automatic",         rate:850,  image:"img/water-auto.jpg",  available:true },
      { id:"u3", name:"Kubota SVL97-3",            kind:"Skid steer",  spec1:"Weight|11,989 lb",     spec2:"Coupler|Hydraulic",       rate:613,  image:"img/svl97.jpg",       available:true },
      { id:"u4", name:"Kubota SVL75-3",            kind:"Skid steer",  spec1:"Weight|9,315 lb",      spec2:"Engine|75 hp",            rate:575,  image:"img/svl75.jpg",       available:true },
      { id:"u5", name:"Light Tower",               kind:"Lighting",    spec1:"Lamps|LED",            spec2:"Power|Diesel",            rate:152,  image:"img/lighttower.jpg",  available:true }
    ],
    orders: [
      { ticket:"1042", unitId:"u1", unitName:"6×6 Water Truck",  start:"2026-07-30", days:3, rate:1600, status:"Out" },
      { ticket:"1038", unitId:"u5", unitName:"Light Tower",           start:"2026-07-12", days:7, rate:152,  status:"Returned" },
      { ticket:"1031", unitId:"u4", unitName:"Kubota SVL75-3",        start:"2026-06-28", days:2, rate:575,  status:"Returned" },
      { ticket:"1024", unitId:"u2", unitName:"Water Truck — Automatic", start:"2026-06-09", days:4, rate:850, status:"Returned" }
    ]
  }
};
