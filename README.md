# PyPlym AI Edition

A standalone, responsive website introducing PyPlym AI Edition: EnReal's planned free monthly community in Plymouth, starting January 2027.

The page presents the PyPlym vision, its human × machine approach, builder/explorer pairing, and the outline for its first six-event season. The supplied Plymouth harbour imagery is in `assets/`; the vision source documents are in `enreal/`.

## Project structure

- `index.html`: document metadata and React mount point.
- `styles.css`: shared design tokens, reset, and global utilities.
- `components/jsx/`: app entry point and individual page components.
- `components/css/`: stylesheets paired with individual page components.
- `assets/`: Plymouth imagery used by the page.
- `enreal/`: PyPlym and EnReal vision source documents.

## Run locally

Install dependencies with `npm install`, then run `npm run dev` and open the local URL printed by Vite. Create a production build with `npm run build`; the deployable site is written to `dist/`.

The EnReal header links point to [enreal.community](https://enreal.community/). The “See the vision” buttons open the [PyPlym AI Edition vision](https://pyplym-ai-edition.netlify.app).
