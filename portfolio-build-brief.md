# Neil Pai — portfolio build brief

Prepared October 16, 2026. Status: content preparation; theme undecided; no new website published.

## Purpose and positioning

Working direction inferred from the résumé and relevant past chats: a personal home for Neil's finance and analytical projects, app experiments, leadership, and photography. Primary audience: co-op recruiters and professional connections. Secondary audience: collaborators and people interested in the projects or photos. These are working choices, not a declaration that Neil has chosen a particular career.

Present Neil as a Waterloo Mathematics / Financial Analysis and Risk Management student who builds useful tools and explores the world through photography. Avoid narrowing the whole identity to product management, quant, or banking while career interests are evolving.

## Facts available for the build

- Name: Neil Pai.
- University of Waterloo, Bachelor of Mathematics, Math/FARM, Honours Co-op; started September 2026. Current résumé says 1A; do not hard-code a term that will go stale.
- Based in Mississauga / studying in Waterloo, Ontario.
- Projects span income analytics, portfolio risk and options modelling, financial mathematics, an interactive One Piece app, and a photography portfolio.
- Experience includes finance education, economics competition preparation, STEM leadership, paid mathematics tutoring, and City of Mississauga swim instruction / lifeguarding.
- Interests on the résumé include soccer, One Piece, Pokémon, travel, wildlife photography, sports analytics, and app building.
- Résumé lists travel to 25+ countries. Optional personal detail, not the main professional pitch.

## Suggested site structure

1. **Home:** Neil's name, concise introduction, featured projects, links to work and résumé.
2. **Selected work:** three or four substantial projects with a clear problem, what Neil contributed, a screenshot, live demo where available, source link where public, and limitations.
3. **About:** education, interests, working approach, and a compact experience timeline.
4. **Photography:** a small curated selection that links to the existing full gallery. Organize by subject; locations belong with individual photographs.
5. **Contact:** LinkedIn, GitHub, and email; résumé download.

Start with a focused single page plus project detail pages where there is enough substance. Navigation and content must work on phones. A separate photography site already exists, so a full gallery rebuild is optional.

## Initial project selection

| Project | Portfolio story | Evidence / limit |
| --- | --- | --- |
| IncomeLens | Turn messy transaction records into understandable income summaries and inspectable classifications. | Local README confirms Python/FastAPI and Plaid Sandbox. Simulated data only; not a real-bank production service. |
| Monte Carlo Portfolio Risk & Derivatives Engine | Explore how volatility and correlation assumptions affect portfolio risk; compare simulated option values with Black–Scholes. | Résumé supports Python, NumPy, Pandas, SciPy, Matplotlib, VaR/CVaR and stress scenarios. Read repository before final technical claims or screenshots. |
| TVM Study Desk / financial mathematics toolkit | Make financial mathematics understandable through practice, cash-flow explanations, and calculator training. | Current TVM README supports lessons, nine practice questions, and calculator trainer. Confirm relationship to the broader résumé toolkit before merging them into one project story. |
| Log Pose / One Piece app | Demonstrate product iteration through crew-building mechanics and role-based scoring. | Past chat confirms deployed gameplay and iterations. Retrieve current README and capture before writing a full case study. |
| Neil's Photos | Combine original photography, editing, and a custom gallery with subject browsing. | README and past chat support 64 photos, C11-generated HTML/CSS, and a live Vercel gallery. |

Select the final order based on the strongest current demonstrations. Course problem sets can stay on GitHub without taking a featured slot.

## Theme directions to keep open

| Direction | Visual approach | Content emphasis |
| --- | --- | --- |
| Editorial explorer | Large type, spacious layouts, travel photography, restrained colour. | Balanced professional and personal identity. |
| Analytical studio | Clear diagrams, tidy typography, subtle data visuals, one accent colour. | Finance projects and explanations. |
| Personal field notes | Photo captions, project notes, warmer colours, thoughtful small interactions. | Curiosity, experiments, travel and ongoing learning. |

These are options, not chosen themes. Keep content separate from styling. A One Piece project does not imply the entire personal site should be anime themed.

## Build requirements

- Accessible contrast, keyboard navigation, visible focus, useful image descriptions, and reduced-motion support.
- Responsive layouts; appropriately sized images; fast initial loading.
- Real project screenshots and original photographs instead of generic decorative stock imagery.
- Working navigation, project links, résumé download, social links, and email link.
- Unique page titles, description, favicon, social preview image, sitemap and appropriate indexing configuration for the final host.
- Theme choice can change without rewriting project content.
- Start with static content. Add a contact form, analytics, blog, or content editor only when useful; each creates additional configuration or maintenance.

## Remaining preparation before the actual build

- Inspect current repositories and confirm public source links, current stack, contribution details, and demo availability.
- Capture consistent screenshots of shortlisted projects and collect only claims supported by the work.
- Select a small set of original photos, retaining captions, ownership and confirmed location metadata.
- Prepare a web-ready résumé copy; current source includes phone and email. Choose whether phone belongs in the public downloadable version.
- Resolve the two email spellings found in sources: résumé uses paineil1008@gmail.com; photography README uses paineil.1008@gmail.com. Preserve photography-specific contact intent until checked.
- Choose visual direction, domain if desired, and final hosting during the build. Existing projects use Vercel; no domain purchase or host change is needed for preparation.
- Verify dates and credential wording from actual documents before highlighting them. Résumé lists BMC, while earlier chats also discuss Finance Fundamentals; do not conflate the two.

## Publication boundaries

Use public-facing professional facts, project evidence, and selected personal interests. Exclude birth date, phone by default, private career anxieties, compensation goals, grades or personal discussions unrelated to the website, user records, credentials, and private repository contents unless specifically selected for publication. Past-chat access is research input, not blanket publication permission.

## Source trail

- Local source résumé: `C:/Users/Admin/Downloads/Neil Pai Resume.pdf`, text read October 16, 2026.
- Chat: **Revamp Resume Writing** — `6aca9293-6bd0-83ea-940b-dfabbbc6e017`.
- Chat: **Career Recommendation Product Management** — `6ad15d89-2ce8-83e9-9fbe-c56a7963e7ff`; used to keep positioning flexible, not as public site content.
- Chat: **Build a photography website** — `01a137d6-f538-7580-81bc-c2da5ededdb1`.
- Chat: **Build a One Piece portfolio app** — `01a12c83-fd9c-7610-96ce-06920c95f1af`.
- Chat: **Build Plaid income analytics app** — `01a1239d-7d5d-7741-bf66-238485b39786`.
- Local READMEs for IncomeLens, TVM Study Desk and photography were read. Links below are recovered from these sources and past chats; public availability was not rechecked in this preparation pass.

This is a review of relevant accessible chats and local sources, not an exhaustive review of all chat history.
