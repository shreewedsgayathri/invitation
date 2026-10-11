# Sriram ♥ Gayathri — Tamil Wedding Invitation Website

A mobile-first, cinematic Tamil wedding invitation built with plain HTML, CSS and JavaScript. It needs no backend and no libraries.

The journey: **loader with a kuthuvilakku → closed temple doors → bell → slow door opening → invitation → scrolling website**

## Files

```text
marriage-invitation/
├── index.html            ← language chooser (English / தமிழ்)
├── english.html          ← English invitation
├── tamil.html            ← Tamil invitation
├── assets/
│   ├── css/style.css     ← all styling and animations (shared)
│   ├── js/script.js      ← weddingConfig + all behaviour (shared)
│   ├── images/
│   │   ├── monogram.png  ← your SG logo, recoloured gold
│   │   ├── bride.jpg     ← REPLACE (placeholder)
│   │   ├── groom.jpg     ← REPLACE (placeholder)
│   │   ├── couple.jpg    ← REPLACE (placeholder)
│   │   └── gallery/      ← REPLACE photo-1…7.jpg (invitation-card.jpg is your card)
│   ├── music/            ← ADD wedding-music.mp3 here
│   └── fonts/            ← optional, for self-hosted fonts (see below)
└── README.md
```

## Run it locally

**Option 1:** Double-click `index.html` (or `english.html` / `tamil.html`). Everything works this way, including the doors, gallery, countdown and WhatsApp links.

**Option 2 (recommended before publishing):** Run a tiny local server from inside the folder:

```bash
cd marriage-invitation
python3 -m http.server 8000
# open http://localhost:8000 on your computer
# or http://<your-computer-ip>:8000 on your phone (same Wi-Fi)
```

**To publish:** Upload the whole folder to any static host, such as Netlify (drag and drop), GitHub Pages, Vercel or Cloudflare Pages.

## What to change

Everything is in the `weddingConfig` object at the top of **`assets/js/script.js`**. Both pages read from it.

| What | Where in `weddingConfig` |
|---|---|
| Bride / groom names, titles, qualifications, jobs | `en.brideName`, `en.groomName`, … and the same keys in `ta` |
| Parents and home towns | `en.brideParents`, `en.groomParents`, `…Place` (and `ta`) |
| Countdown and "Save the Date" time | `weddingDate`, `weddingEndDate` (keep `+05:30`) |
| Date, day and time text shown on the page | `en.dateText`, `en.weddingDay`, `en.timeText` (and `ta`) |
| Venue name and address | `en.venueName`, `en.venueAddress`, plus the `venues` list |
| Google Maps links | `maps.temple`, `maps.mandapam` |
| Events (Mappillai Azhaippu, Reception, Muhurtham, Feast) | `en.events`, `ta.events` |
| "Our Journey" timeline | `en.story`, `ta.story`: replace the `[Month Year]` placeholders |
| WhatsApp number (RSVP + button) | `whatsappNumber` (country code, no `+` or spaces) |
| Call Us number | `callNumber` |
| Family contact numbers | `contacts` |
| Photos | `images.bride`, `images.groom`, `images.couple`, `gallery` |
| Music | `musicFile` |

### Photos
* Replace the files in `assets/images/` using the **same file names**, or change the paths in `weddingConfig.images`.
* Recommended sizes:
  * Bride and groom: portrait, about 600×750 px.
  * Couple: about 900×1100 px.
  * Gallery: about 800 px wide.
* Compress the photos first, for example with [squoosh.app](https://squoosh.app). Aim for under 200 KB each so the site stays fast on mobile.
* For the gallery, add or remove items in `weddingConfig.gallery` and set `w`/`h` to each photo's real pixel size. This keeps the layout from jumping while photos load.

### Music
Put your song at `assets/music/wedding-music.mp3`. A nadaswaram or a soft instrumental works well.

Music **never autoplays**. It starts only when a guest taps the floating ♪ button. Until you add a file, that button plays a gentle synthesised tanpura drone so the feature still works.

The temple bell is also synthesised in the browser. It rings only when a guest taps "Tap to open", so no audio file is needed.

### Fonts
Fonts load from Google Fonts: Cinzel, Cormorant Garamond, Great Vibes, Arima (Tamil display) and Noto Serif Tamil.

To self-host them instead, download them into `assets/fonts/`. Then replace the Google Fonts `<link>` in each HTML file with `@font-face` rules.

## Features

* Loader: kuthuvilakku with flickering flames, kolam mandala, rising gold particles and falling jasmine.
* Temple doors:
  * Carved wooden doors with brass studs and knockers.
  * Mango-leaf thoranam, jasmine strings, swinging bells and brass lamps.
  * A turmeric-and-kumkum threshold.
  * Your SG monogram split across both doors.
* Door opening:
  * Guests tap to open, or the doors open on their own after a few seconds.
  * The 5.6-second 3D opening comes with divine light rays, a petal burst and a slow zoom into the invitation.
  * A "Skip intro" button is always available.
* Countdown to the Muhurtham. It switches to "Today is the Day! ❤️" on the day and to a thank-you message afterwards.
* Gallery:
  * Masonry layout with lazy-loaded images and hover zoom.
  * Full-screen lightbox with swipe, arrow keys, Esc and swipe-down to close.
* RSVP form that composes a ready-to-send WhatsApp message.
* Navigation: smooth scrolling, an animated hamburger menu with a full-screen drawer, and active-section highlighting.
* Scroll reveals via IntersectionObserver, with kolam dividers that draw themselves.
* Accessibility and performance:
  * `prefers-reduced-motion` is respected: the intro becomes a simple fade and decorative animations are switched off.
  * One lightweight canvas for petals, paused when the tab is hidden.
  * Lazy images, no videos and no frameworks.
  * SEO meta tags, Open Graph tags and Event structured data (JSON-LD).
