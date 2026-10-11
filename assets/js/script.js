/* =========================================================================
   Tamil Traditional Wedding Invitation — shared script
   Used by english.html (lang="en") and tamil.html (lang="ta").

   ✏️  EDIT EVERYTHING IN `weddingConfig` BELOW.
   Shared values (dates, phone numbers, photos, map links) sit at the top.
   Text shown on the page sits in `en` (English) and `ta` (Tamil).
   ========================================================================= */

const weddingConfig = {
  /* ---- Date & time (used by the countdown and "Save the Date") ----
     Always keep the +05:30 (India time) at the end.                   */
  weddingDate: "2026-11-22T04:30:00+05:30",   // Muhurtham start
  weddingEndDate: "2026-11-22T06:00:00+05:30", // Muhurtham end

  /* ---- Phone numbers (country code, no spaces) ---- */
  whatsappNumber: "9488382257",              // RSVP + WhatsApp button
  callNumber: "+919488382257",                 // "Call Us" button

  /* ---- Music: put your song at this path (mp3). If the file is missing,
         a gentle synthesised tanpura drone plays instead. ---- */
  musicFile: "../assets/music/wedding-music.mp4",

  /* ---- Photos: replace these files with your own (keep the names or
         change the paths here). ---- */
  images: {
    bride: "../assets/images/bride.jpg",
    groom: "../assets/images/groom.jpg",
    couple: "../assets/images/couple.jpeg",
    monogram: "../assets/images/monogram.png"
  },

  /* ---- Google Maps links for each venue ---- */
  maps: {
    temple: "https://www.google.com/maps/search/?api=1&query=Sri+Kattu+Vinayagar+Temple+Vadavalli+Coimbatore",
    mandapam: "https://www.google.com/maps/search/?api=1&query=Sankara+Narayana+Kalyana+Mandapam+Vadavalli+Coimbatore"
  },

  /* ---- Gallery: add/remove items freely. w/h = image size in pixels
         (prevents layout jumps while loading). ---- */
  gallery: [
    { src: "../assets/images/gallery/invitation-card.jpg", w: 711, h: 900, en: "Our wedding invitation", ta: "எங்கள் திருமண அழைப்பிதழ்" },
    { src: "../assets/images/gallery/photo-1.jpg", w: 800, h: 1000, en: "Photo 1", ta: "புகைப்படம் 1" },
    { src: "../assets/images/gallery/photo-2.jpg", w: 800, h: 600, en: "Photo 2", ta: "புகைப்படம் 2" },
    { src: "../assets/images/gallery/photo-3.jpg", w: 800, h: 800, en: "Photo 3", ta: "புகைப்படம் 3" },
    { src: "../assets/images/gallery/photo-4.jpg", w: 800, h: 1100, en: "Photo 4", ta: "புகைப்படம் 4" },
    { src: "../assets/images/gallery/photo-5.jpg", w: 800, h: 560, en: "Photo 5", ta: "புகைப்படம் 5" },
    { src: "../assets/images/gallery/photo-6.jpg", w: 800, h: 900, en: "Photo 6", ta: "புகைப்படம் 6" },
    { src: "../assets/images/gallery/photo-7.jpg", w: 800, h: 700, en: "Photo 7", ta: "புகைப்படம் 7" }
  ],

  /* ---- Family contacts shown in the RSVP section ---- */
  contacts: [
    {
      numbers: ["+919488382257", "+919489055178"],
      en: { title: "Bride's Family", names: "Thiru. V. Manikumar & Tmt. M. Rani · Jeeyapuram" },
      ta: { title: "மணமகள் வீட்டார்", names: "திரு. V. மணிக்குமார் – திருமதி. M. ராணி · ஜீயபுரம்" }
    },
    {
      numbers: ["+919994807175", "+919944432797"],
      en: { title: "Groom's Family", names: "Thiru. K.R. Raveendran & Tmt. R. Chitra · Coimbatore" },
      ta: { title: "மணமகன் வீட்டார்", names: "திரு. K.R. இரவீந்திரன் – திருமதி. R. சித்ரா · கோவை" }
    }
  ],

  /* =======================  ENGLISH TEXT  ======================= */
  en: {
    groomTitle: "Er. K.R.",
    groomName: "Shree raam",
    groomQual: "B.E. EEE",
    groomRole: "Managing Director, Shree Harsha Power Tech",
    groomParents: "Thiru. K.R. Raveendran & Tmt. R. Chitra",
    groomPlace: "Kattuputhur, Tiruchirappalli",

    brideTitle: "Dr. M.",
    brideName: "Gayathri",
    brideAlias: "(a) Poongodi",
    brideQual: "BNYS",
    brideRole: "Assistant Professor cum Medical Officer, Swamy Vivekanandha Naturopathy & Yoga Medical College",
    brideParents: "Thiru. V. Manikumar & Tmt. M. Rani",
    bridePlace: "Jeeyapuram, Tiruchirappalli",

    inviteMessage: "With the blessings of our parents and elders, we cordially invite you, with your family and friends, to celebrate the wedding of",
    dateText: "22 November 2026",
    weddingDay: "Sunday",
    timeText: "4:30 AM – 6:00 AM",
    astroText: "Parabhava year, Karthigai 6 · Shukla Paksha Trayodashi · Ashwini Nakshatra · Siddha Yogam · Vrischika Lagnam",
    venueName: "Sri Kattu Vinayagar Temple",
    venueAddress: "Vadavalli, Coimbatore, Tamil Nadu",
    busNote: "Bus route: all buses to Marudhamalai via Vadavalli — get down at the Thiruvalluvar Nagar bus stop.",

    events: [
      { icon: "garland", kicker: "மாப்பிள்ளை அழைப்பு", title: "Mappillai Azhaippu", sub: "Welcoming the groom", date: "Saturday, 21 Nov 2026", time: "6:00 PM", venue: "Sankara Narayana Kalyana Mandapam, Vadavalli", map: "mandapam" },
      { icon: "diya", kicker: "வரவேற்பு", title: "Reception", sub: "An evening of blessings", date: "Saturday, 21 Nov 2026", time: "6:30 PM onwards", venue: "Sankara Narayana Kalyana Mandapam, Vadavalli", map: "mandapam" },
      { icon: "kalasam", kicker: "சுப முகூர்த்தம்", title: "Muhurtham", sub: "The sacred wedding", date: "Sunday, 22 Nov 2026", time: "4:30 AM – 6:00 AM", venue: "Sri Kattu Vinayagar Temple, Vadavalli", map: "temple", highlight: true, ribbon: "Auspicious time" },
      { icon: "leaf", kicker: "விருந்து உபசரிப்பு", title: "Wedding Feast", sub: "Traditional banana-leaf meal", date: "Sunday, 22 Nov 2026", time: "Breakfast from 7:00 AM · Lunch at 12:00 noon", venue: "Sankara Narayana Kalyana Mandapam, Vadavalli", map: "mandapam" }
    ],

    venues: [
      { key: "temple", art: "gopuram", tag: "Muhurtham", name: "Sri Kattu Vinayagar Temple", address: "Vadavalli, Coimbatore, Tamil Nadu" },
      { key: "mandapam", art: "mandapam", tag: "Reception & Feast", name: "Sankara Narayana Kalyana Mandapam", address: "Vadavalli – Marudhamalai Main Road, Vadavalli, Coimbatore" }
    ],

    /* Our Journey — replace the [bracketed] dates and texts with your own */
    story: [
      { icon: "lotus", date: "[24/07/2026]", title: "Two Families, One Wish", text: "Our elders brought our families together with blessings and a shared hope for our future." },
      { icon: "kalasam", date: "[13/09/2026]", title: "The Alliance is Fixed", text: "With the blessings of elders, the wedding was fixed — and two homes became one family." },
      { icon: "rings", date: "22 November 2026", title: "Forever Begins", text: "At the auspicious Muhurtham, before our families and the sacred fire, we begin our life together." }
    ]
  },

  /* =======================  TAMIL TEXT  ======================= */
  ta: {
    groomTitle: "Er. K.R.",
    groomName: "ஸ்ரீராம்",
    groomQual: "B.E. EEE  ",
    groomRole: "M.D. – Shree Harsha Power Tech",
    groomParents: "திரு. K.R. இரவீந்திரன் – திருமதி. R. சித்ரா",
    groomPlace: "காட்டுப்புத்தூர், திருச்சி மாவட்டம்",

    brideTitle: "Dr. M.",
    brideName: "காயத்ரி",
    brideAlias: "(எ) பூங்கொடி",
    brideQual: "BNYS",
    brideRole: "Assistant Professor Cum Medical Officer, Swamy Vivekanandha Naturopathy & Yoga Medical College",
    brideParents: "திரு. V. மணிக்குமார் – திருமதி. M. ராணி",
    bridePlace: "ஜீயபுரம், திருச்சி மாவட்டம்",

    inviteMessage: "அன்புடையீர், வணக்கம்! பெற்றோர் மற்றும் பெரியோர்களின் நல்லாசியுடன் நிச்சயிக்கப்பட்ட எங்கள் இல்லத் திருமணத்திற்கு, தாங்கள் சுற்றமும் நட்பும் சூழ வருகை தந்து மணமக்களை வாழ்த்தியருள அன்புடன் அழைக்கின்றோம்.",
    dateText: "22.11.2026",
    weddingDay: "ஞாயிற்றுக்கிழமை",
    timeText: "அதிகாலை 4.30 – 6.00 மணி",
    astroText: "பராபவ வருடம் கார்த்திகை மாதம் 06-ம் தேதி · சுக்கிலபக்ஷத்து திரயோதசி திதி · அசுவதி நட்சத்திரம் · சித்தயோகம் · விருச்சிக லக்னம்",
    venueName: "ஸ்ரீ காட்டுவிநாயகர் கோவில்",
    venueAddress: "வடவள்ளி, கோவை மாவட்டம்",
    busNote: "பஸ் ரூட்: வடவள்ளி வழியாக மருதமலை செல்லும் அனைத்துப் பேருந்துகளும் – திருவள்ளுவர் நகர் பேருந்து நிறுத்தம்.",

    events: [
      { icon: "garland", kicker: "Mappillai Azhaippu", title: "மாப்பிள்ளை அழைப்பு", sub: "", date: "21.11.2026 · சனிக்கிழமை", time: "மாலை 6.00 மணி", venue: "சங்கர நாராயணா கல்யாண மண்டபம், வடவள்ளி", map: "mandapam" },
      { icon: "diya", kicker: "Reception", title: "வரவேற்பு", sub: "", date: "21.11.2026 · சனிக்கிழமை", time: "மாலை 6.30 மணிக்குமேல்", venue: "சங்கர நாராயணா கல்யாண மண்டபம், வடவள்ளி", map: "mandapam" },
      { icon: "kalasam", kicker: "Muhurtham", title: "சுப முகூர்த்தம்", sub: "", date: "22.11.2026 · ஞாயிற்றுக்கிழமை", time: "அதிகாலை 4.30 – 6.00 மணி", venue: "ஸ்ரீ காட்டுவிநாயகர் கோவில், வடவள்ளி", map: "temple", highlight: true, ribbon: "சுப வேளை" },
      { icon: "leaf", kicker: "Wedding Feast", title: "விருந்து உபசரிப்பு", sub: "", date: "22.11.2026 · ஞாயிற்றுக்கிழமை", time: "காலை 7.00 மணி முதல் · சம்பந்தி விருந்து மதியம் 12.00 மணி", venue: "சங்கர நாராயணா கல்யாண மண்டபம், வடவள்ளி", map: "mandapam" }
    ],

    venues: [
      { key: "temple", art: "gopuram", tag: "சுப முகூர்த்தம்", name: "ஸ்ரீ காட்டுவிநாயகர் கோவில்", address: "வடவள்ளி, கோவை" },
      { key: "mandapam", art: "mandapam", tag: "வரவேற்பு & விருந்து", name: "சங்கர நாராயணா கல்யாண மண்டபம்", address: "வடவள்ளி – மருதமலை பிரதான சாலை, வடவள்ளி, கோவை" }
    ],

    story: [
      { icon: "lotus", date: "[24/07/2026]", title: "இரு குடும்பங்களின் சந்திப்பு", text: "பெரியோர்களின் ஆசியுடன் எங்கள் இரு குடும்பங்களும் ஒன்றிணைந்தன." },
      { icon: "kalasam", date: "[13/09/2026]", title: "திருமணம் நிச்சயம்", text: "பெரியோர்களால் திருமணம் நிச்சயிக்கப்பட்டு, இரு இல்லங்களும் ஒரே உறவாயின." },
      { icon: "rings", date: "22.11.2026", title: "என்றென்றும் இணைந்து", text: "சுப முகூர்த்த வேளையில், அக்னி சாட்சியாக எங்கள் புதிய வாழ்க்கை தொடங்குகிறது." }
    ]
  }
};

/* -------------------------------------------------------------------------
   Interface text generated by the script (rarely needs editing)
   ------------------------------------------------------------------------- */
const UI_TEXT = {
  en: {
    days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    today: "Today is the Day! ❤️",
    after: "Happily married — thank you for your blessings! ❤️",
    directions: "Get directions", viewLocation: "View Location",
    musicPlay: "Play music", musicPause: "Pause music",
    musicFallback: "Playing a soft tanpura drone. Add your song at assets/music/wedding-music.mp4",
    openPhoto: "Open photo", photoOf: "of",
    rsvpOpening: "Opening WhatsApp…",
    waDefault: "Vanakkam! We received the wedding invitation for Shree raam & Gayathri. ",
    calTitle: "Wedding of Shree raam & Gayathri (Muhurtham)",
    calDetails: "Muhurtham 4:30 – 6:00 AM. Reception on 21 Nov 2026, 6:30 PM at Sankara Narayana Kalyana Mandapam, Vadavalli.",
    rsvpText: (d) =>
      `🙏 RSVP — Shree raam & Gayathri's Wedding\n\nName: ${d.name}\nAttending: ${d.attending}\nGuests: ${d.guests}` +
      (d.events.length ? `\nEvents: ${d.events.join(", ")}` : "") +
      (d.msg ? `\n\nBlessings: ${d.msg}` : ""),
    yes: "Yes, joyfully", no: "Sorry, can't make it"
  },
  ta: {
    days: "நாட்கள்", hours: "மணி", minutes: "நிமிடம்", seconds: "விநாடி",
    today: "இன்று நம் திருமண நாள்! ❤️",
    after: "திருமணம் இனிதே நடைபெற்றது — தங்கள் ஆசிகளுக்கு நன்றி! ❤️",
    directions: "வழி காண", viewLocation: "இடத்தைப் பார்க்க",
    musicPlay: "இசையை இயக்கு", musicPause: "இசையை நிறுத்து",
    musicFallback: "மென்மையான தம்புரா இசை ஒலிக்கிறது. உங்கள் பாடலை assets/music/wedding-music.mp4 இல் சேர்க்கவும்",
    openPhoto: "புகைப்படம் திறக்க", photoOf: "/",
    rsvpOpening: "வாட்ஸ்அப் திறக்கிறது…",
    waDefault: "வணக்கம்! ஸ்ரீராம் – காயத்ரி திருமண அழைப்பிதழ் கிடைத்தது. ",
    calTitle: "ஸ்ரீராம் – காயத்ரி திருமணம் (சுப முகூர்த்தம்)",
    calDetails: "முகூர்த்தம் அதிகாலை 4.30 – 6.00. வரவேற்பு 21.11.2026 மாலை 6.30, சங்கர நாராயணா கல்யாண மண்டபம், வடவள்ளி.",
    rsvpText: (d) =>
      `🙏 வருகை உறுதி — ஸ்ரீராம் & காயத்ரி திருமணம்\n\nபெயர்: ${d.name}\nவருகை: ${d.attending}\nநபர்கள்: ${d.guests}` +
      (d.events.length ? `\nநிகழ்வுகள்: ${d.events.join(", ")}` : "") +
      (d.msg ? `\n\nவாழ்த்து: ${d.msg}` : ""),
    yes: "ஆம், மகிழ்ச்சியுடன்", no: "வர இயலவில்லை"
  }
};

/* =========================================================================
   Everything below builds the page from the config — no edits needed.
   ========================================================================= */
(() => {
  "use strict";

  const doc = document;
  const root = doc.documentElement;
  const body = doc.body;
  const LANG = root.lang === "ta" ? "ta" : "en";
  const C = weddingConfig;
  const L = Object.assign({}, C, C[LANG]);
  const T = UI_TEXT[LANG];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const $ = (s, c = doc) => c.querySelector(s);
  const $$ = (s, c = doc) => Array.from(c.querySelectorAll(s));
  const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = (id, cls = "") => `<svg class="ico ${cls}" aria-hidden="true" focusable="false"><use href="#i-${id}"/></svg>`;
  const rand = (a, b) => a + Math.random() * (b - a);
  const fmtPhone = (n) => {
    const d = n.replace(/[^\d+]/g, "");
    return d.startsWith("+91") && d.length === 13 ? `+91 ${d.slice(3, 8)} ${d.slice(8)}` : d;
  };

  /* -----------------------------------------------------------------------
     SVG ARTWORK (sprite + inline illustrations)
     ----------------------------------------------------------------------- */
  const flamePath = (x, y, h, w = 6) =>
    `M${x} ${y}C${x + w} ${y - h * 0.35} ${x + w * 0.7} ${y - h * 0.72} ${x} ${y - h}C${x - w * 0.7} ${y - h * 0.72} ${x - w} ${y - h * 0.35} ${x} ${y}Z`;

  function gopuramPaths() {
    const W = 200, base = 232;
    let d = `M8 ${base}V180H192V${base}Z`;
    let niches = "";
    let y = 180, w = 172;
    for (let i = 0; i < 7; i++) {
      const h = 21, inset = 6, x1 = (W - w) / 2, x2 = x1 + w;
      d += `M${x1} ${y}L${x1 + inset} ${y - h}H${x2 - inset}L${x2} ${y}Z`;
      d += `M${x1 - 3} ${y + 1}h${w + 6}v-4h-${w + 6}Z`;
      const n = Math.max(1, Math.round(w / 34));
      for (let k = 0; k < n; k++) {
        const cx = x1 + inset + 8 + k * ((w - 2 * inset - 16) / Math.max(1, n - 1 || 1));
        niches += `M${(n === 1 ? W / 2 : cx) - 3} ${y - 4}v-9a3 3 0 0 1 6 0v9Z`;
      }
      y -= h; w -= 18;
    }
    const x1 = (W - w) / 2, x2 = x1 + w;
    d += `M${x1 - 10} ${y}Q${W / 2} ${y - 40} ${x2 + 10} ${y}Z`;
    for (let k = 0; k < 5; k++) {
      const t = 0.12 + k * 0.19;
      const cx = (x1 - 10) + t * (w + 20);
      const cy = y - 40 * 2 * t * (1 - t) * 0.98;
      d += `M${cx - 3} ${cy}h6l-1.2-6h-3.6ZM${cx} ${cy - 9}m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M${cx - .7} ${cy - 11.5}v-6h1.4v6Z`;
    }
    niches += `M88 ${base}V206a12 12 0 0 1 24 0V${base}Z`;
    return `<svg viewBox="0 0 200 ${base}" fill="currentColor" aria-hidden="true"><path d="${d}"/><path d="${niches}" fill="rgba(0,0,0,.28)"/></svg>`;
  }

  function mandapamSVG() {
    let pillars = "";
    for (let i = 0; i < 6; i++) {
      const x = 44 + i * 30.4;
      pillars += `M${x - 7} 140h14v-7h-14ZM${x - 4} 133h8V76h-8ZM${x - 7} 76h14v-6h-14ZM${x - 4} 120h8v3h-8ZM${x - 4} 92h8v3h-8Z`;
    }
    let kal = "";
    [100, 120, 140].forEach((x, i) => {
      const top = i === 1 ? 6 : 14;
      kal += `M${x - 3} ${top + 12}h6l-1-5h-4ZM${x} ${top + 4}m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0`;
    });
    return `<svg viewBox="0 0 240 172" aria-hidden="true">
      <path fill="currentColor" d="M8 172h224v-10H8ZM20 162h200v-10H20ZM30 152h180v-12H30Z${pillars}M26 70h188V58H26ZM18 58L52 30H188L222 58ZM76 30L96 16H144L164 30Z${kal}"/>
      <path d="M44 84Q59 100 74 84Q89 100 105 84Q120 100 135 84Q150 100 165 84Q180 100 196 84" fill="none" stroke="#f29a1d" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="0 5"/>
      <path d="M26 64h188" stroke="rgba(255,220,150,.55)" stroke-width="1" stroke-dasharray="2 4"/>
    </svg>`;
  }

  const ART = {
    lamp() {
      const flames = [[20, 87, 22], [40, 90, 27], [60, 91, 33], [80, 90, 27], [100, 87, 22]]
        .map(([x, y, h], i) => `<path class="flame" style="--i:${i}" d="${flamePath(x, y, h)}" fill="url(#g-flame)"/>`).join("");
      return `<svg class="lamp" viewBox="0 0 120 300" aria-hidden="true">
        <circle class="lamp-glow" cx="60" cy="72" r="58" fill="url(#g-glow)"/>
        <g>${flames}</g>
        <path d="M60 4c6 4 8 10 4 16c5 1 9 5 9 10H47c0-5 4-9 9-10c-4-6-2-12 4-16z" fill="url(#g-brass)"/>
        <path d="M60 10c-3 3-3 6 0 9c3-3 3-6 0-9z" fill="#fff3c4" opacity=".55"/>
        <rect x="49" y="30" width="22" height="5" rx="2.5" fill="url(#g-brass)"/>
        <path d="M56 35h8l2 30h-12z" fill="url(#g-brass)"/>
        <ellipse cx="60" cy="66" rx="12" ry="4" fill="url(#g-brass)"/>
        <path d="M12 86c12 3 24 4 48 4s36-1 48-4l-4 7c-9 13-25 19-44 19S25 106 16 93z" fill="url(#g-brass)"/>
        <ellipse cx="60" cy="88" rx="46" ry="4.6" fill="#6a430e"/>
        <ellipse cx="60" cy="87.6" rx="43" ry="3" fill="#c79034" opacity=".6"/>
        <path d="M30 100q30 10 60 0" stroke="#fff0b8" stroke-width="1" fill="none" opacity=".5"/>
        <path d="M52 111h16l-2 7h-12z" fill="url(#g-brass)"/>
        <ellipse cx="60" cy="120" rx="11" ry="4" fill="url(#g-brass)"/>
        <rect x="55.5" y="122" width="9" height="112" fill="url(#g-brass)"/>
        <ellipse cx="60" cy="150" rx="9" ry="3.4" fill="url(#g-brass)"/>
        <ellipse cx="60" cy="176" rx="13" ry="9" fill="url(#g-brass)"/>
        <ellipse cx="60" cy="173" rx="8" ry="3" fill="#fff0b8" opacity=".35"/>
        <ellipse cx="60" cy="204" rx="9" ry="3.4" fill="url(#g-brass)"/>
        <ellipse cx="60" cy="234" rx="14" ry="5" fill="url(#g-brass)"/>
        <path d="M50 236c0 18-14 32-40 42h100c-26-10-40-24-40-42z" fill="url(#g-brass)"/>
        <path d="M36 262q24 8 48 0" stroke="#6a430e" stroke-width="1.2" fill="none" stroke-dasharray="2 3"/>
        <ellipse cx="60" cy="279" rx="52" ry="7" fill="url(#g-brass)"/>
        <rect x="9" y="279" width="102" height="11" rx="3" fill="url(#g-brass)"/>
        <ellipse cx="60" cy="291" rx="50" ry="5" fill="#4a2c06" opacity=".7"/>
      </svg>`;
    },

    diya() {
      return `<svg viewBox="0 0 60 50" aria-hidden="true">
        <circle class="lamp-glow" cx="30" cy="18" r="18" fill="url(#g-glow)"/>
        <path class="flame" d="${flamePath(30, 26, 18, 4.5)}" fill="url(#g-flame)"/>
        <path d="M4 26h52c-3 12-14 18-26 18S7 38 4 26z" fill="url(#g-clay)"/>
        <path d="M4 26h52" stroke="#ffd27a" stroke-width="1.4"/>
        <path d="M12 33q18 7 36 0" stroke="#ffd27a" stroke-width=".9" fill="none" stroke-dasharray="1.5 2.5"/>
      </svg>`;
    },

    divider() {
      return `<svg class="divider" viewBox="0 0 240 40" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" aria-hidden="true">
        <path pathLength="1" d="M6 20H86"/><path pathLength="1" d="M234 20H154"/>
        <path pathLength="1" d="M92 20l6-6 6 6-6 6zM136 20l6-6 6 6-6 6z"/>
        <path pathLength="1" d="M120 20c-6-6-6-13 0-18c6 5 6 12 0 18zM120 20c6 6 6 13 0 18c-6-5-6-12 0-18zM120 20c-6 6-13 6-16 0c3-6 10-6 16 0zM120 20c6-6 13-6 16 0c-3 6-10 6-16 0z"/>
        <path pathLength="1" d="M120 20m-24 0a24 24 0 1 0 48 0a24 24 0 1 0-48 0" opacity=".35"/>
        <g fill="currentColor" stroke="none"><circle cx="120" cy="20" r="2.2"/><circle cx="110" cy="10" r="1.4"/><circle cx="130" cy="10" r="1.4"/><circle cx="110" cy="30" r="1.4"/><circle cx="130" cy="30" r="1.4"/><circle cx="6" cy="20" r="2"/><circle cx="234" cy="20" r="2"/></g>
      </svg>`;
    },

    kolamRing() {
      const petals = Array.from({ length: 12 }, (_, i) => `<path d="M0-30C10-44 10-58 0-72C-10-58-10-44 0-30Z" transform="rotate(${i * 30})"/>`).join("");
      const inner = Array.from({ length: 8 }, (_, i) => `<path d="M0-6C5-14 5-20 0-26C-5-20-5-14 0-6Z" transform="rotate(${i * 45})"/>`).join("");
      const arcs = Array.from({ length: 24 }, (_, i) => `<path d="M-11-90Q0-104 11-90" transform="rotate(${i * 15 + 7.5})"/>`).join("");
      const dots = Array.from({ length: 24 }, (_, i) => { const a = (i * 15) * Math.PI / 180; return `<circle cx="${(Math.sin(a) * 86).toFixed(1)}" cy="${(-Math.cos(a) * 86).toFixed(1)}" r="1.8"/>`; }).join("");
      return `<svg viewBox="-110 -110 220 220" fill="none" stroke="currentColor" stroke-width="1.1" aria-hidden="true">
        ${petals}${inner}${arcs}<circle r="26"/><circle r="78" stroke-dasharray="2 5"/><g fill="currentColor" stroke="none">${dots}<circle r="3"/></g></svg>`;
    },

    gopuram: gopuramPaths,
    mandapam: mandapamSVG,

    banana() {
      return `<svg viewBox="0 0 140 280" aria-hidden="true">
        <path d="M62 280C60 222 62 172 66 122h10c4 50 4 100 2 158z" fill="#8fae4e"/>
        <path d="M66 122h10c1 40 2 90 1 158h-4c0-60-2-110-7-158z" fill="#6f9139"/>
        <g fill="url(#g-banana)">
          <path d="M68 128C40 112 14 96 4 58c26 18 48 36 66 64z"/>
          <path d="M68 124C50 90 40 50 46 6c16 34 24 74 26 116z"/>
          <path d="M72 124c12-38 28-74 50-102-6 40-24 74-46 104z"/>
          <path d="M74 130c26-10 50-22 64-54-8 36-32 52-62 60z"/>
          <path d="M70 122C68 80 72 40 80 0c6 40 2 84-6 122z"/>
        </g>
        <g stroke="#cfe3a4" stroke-width=".9" fill="none" opacity=".7">
          <path d="M68 126C46 110 24 92 8 62"/><path d="M69 122C56 88 48 50 47 10"/><path d="M73 124c14-36 28-66 47-98"/><path d="M75 132c24-10 46-26 61-52"/><path d="M72 120C71 80 74 40 80 4"/>
        </g>
      </svg>`;
    }
  };

  const SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="position:absolute;width:0;height:0;overflow:hidden">
  <defs>
    <linearGradient id="g-brass" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#5e3a0c"/><stop offset=".28" stop-color="#b98328"/><stop offset=".5" stop-color="#ffe7a3"/><stop offset=".72" stop-color="#d29a37"/><stop offset="1" stop-color="#6a430e"/>
    </linearGradient>
    <linearGradient id="g-gold" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#fbe7a8"/><stop offset=".5" stop-color="#d4a24c"/><stop offset="1" stop-color="#9b6c1c"/>
    </linearGradient>
    <linearGradient id="g-clay" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#c8742f"/><stop offset="1" stop-color="#7a3712"/>
    </linearGradient>
    <radialGradient id="g-flame" cx=".5" cy=".78" r=".62">
      <stop offset="0" stop-color="#fffdf0"/><stop offset=".3" stop-color="#ffe58a"/><stop offset=".68" stop-color="#ff9f22"/><stop offset="1" stop-color="#e2500f"/>
    </radialGradient>
    <radialGradient id="g-glow">
      <stop offset="0" stop-color="rgb(255,206,110)" stop-opacity=".8"/><stop offset=".45" stop-color="rgb(255,170,60)" stop-opacity=".22"/><stop offset="1" stop-color="rgb(255,150,40)" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="g-leaf" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#4f9445"/><stop offset="1" stop-color="#1f5124"/>
    </linearGradient>
    <linearGradient id="g-banana" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#7cb653"/><stop offset="1" stop-color="#2d6a2f"/>
    </linearGradient>
    <pattern id="p-thoranam" width="36" height="60" patternUnits="userSpaceOnUse">
      <path d="M0 6Q18 12 36 6" stroke="#c8932a" stroke-width="2" fill="none"/>
      <path d="M18 9C27 20 26 40 18 57C10 40 9 20 18 9Z" fill="url(#g-leaf)"/>
      <path d="M18 12V54" stroke="#a9cf93" stroke-width=".8"/>
      <circle cx="0" cy="7" r="5.4" fill="#f39c1e"/><circle cx="36" cy="7" r="5.4" fill="#f39c1e"/>
      <circle cx="0" cy="7" r="2.4" fill="#d9600b"/><circle cx="36" cy="7" r="2.4" fill="#d9600b"/>
    </pattern>
  </defs>

  <symbol id="i-bell" viewBox="0 0 40 66">
    <path d="M20 0v13" stroke="#c9952e" stroke-width="1.8"/>
    <circle cx="20" cy="15.5" r="3" fill="none" stroke="#c9952e" stroke-width="1.6"/>
    <path d="M20 18.5c-8 0-11 7-11 16v9c0 4-3 7-6 9h34c-3-2-6-5-6-9v-9c0-9-3-16-11-16z" fill="url(#g-brass)"/>
    <path d="M14 30c1-5 3-7 6-7" stroke="#fff3c4" stroke-width="1.4" fill="none" opacity=".7"/>
    <rect x="2" y="52" width="36" height="4" rx="2" fill="url(#g-brass)"/>
    <circle cx="20" cy="61" r="4" fill="url(#g-brass)"/>
  </symbol>

  <symbol id="i-lotus" viewBox="-50 -50 100 100">
    <g fill="url(#g-gold)" stroke="#5e3a0c" stroke-width=".8">
      ${Array.from({ length: 8 }, (_, i) => `<path d="M0-9C10-21 10-35 0-47C-10-35-10-21 0-9Z" transform="rotate(${i * 45})"/>`).join("")}
      ${Array.from({ length: 8 }, (_, i) => `<path d="M0-8C6-15 6-24 0-31C-6-24-6-15 0-8Z" transform="rotate(${i * 45 + 22.5})"/>`).join("")}
      <circle r="10"/>
    </g>
    <circle r="5" fill="#7a1422"/><circle r="2" fill="#fbe7a8"/>
  </symbol>

  <symbol id="i-corner" viewBox="0 0 100 100">
    <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
      <path d="M3 97V38C3 18 18 3 38 3h59"/>
      <path d="M12 97V44c0-18 14-32 32-32h53" opacity=".6"/>
      <path d="M26 70c0-24 16-40 40-40 10 0 16 6 16 13s-5 11-11 11-8-4-8-8"/>
      <path d="M22 22c6-8 16-8 20-2-6 0-12 4-14 10-6-2-8-4-6-8z"/>
    </g>
    <g fill="currentColor"><circle cx="3" cy="97" r="2.4"/><circle cx="97" cy="3" r="2.4"/><circle cx="20" cy="20" r="2.6"/></g>
  </symbol>

  <symbol id="i-kalasam" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 31c0-7 4.5-11 10-11s10 4 10 11-4.5 11-10 11-10-4-10-11z"/><path d="M15.5 30h17M17 25.5h14"/><path d="M19 20l1.5-4h7L29 20"/><path d="M18 16h12"/>
    <path d="M24 16c-3-5-8-7-13-7 2 5 7 7 13 7zM24 16c3-5 8-7 13-7-2 5-7 7-13 7z"/><ellipse cx="24" cy="10" rx="3.4" ry="4.2"/><path d="M20 42h8"/></g></symbol>
  <symbol id="i-garland" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round">
    <path d="M10 7c0 17 6 28 14 28s14-11 14-28" stroke-width="4.2" stroke-dasharray="0 4.8"/><path d="M24 36v3" stroke-width="2"/><circle cx="24" cy="41.6" r="2.6" stroke-width="2"/><path d="M7 7h6M35 7h6" stroke-width="2"/></g></symbol>
  <symbol id="i-diya" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7 27h34c-2 8-9 12-17 12S9 35 7 27z"/><path d="M19 39l-1 4h12l-1-4"/></g><path d="M24 23c3.2-2.6 3.6-6.6 0-12-3.6 5.4-3.2 9.4 0 12z" fill="currentColor"/></symbol>
  <symbol id="i-leaf" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 36C9 18 25 7 43 9c-1 18-17 30-38 27z"/><path d="M7 34L41 11"/><path d="M15 28l-2-6M21 24l-2-7M27 20l-1-7M19 31l6 1M25 27l7 1M31 23l7 0" stroke-width="1.4"/></g></symbol>
  <symbol id="i-lotusline" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
    <path d="M24 38c-8 0-14-5-16-12 6 0 12 3 16 8 4-5 10-8 16-8-2 7-8 12-16 12z"/><path d="M24 34c-4-5-4-13 0-20 4 7 4 15 0 20z"/></g></symbol>
  <symbol id="i-heart" viewBox="0 0 48 48"><path d="M24 40S7 29.5 7 18a8.5 8.5 0 0 1 17-2 8.5 8.5 0 0 1 17 2c0 11.5-17 22-17 22z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
  <symbol id="i-rings" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="19" cy="29" r="10"/><circle cx="29" cy="29" r="10"/><path d="M24 7l3.4 4-3.4 5-3.4-5z" stroke-linejoin="round"/></g></symbol>
  <symbol id="i-pin" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2.4"><path d="M24 44s13-12.5 13-24a13 13 0 1 0-26 0c0 11.5 13 24 13 24z"/><circle cx="24" cy="20" r="4.5"/></g></symbol>
  <symbol id="i-clock" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="24" cy="24" r="17"/><path d="M24 14v10l7 4"/></g></symbol>
  <symbol id="i-calendar" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="8" y="11" width="32" height="29" rx="4"/><path d="M8 19h32M16 7v8M32 7v8"/></g><g fill="currentColor"><circle cx="17" cy="27" r="2"/><circle cx="24" cy="27" r="2"/><circle cx="31" cy="27" r="2"/><circle cx="17" cy="33" r="2"/></g></symbol>
  <symbol id="i-phone" viewBox="0 0 48 48"><path d="M15 7h-5a3 3 0 0 0-3 3c0 17 14 31 31 31a3 3 0 0 0 3-3v-5l-8-4-4 4c-5-2-9-6-11-11l4-4z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/></symbol>
  <symbol id="i-chat" viewBox="0 0 48 48"><path d="M8 41l2.8-8.4A17 17 0 1 1 17 38.6z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><path d="M19 16.5c-1.2 4 2 10 7.6 13 2.2 1.2 4 .4 5-1.8l-3-2.8-2 1c-2-1-3.8-2.8-4.8-4.8l1-2-2.8-3c-.6 0-.8 0-1 .4z" fill="currentColor"/></symbol>
  <symbol id="i-music" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"><path d="M18 36V10l20-4v26"/><circle cx="13.5" cy="36" r="4.5"/><circle cx="33.5" cy="32" r="4.5"/></g></symbol>
  <symbol id="i-close" viewBox="0 0 48 48"><path d="M13 13l22 22M35 13L13 35" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/></symbol>
  <symbol id="i-chev-l" viewBox="0 0 48 48"><path d="M30 10L16 24l14 14" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-chev-r" viewBox="0 0 48 48"><path d="M18 10l14 14-14 14" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-bus" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><rect x="10" y="7" width="28" height="30" rx="5"/><path d="M10 24h28M17 31h2M29 31h2M15 37v4M33 37v4M16 13h16"/></g></symbol>
  <symbol id="i-bellline" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6v4"/><path d="M14 34V24a10 10 0 0 1 20 0v10l4 4H10z"/><path d="M20 42a4 4 0 0 0 8 0"/></g></symbol>
</svg>`;

  function injectArt() {
    body.insertAdjacentHTML("afterbegin", SPRITE);
    $$("[data-art]").forEach((el) => {
      const fn = ART[el.dataset.art];
      if (fn) el.innerHTML = fn();
    });
  }

  /* -----------------------------------------------------------------------
     CONFIG → PAGE
     ----------------------------------------------------------------------- */
  function applyConfig() {
    $$("[data-cfg]").forEach((el) => {
      const v = get(L, el.dataset.cfg);
      if (v === "" || v == null) { if (v === "") el.hidden = true; return; }
      el.textContent = v;
    });
    $$("[data-cfg-src]").forEach((el) => { const v = get(L, el.dataset.cfgSrc); if (v) el.src = v; });

    // Save the Date (Google Calendar)
    const toCal = (iso) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const saveBtn = $("#saveDate");
    if (saveBtn) {
      const loc = `${L.venueName}, ${L.venueAddress}`;
      saveBtn.href = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        `&text=${encodeURIComponent(T.calTitle)}` +
        `&dates=${toCal(C.weddingDate)}/${toCal(C.weddingEndDate || C.weddingDate)}` +
        `&details=${encodeURIComponent(T.calDetails)}` +
        `&location=${encodeURIComponent(loc)}`;
    }
    const wa = `https://wa.me/${C.whatsappNumber}?text=${encodeURIComponent(T.waDefault)}`;
    $$("[data-wa]").forEach((a) => (a.href = wa));
    $$("[data-call]").forEach((a) => (a.href = `tel:${C.callNumber}`));

    renderEvents();
    renderVenues();
    renderStory();
    renderGallery();
    renderContacts();
  }

  function renderEvents() {
    const box = $("#eventsList");
    if (!box || !L.events) return;
    box.innerHTML = L.events.map((e, i) => `
      <article class="event${e.highlight ? " event--highlight" : ""}" data-reveal="up" style="--d:${(i % 2) * 0.12}s">
        ${e.ribbon ? `<span class="event__ribbon">${esc(e.ribbon)}</span>` : ""}
        <div class="event__icon">${icon(e.icon)}</div>
        <p class="event__kicker">${esc(e.kicker)}</p>
        <h3 class="event__title">${esc(e.title)}</h3>
        ${e.sub ? `<p class="event__sub">${esc(e.sub)}</p>` : ""}
        <ul class="event__meta">
          <li>${icon("calendar")}<span>${esc(e.date)}</span></li>
          <li>${icon("clock")}<span>${esc(e.time)}</span></li>
          <li>${icon("pin")}<span>${esc(e.venue)}</span></li>
        </ul>
        ${e.map && C.maps[e.map] ? `<a class="event__link" href="${esc(C.maps[e.map])}" target="_blank" rel="noopener">${icon("pin")}${esc(T.directions)}</a>` : ""}
      </article>`).join("");

    // RSVP event choices
    const choices = $("#rsvpEvents");
    if (choices) {
      choices.innerHTML = L.events.map((e) => `
        <label class="choice"><input type="checkbox" name="events" value="${esc(e.title)}" checked><span>${esc(e.title)}</span></label>`).join("");
    }
  }

  function renderVenues() {
    const box = $("#venueList");
    if (!box || !L.venues) return;
    box.innerHTML = L.venues.map((v, i) => `
      <article class="venue" data-reveal="${i % 2 ? "right" : "left"}">
        <div class="venue__art">${ART[v.art] ? ART[v.art]() : ""}</div>
        <span class="venue__tag">${esc(v.tag)}</span>
        <h3 class="venue__name">${esc(v.name)}</h3>
        <p class="venue__addr">${icon("pin")}<span>${esc(v.address)}</span></p>
        <a class="btn btn--gold" href="${esc(C.maps[v.key] || "#")}" target="_blank" rel="noopener">${icon("pin")}${esc(T.viewLocation)}</a>
      </article>`).join("");
  }

  function renderStory() {
    const box = $("#storyList");
    if (!box || !L.story) return;
    const iconMap = { lotus: "lotusline", kalasam: "kalasam", heart: "heart", rings: "rings" };
    box.innerHTML = L.story.map((s, i) => `
      <li class="tl" data-reveal="${i % 2 ? "right" : "left"}">
        <span class="tl__dot">${icon(iconMap[s.icon] || "heart")}</span>
        <div class="tl__card">
          <span class="tl__date">${esc(s.date)}</span>
          <h3 class="tl__title">${esc(s.title)}</h3>
          <p class="tl__text">${esc(s.text)}</p>
        </div>
      </li>`).join("");
  }

  function renderGallery() {
    const box = $("#galleryGrid");
    if (!box || !C.gallery) return;
    box.innerHTML = C.gallery.map((g, i) => `
      <button class="g-item" type="button" data-index="${i}" data-reveal="up" style="--d:${(i % 3) * 0.08}s" aria-label="${esc(T.openPhoto)} ${i + 1}">
        <img src="${esc(g.src)}" alt="${esc(g[LANG] || "")}" width="${g.w || 800}" height="${g.h || 800}" loading="lazy" decoding="async">
      </button>`).join("");
    $$("img", box).forEach((img) => {
      const done = () => img.classList.add("is-loaded");
      if (img.complete && img.naturalWidth) done(); else { img.addEventListener("load", done, { once: true }); img.addEventListener("error", done, { once: true }); }
    });
  }

  function renderContacts() {
    const box = $("#contactsList");
    if (!box || !C.contacts) return;
    box.innerHTML = C.contacts.map((c) => {
      const t = c[LANG] || c.en;
      return `<div class="contact" data-reveal="up">
        <h3>${esc(t.title)}</h3><p>${esc(t.names)}</p>
        ${c.numbers.map((n) => `<a href="tel:${esc(n.replace(/\s/g, ""))}">${icon("phone")}${esc(fmtPhone(n))}</a>`).join("")}
      </div>`;
    }).join("");
  }

  /* -----------------------------------------------------------------------
     SOUND — temple bell (synthesised) + background music / tanpura fallback
     ----------------------------------------------------------------------- */
  // let audioCtx = null;
  // const getCtx = () => {
  //   if (!audioCtx) {
  //     const AC = window.AudioContext || window.webkitAudioContext;
  //     if (!AC) return null;
  //     audioCtx = new AC();
  //   }
  //   if (audioCtx.state === "suspended") audioCtx.resume();
  //   return audioCtx;
  // };

  // const Sound = {
  //   bell() {
  //     const c = getCtx();
  //     if (!c) return;
  //     const now = c.currentTime + 0.02;
  //     const out = c.createGain();
  //     out.gain.value = 0.32;
  //     out.connect(c.destination);
  //     const strike = (t0, f0, vol, partials) => {
  //       partials.forEach(([ratio, amp, decay]) => {
  //         const o = c.createOscillator(), g = c.createGain();
  //         o.type = "sine";
  //         o.frequency.value = f0 * ratio;
  //         g.gain.setValueAtTime(0.0001, t0);
  //         g.gain.exponentialRampToValueAtTime(Math.max(amp * vol, 0.0002), t0 + 0.006);
  //         g.gain.exponentialRampToValueAtTime(0.0001, t0 + decay);
  //         o.connect(g).connect(out);
  //         o.start(t0);
  //         o.stop(t0 + decay + 0.05);
  //       });
  //     };
  //     // deep temple bell
  //     strike(now, 196, 0.9, [[1, 1, 5.5], [2.0, 0.5, 4], [2.4, 0.35, 3.2], [3.0, 0.25, 2.6], [4.2, 0.18, 2], [5.4, 0.1, 1.4]]);
  //     // small hand bell (ghanta) ringing
  //     for (let i = 0; i < 9; i++) {
  //       strike(now + 0.35 + i * 0.17, 1320 + (i % 2) * 14, 0.42 * (1 - i / 12), [[1, 1, 1.4], [2.76, 0.45, 0.9], [5.4, 0.2, 0.5]]);
  //     }
  //   }
  // };

  const Tanpura = {
    timer: null, out: null,
    start() {
      const c = getCtx();
      if (!c) return;
      this.out = c.createGain();
      this.out.gain.value = 0;
      this.out.gain.linearRampToValueAtTime(0.2, c.currentTime + 2.5);
      const delay = c.createDelay(); delay.delayTime.value = 0.32;
      const fb = c.createGain(); fb.gain.value = 0.32;
      delay.connect(fb).connect(delay);
      delay.connect(this.out);
      this.out.connect(c.destination);
      const sa = 138.59; // C#
      const seq = [sa * 0.75, sa, sa, sa / 2];
      let step = 0;
      const pluck = () => {
        const t = c.currentTime + 0.02, f = seq[step++ % seq.length];
        [1, 2.003].forEach((m, k) => {
          const o = c.createOscillator(), g = c.createGain(), lp = c.createBiquadFilter();
          o.type = "sawtooth"; o.frequency.value = f * m;
          lp.type = "lowpass"; lp.frequency.setValueAtTime(2400, t); lp.frequency.exponentialRampToValueAtTime(700, t + 2.5);
          g.gain.setValueAtTime(0.0001, t);
          g.gain.exponentialRampToValueAtTime(k ? 0.05 : 0.11, t + 0.03);
          g.gain.exponentialRampToValueAtTime(0.0001, t + 3.6);
          o.connect(lp).connect(g);
          g.connect(this.out); g.connect(delay);
          o.start(t); o.stop(t + 3.7);
        });
      };
      pluck();
      this.timer = setInterval(pluck, 950);
    },
    stop() {
      clearInterval(this.timer);
      if (this.out && audioCtx) {
        const g = this.out;
        g.gain.cancelScheduledValues(audioCtx.currentTime);
        g.gain.setValueAtTime(g.gain.value, audioCtx.currentTime);
        g.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8);
        setTimeout(() => g.disconnect(), 900);
      }
      this.out = null;
    }
  };

  const Music = (() => {
    const btn = $("#musicBtn"), audio = $("#bgMusic"), label = $("#musicBtn .music__label");
    let playing = false, mode = null, fadeTimer = null;
    if (!btn || !audio) return { hint() {} };

    audio.src = C.musicFile;
    audio.loop = true;

    const setState = (on) => {
      playing = on;
      btn.classList.toggle("is-playing", on);
      btn.classList.remove("is-hint");
      btn.setAttribute("aria-pressed", String(on));
      btn.setAttribute("aria-label", on ? T.musicPause : T.musicPlay);
    };
    const fade = (to, ms = 1200) => {
      clearInterval(fadeTimer);
      const from = audio.volume, steps = 24; let i = 0;
      fadeTimer = setInterval(() => {
        i++; audio.volume = Math.min(1, Math.max(0, from + (to - from) * (i / steps)));
        if (i >= steps) { clearInterval(fadeTimer); if (to === 0) audio.pause(); }
      }, ms / steps);
    };
    async function play() {
      if (mode !== "synth") {
        try {
          audio.volume = 0;
          await audio.play();
          mode = "file";
          fade(0.7);
          setState(true);
          return;
        } catch (err) { mode = "synth"; }
      }
      Tanpura.start();
      toast(T.musicFallback, 5200);
      setState(true);
    }
    function pause() {
      if (mode === "file") fade(0, 700); else Tanpura.stop();
      setState(false);
    }
    btn.addEventListener("click", () => (playing ? pause() : play()));
    doc.addEventListener("visibilitychange", () => { if (doc.hidden && playing && mode === "file") audio.pause(); else if (!doc.hidden && playing && mode === "file") audio.play().catch(() => {}); });
    if (label) label.textContent = label.textContent; // keeps static label
    return { hint() { if (!playing) btn.classList.add("is-hint"); } };
  })();

  /* -----------------------------------------------------------------------
     TOAST
     ----------------------------------------------------------------------- */
  let toastTimer;
  function toast(msg, ms = 3600) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-show"), ms);
  }

  /* -----------------------------------------------------------------------
     PETALS & GOLDEN PARTICLES (single lightweight canvas)
     ----------------------------------------------------------------------- */
  const Petals = (() => {
    const cv = $("#petals");
    if (!cv || reduceMotion || !cv.getContext) return { burst() {} };
    const ctx = cv.getContext("2d");
    let W = 0, H = 0, dpr = 1, items = [], raf = 0;
    const mobile = window.innerWidth < 700;
    const PETALS = mobile ? 10 : 18, GOLD = mobile ? 14 : 26;
    const colors = ["#fffdf4", "#fffdf4", "#fff7e2", "#fffdf4", "#f6a21e", "#c81d3a"];

    const glow = document.createElement("canvas");
    glow.width = glow.height = 32;
    const g = glow.getContext("2d"), rg = g.createRadialGradient(16, 16, 0, 16, 16, 16);
    rg.addColorStop(0, "rgba(255,246,208,1)"); rg.addColorStop(.35, "rgba(242,193,78,.7)"); rg.addColorStop(1, "rgba(242,193,78,0)");
    g.fillStyle = rg; g.fillRect(0, 0, 32, 32);

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    const make = (kind, initial, once = false) => kind === "gold"
      ? { kind, once, x: rand(0, W), y: initial ? rand(0, H) : H + 10, r: rand(5, 13), vy: -rand(.15, .45), vx: rand(-.15, .15), a: rand(.25, .7), tw: rand(0, 6.28) }
      : { kind, once, x: rand(0, W), y: initial ? rand(-H, H) : -20, r: rand(4.5, 8), vy: rand(.45, 1.05), vx: rand(-.3, .3), rot: rand(0, 6.28), vr: rand(-.025, .025), sw: rand(0, 6.28), c: colors[(Math.random() * colors.length) | 0], a: rand(.55, .95) };

    function init() {
      items = [];
      for (let i = 0; i < PETALS; i++) items.push(make("petal", true));
      for (let i = 0; i < GOLD; i++) items.push(make("gold", true));
    }
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = items.length - 1; i >= 0; i--) {
        const p = items[i];
        if (p.kind === "gold") {
          p.y += p.vy; p.x += p.vx; p.tw += 0.04;
          ctx.globalAlpha = p.a * (0.6 + 0.4 * Math.sin(p.tw));
          ctx.drawImage(glow, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
          if (p.y < -20) { if (p.once) items.splice(i, 1); else Object.assign(p, make("gold", false)); }
        } else {
          p.sw += 0.02; p.y += p.vy; p.x += p.vx + Math.sin(p.sw) * 0.5; p.rot += p.vr;
          ctx.save();
          ctx.globalAlpha = p.a;
          ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(1, 0.55 + 0.45 * Math.abs(Math.sin(p.sw * 1.6)));
          ctx.fillStyle = p.c;
          ctx.beginPath(); ctx.ellipse(0, 0, p.r * 0.62, p.r, 0, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = "rgba(255,255,255,.55)";
          ctx.beginPath(); ctx.ellipse(-p.r * .15, -p.r * .25, p.r * .2, p.r * .4, 0, 0, Math.PI * 2); ctx.fill();
          ctx.restore();
          if (p.y > H + 20) { if (p.once) items.splice(i, 1); else Object.assign(p, make("petal", false)); }
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    const start = () => { if (!raf) raf = requestAnimationFrame(draw); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };
    resize(); init(); start();
    let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
    doc.addEventListener("visibilitychange", () => (doc.hidden ? stop() : start()));
    return {
      burst() {
        const n = mobile ? 26 : 44;
        for (let i = 0; i < n; i++) { const p = make("petal", false, true); p.y = rand(-H * .6, -10); p.vy *= 1.3; items.push(p); }
        for (let i = 0; i < n / 2; i++) { const p = make("gold", true, true); p.y = rand(H * .3, H); p.vy *= 2; items.push(p); }
      }
    };
  })();

  /* -----------------------------------------------------------------------
     INTRO: loader → closed doors → bell → cinematic opening
     ----------------------------------------------------------------------- */
  let doorsOpened = false, autoOpenTimer = null;

  function buildLoaderFx() {
    const fx = $("#loaderFx");
    if (!fx || reduceMotion) return;
    let html = "";
    for (let i = 0; i < 16; i++) html += `<i style="--x:${rand(5, 95)}%;--s:${rand(3, 7).toFixed(1)}px;--t:${rand(5, 9).toFixed(1)}s;--dl:${rand(0, 4).toFixed(1)}s;--dx:${rand(-40, 40).toFixed(0)}px"></i>`;
    for (let i = 0; i < 9; i++) html += `<b class="${i % 3 === 0 ? "m" : ""}" style="--x:${rand(5, 95)}%;--t:${rand(6, 10).toFixed(1)}s;--dl:${rand(0, 5).toFixed(1)}s;--dx:${rand(-60, 60).toFixed(0)}px"></b>`;
    fx.innerHTML = html;
  }

  function runIntro() {
    const loader = $("#loader"), intro = $("#intro");
    if (!loader || !intro) { finishIntro(0); return; }
    buildLoaderFx();
    const started = performance.now();
    const minTime = reduceMotion ? 700 : 3400;
    const loaded = new Promise((r) => (doc.readyState === "complete" ? r() : window.addEventListener("load", r, { once: true })));
    const cap = new Promise((r) => setTimeout(r, 7000));
    Promise.race([loaded, cap]).then(() => {
      const wait = Math.max(0, minTime - (performance.now() - started));
      setTimeout(() => {
        loader.classList.add("is-done");
        setTimeout(() => loader.remove(), 1300);
        showDoors();
      }, wait);
    });
  }

  function showDoors() {
    const intro = $("#intro");
    intro.classList.add("is-ready");
    const openBtn = $("#openDoors");
    openBtn && openBtn.focus({ preventScroll: true });
    intro.addEventListener("click", (e) => {
      if (e.target.closest("#skipIntro")) return;
      openDoors(true);
    });
    intro.addEventListener("keydown", (e) => { if (e.key === "Escape") skipIntro(); });
    const skip = $("#skipIntro");
    skip && skip.addEventListener("click", (e) => { e.stopPropagation(); skipIntro(); });
    autoOpenTimer = setTimeout(() => openDoors(false), reduceMotion ? 1200 : 6500);
  }

  function openDoors(withSound) {
    if (doorsOpened) return;
    doorsOpened = true;
    clearTimeout(autoOpenTimer);
    const intro = $("#intro");
    if (withSound) { try { Sound.bell(); } catch (e) { /* audio unavailable */ } }
    intro.classList.add("is-ringing");

    if (reduceMotion) {
      body.classList.remove("veiled");
      intro.classList.add("is-gone");
      finishIntro(1600);
      return;
    }
    setTimeout(() => {
      intro.classList.add("is-opening");
      body.classList.remove("veiled");
      Petals.burst();
    }, 650);
    setTimeout(() => body.classList.add("revealed"), 2300);
    setTimeout(() => { intro.classList.add("is-gone"); finishIntro(1600); }, 650 + 5700);
  }

  function skipIntro() {
    doorsOpened = true;
    clearTimeout(autoOpenTimer);
    const intro = $("#intro"), loader = $("#loader");
    loader && loader.remove();
    if (intro) intro.classList.add("is-gone");
    finishIntro(1600);
  }

  function finishIntro(removeAfter) {
    root.classList.remove("intro-active");
    body.classList.remove("veiled");
    body.classList.add("ready", "revealed");
    setTimeout(() => { const i = $("#intro"); i && i.remove(); }, removeAfter);
    setTimeout(() => Music.hint(), 1200);
    const main = $("#main");
    if (main && (!doc.activeElement || doc.activeElement === body || !doc.contains(doc.activeElement) || doc.activeElement.closest("#intro"))) {
      main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
    }
    if (location.hash && location.hash.length > 1) {
      const t = doc.getElementById(location.hash.slice(1));
      t && setTimeout(() => t.scrollIntoView({ behavior: "auto" }), 50);
    }
  }

  /* -----------------------------------------------------------------------
     NAVIGATION
     ----------------------------------------------------------------------- */
  function initNav() {
    const nav = $("#nav"), toggle = $("#navToggle");
    if (!nav) return;
    $$(".nav__link").forEach((a, i) => a.style.setProperty("--i", i));

    const setMenu = (open) => {
      nav.classList.toggle("is-open", open);
      toggle && toggle.setAttribute("aria-expanded", String(open));
      body.classList.toggle("no-scroll", open);
    };
    toggle && toggle.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
    doc.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); toggle.focus(); } });

    $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id.length < 2) return;
      const target = doc.getElementById(id.slice(1));
      if (!target) return;
      e.preventDefault();
      setMenu(false);
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", id);
    }));

    // scrolled state + story progress line (rAF throttled)
    const timeline = $("#storyList");
    let ticking = false;
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 40);
      if (timeline) {
        const r = timeline.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (window.innerHeight * 0.65 - r.top) / r.height));
        timeline.style.setProperty("--progress", `${(p * 100).toFixed(1)}%`);
      }
      ticking = false;
    };
    window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();

    // active link
    const links = $$(".nav__link");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${en.target.id}`));
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      links.forEach((l) => { const s = doc.getElementById(l.getAttribute("href").slice(1)); s && io.observe(s); });
    }
  }

  /* -----------------------------------------------------------------------
     SCROLL REVEAL
     ----------------------------------------------------------------------- */
  function initReveal() {
    const els = $$("[data-reveal], .divider-slot");
    if (!("IntersectionObserver" in window) || reduceMotion) { els.forEach((e) => e.classList.add("is-visible")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    els.forEach((e) => io.observe(e));
  }

  /* -----------------------------------------------------------------------
     COUNTDOWN
     ----------------------------------------------------------------------- */
  function initCountdown() {
    const grid = $("#countdownGrid"), done = $("#countdownDone");
    if (!grid) return;
    $$("[data-label]", grid).forEach((el) => (el.textContent = T[el.dataset.label] || el.textContent));
    const target = new Date(C.weddingDate).getTime();
    const nums = { days: $('[data-unit="days"]', grid), hours: $('[data-unit="hours"]', grid), minutes: $('[data-unit="minutes"]', grid), seconds: $('[data-unit="seconds"]', grid) };
    const set = (el, v) => {
      const s = String(v).padStart(2, "0");
      if (el.textContent !== s) { el.textContent = s; if (!reduceMotion) { el.classList.remove("tick"); void el.offsetWidth; el.classList.add("tick"); } }
    };
    let timer;
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        clearInterval(timer);
        grid.hidden = true;
        done.hidden = false;
        done.textContent = Date.now() < target + 24 * 3600e3 ? T.today : T.after;
        return;
      }
      set(nums.days, Math.floor(diff / 864e5));
      set(nums.hours, Math.floor((diff % 864e5) / 36e5));
      set(nums.minutes, Math.floor((diff % 36e5) / 6e4));
      set(nums.seconds, Math.floor((diff % 6e4) / 1e3));
    };
    tick();
    timer = setInterval(tick, 1000);
  }

  /* -----------------------------------------------------------------------
     LIGHTBOX
     ----------------------------------------------------------------------- */
  function initLightbox() {
    const lb = $("#lightbox"), grid = $("#galleryGrid");
    if (!lb || !grid) return;
    const img = $("#lightboxImg"), cap = $("#lightboxCap"), count = $("#lightboxCount");
    const items = C.gallery;
    let idx = 0, lastFocus = null, sx = 0, sy = 0;

    const show = (i, animate = true) => {
      idx = (i + items.length) % items.length;
      const it = items[idx];
      const apply = () => {
        img.src = it.src; img.alt = it[LANG] || "";
        cap.textContent = it[LANG] || "";
        count.textContent = `${idx + 1} ${T.photoOf} ${items.length}`;
        img.classList.remove("is-switching");
        [1, -1].forEach((d) => { const n = new Image(); n.src = items[(idx + d + items.length) % items.length].src; });
      };
      if (animate) { img.classList.add("is-switching"); setTimeout(apply, 220); } else apply();
    };
    const open = (i) => {
      lastFocus = doc.activeElement;
      show(i, false);
      lb.hidden = false;
      body.classList.add("no-scroll");
      requestAnimationFrame(() => lb.classList.add("is-open"));
      $(".lightbox__close", lb).focus();
    };
    const close = () => {
      lb.classList.remove("is-open");
      body.classList.remove("no-scroll");
      setTimeout(() => { lb.hidden = true; }, 400);
      lastFocus && lastFocus.focus();
    };
    grid.addEventListener("click", (e) => { const b = e.target.closest(".g-item"); if (b) open(+b.dataset.index); });
    $(".lightbox__close", lb).addEventListener("click", close);
    $(".lightbox__prev", lb).addEventListener("click", () => show(idx - 1));
    $(".lightbox__next", lb).addEventListener("click", () => show(idx + 1));
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    doc.addEventListener("keydown", (e) => {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") show(idx + 1);
      else if (e.key === "ArrowLeft") show(idx - 1);
      else if (e.key === "Tab") {
        const f = $$("button", lb); const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    lb.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    lb.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(idx + (dx < 0 ? 1 : -1));
      else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) close();
    }, { passive: true });
  }

  /* -----------------------------------------------------------------------
     RSVP MODAL → WhatsApp
     ----------------------------------------------------------------------- */
  function initRsvp() {
    const modal = $("#rsvpModal"), form = $("#rsvpForm"), openBtn = $("#rsvpBtn");
    if (!modal || !form || !openBtn) return;
    let lastFocus = null;
    const open = () => {
      lastFocus = doc.activeElement;
      modal.hidden = false;
      body.classList.add("no-scroll");
      requestAnimationFrame(() => modal.classList.add("is-open"));
      setTimeout(() => form.elements.name.focus(), 350);
    };
    const close = () => {
      modal.classList.remove("is-open");
      body.classList.remove("no-scroll");
      setTimeout(() => { modal.hidden = true; }, 450);
      lastFocus && lastFocus.focus();
    };
    openBtn.addEventListener("click", open);
    $$("[data-close]", modal).forEach((b) => b.addEventListener("click", close));
    doc.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      if (!name) { form.elements.name.focus(); return; }
      const yes = fd.get("attending") !== "no";
      const text = T.rsvpText({
        name,
        guests: fd.get("guests") || "1",
        attending: yes ? T.yes : T.no,
        events: yes ? fd.getAll("events") : [],
        msg: String(fd.get("msg") || "").trim()
      });
      window.open(`https://wa.me/${C.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
      toast(T.rsvpOpening);
      close();
    });
  }

  /* -----------------------------------------------------------------------
     BOOT
     ----------------------------------------------------------------------- */
  injectArt();
  applyConfig();
  initNav();
  initReveal();
  initCountdown();
  initLightbox();
  initRsvp();
  runIntro();
})();


const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const musicLabel = musicBtn.querySelector(".music__label");

async function playMusic() {
  try {
    await music.play();

    musicBtn.setAttribute("aria-pressed", "true");
    musicBtn.setAttribute("aria-label", "Pause music");
    musicLabel.textContent = "Music On";
    musicBtn.classList.add("is-playing");
  } catch (error) {
    console.log("Autoplay blocked. Waiting for user interaction.");
  }
}

function pauseMusic() {
  music.pause();

  musicBtn.setAttribute("aria-pressed", "false");
  musicBtn.setAttribute("aria-label", "Play music");
  musicLabel.textContent = "Music";
  musicBtn.classList.remove("is-playing");
}

// Attempt autoplay when the page loads
window.addEventListener("load", playMusic);

// Start music on the first user interaction if autoplay was blocked
function startOnInteraction() {
  if (music.paused) {
    playMusic();
  }

  document.removeEventListener("click", startOnInteraction);
  document.removeEventListener("touchstart", startOnInteraction);
}

document.addEventListener("click", startOnInteraction);
document.addEventListener("touchstart", startOnInteraction);

// Music button toggle
musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    await playMusic();
  } else {
    pauseMusic();
  }
});

