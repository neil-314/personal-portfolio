# Neil Pai: Tokyo, all around

A personal portfolio explored through an illustrated 360-degree Tokyo cityscape. Seven destinations connect projects, paid experience, research, learning, photography, education, and school activities.

Live private draft: https://neil-portfolio-first-draft.tealmesa7.chatgpt.site/

## Run locally

Serve this directory over HTTP, for example:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. ES modules require HTTP rather than opening index.html directly.

No build step or package installation is required. Three.js 0.180.0 is vendored in `vendor/`, with its MIT license. The illustrated layout is composed for exploration and is not a geographic reconstruction.

## Source

- `index.html`: page structure and navigation.
- `stations.js`: destination content and dialogs.
- `content.js`: verified portfolio records. Only public projects are featured.
- `scene360.js`: camera controls, Tokyo time, weather, and rendering.
- `tokyo-city.js`: detailed architecture, landmarks, street scenes, parks, river, bridges, and restrained vehicle animation.
- `base.css`, `stations.css`, `scene360.css`: responsive visual design.
- `assets/`: project previews, credited location photographs, a personal travel image, and supplied certificate PDFs.

Tokyo lighting follows local sunrise and sunset. Open-Meteo model weather is requested at page load, on return to the tab, and every 15 minutes while visible. Weather failure is labeled, and local-time lighting continues. Reduced-motion preferences disable ambient vehicle and precipitation animation.

## Content structure

About includes Waterloo and the awarded IB Diploma. Paid experience focuses on swimming instruction/lifeguarding and mathematics tutoring. School years contains secondary-school diplomas, the French certificate, the 97% average, Ontario Scholar, and concise club records. CCX dates remain Executive 2023-2025 and Member 2022-2023. Expired SFA/CPR C is excluded.

Photo credits, source links, licenses, and crop information are available in the website's About this view panel and `assets/views/credits.json`. Location photographs use actual 16:9 crops. Personal images remain reserved to their rights holders; their presence does not license reuse. Research report links remain unset until papers are supplied.

The older planning markdown files in this repository are historical preparation notes. The files alongside this README are the implemented website.
