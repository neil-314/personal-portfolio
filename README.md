# Neil Pai | 東京をめぐる

An interactive personal portfolio inside an illustrated 360° view of Tokyo. Seven stops connect the city to my education, paid work, projects, learning, research, school years, and photography.

**Live portfolio:** [neil-pai.vercel.app](https://neil-pai.vercel.app/)

The Tokyo scene follows local sunrise and sunset. Current weather updates through Open-Meteo, with model cloud cover and visibility near Kawaguchiko shown separately from an actual camera sighting. The scene is an illustrated interpretation for exploration, not a geographic reconstruction.

## Run locally

```sh
node build-public.mjs
python3 -m http.server 8000 --directory .vercel-public
```

Open http://localhost:8000. The project uses browser JavaScript modules and Three.js 0.180.0, included in `vendor/` with its license. No package installation is required.

## Site source

- `index.html` defines the page and navigation.
- `stations.js` and `content.js` provide the destinations and portfolio records.
- `scene360.js`, `tokyo-city.js`, and `tokyo-ads.js` build the city experience.
- `fuji-outlook.js` shows current modeled conditions near Mount Fuji.
- `base.css`, `stations.css`, and `scene360.css` provide the responsive design.
- `assets/` contains project previews, personal travel photographs, location credits, and certificate PDFs.

About includes Waterloo and the awarded IB Diploma. Paid experience focuses on swim instruction and lifeguarding, plus mathematics tutoring. School years holds secondary-school details and concise club records. CCX dates are Executive, 2023 to 2025, and Member, 2022 to 2023. Expired SFA/CPR C is excluded. Only public projects are featured; research papers will be linked when they are ready to share.

The selected destination photographs and personal images are credited in `assets/views/credits.json`. Original personal photos are not included in the repository. The site uses compressed derivatives. Research content remains unlinked until the papers are supplied.

## Vercel

`vercel.json` builds the public site with `node build-public.mjs` and serves `.vercel-public`.

### Shibuya district

Shibuya uses 151 real PLATEAU LOD2 building models and an OpenStreetMap road excerpt. The geometry replaces the earlier four-block placeholder. The five crosswalks, screen artwork, signs, street furniture, crowd and station tower are authored presentation details. The broader Tokyo scene remains a compressed artistic arrangement. Sources, licenses and processing are documented in [vendor/SHIBUYA-DATA.txt](vendor/SHIBUYA-DATA.txt); the transformed data is in `shibuya-data.js`. Reference implementations studied: [jeantimex/tokyo](https://github.com/jeantimex/tokyo) and [programmingkenta/project_002](https://github.com/programmingkenta/project_002).
