# MAXIMUS

> An AI map model that triangulates urban green spaces, retrieves analytics, and suggests sustainable solutions — paired with **BHAT**, a generative-AI chatbot for one-to-one recommendations.

![Status](https://img.shields.io/badge/status-early%20prototype-orange)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Google Maps](https://img.shields.io/badge/Google%20Maps%20API-4285F4?logo=googlemaps&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

MAXIMUS is a web application concept for mapping and analyzing urban green spaces. The idea is to help planners, students, and residents locate green infrastructure on an interactive map, surface analytics about it, and get tailored sustainability suggestions from **BHAT** (Bio-friendly Holistic Adaptive Technology), a generative-AI assistant.

This repository holds the front-end prototype. Some pieces (notably the BHAT chatbot page and the analytics layer) are still stubs and are documented below as planned work rather than finished features.

## Table of contents

- [Features](#features)
- [Screens](#screens)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Features

- **Landing splash** — an animated `MAXIMUS` wordmark (`open.html`) that leads into the app.
- **Home page** — a project overview describing the MAXIMUS map model and the BHAT chatbot (`main.html`).
- **Interactive map** — a Google Maps view with address/city search and click-to-geocode, built on the Google Maps JavaScript API and Geocoder (`map.html` + `map.ts`).
- **BHAT chatbot** *(planned)* — a generative-AI assistant intended to give one-to-one sustainability recommendations (`bhat.html`, currently a placeholder).
- **Analytics on green spaces** *(planned)* — triangulation and reporting on urban green infrastructure.

## Screens

| Page | File | Purpose |
| --- | --- | --- |
| Splash | `Pages/open.html` | Animated entry point that links to the home page. |
| Home | `Pages/main.html` | Project intro, logo, and navigation. |
| Map | `Pages/map.html` | Search a city/address and geocode locations on a Google Map. |
| BHAT | `Pages/bhat.html` | Placeholder for the AI chatbot (in progress). |

## Tech stack

- **HTML5 / CSS3** for structure and styling (per-page stylesheets under `Resources/Style/`).
- **TypeScript** for the map/geocoding logic (`Resources/Script/map.ts`), compiled to JavaScript.
- **jQuery** for DOM convenience.
- **Google Maps JavaScript API** + **Geocoding** for the interactive map.

## Project structure

```
MAXIMUS/
├── Pages/
│   ├── open.html        # Animated splash / entry point
│   ├── main.html        # Home page with project overview
│   ├── map.html         # Interactive Google Map + search
│   └── bhat.html        # Placeholder for the BHAT chatbot
├── Resources/
│   ├── Style/
│   │   ├── main.css
│   │   ├── open.css
│   │   ├── map.css
│   │   └── bhat.css
│   ├── Script/
│   │   ├── map.ts        # TypeScript source for the map/geocoder
│   │   ├── map.js        # Compiled output
│   │   └── main.js
│   └── mainLogo.png
└── .vscode/
    └── launch.json       # Launch config to open open.html in Chrome
```

## Getting started

MAXIMUS is a static site, so you only need a local web server (the Google Maps script and ES modules will not load reliably from `file://`).

```bash
# Clone the repository
git clone https://github.com/RithulBhat/MAXIMUS.git
cd MAXIMUS

# Serve the folder (any static server works). For example:
python3 -m http.server 8000
```

Then open <http://localhost:8000/Pages/open.html> in your browser.

If you use VS Code, the included `.vscode/launch.json` can open `open.html` in Chrome via the Debug panel.

## Configuration

The map page loads the Google Maps JavaScript API and requires an API key. Supply **your own** key with the Maps JavaScript API and Geocoding API enabled, and reference it in `Pages/map.html`:

```html
<script
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly"
  defer>
</script>
```

> **Security note:** never commit a real API key to a public repository. Restrict your key by HTTP referrer and API in the Google Cloud Console, and consider loading it from an environment/config file that is git-ignored.

## Usage

1. Open the splash page (`open.html`) and click through to the home page.
2. From the navigation, open **MAXIMUS'S MAP**.
3. Enter a city or address and search, or click anywhere on the map to reverse-geocode that point. Results are shown alongside the map.

## Roadmap

- [ ] Build out the **BHAT** chatbot page and connect it to a generative-AI backend.
- [ ] Add the green-space triangulation and analytics layer.
- [ ] Compile TypeScript through a build step and remove hardcoded keys.
- [ ] Make the layout responsive across devices.

## Contributing

Contributions are welcome. To propose a change:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add your feature"`.
4. Push the branch: `git push origin feature/your-feature`.
5. Open a Pull Request describing what you changed and why.

Please keep pages self-contained and match the existing folder structure (`Pages/` for markup, `Resources/Style/` for CSS, `Resources/Script/` for scripts).

## License

Released under the [MIT License](LICENSE).

## Credits

Created by **Rithul Bhat** and **Pranav Swatantran**.
Welcome to MAXIMUS
