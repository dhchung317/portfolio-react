# Hyunki’s portfolio

A React 19 portfolio with projects, games, and an art gallery. All content and media are local; no CMS, backend, or environment variables are required.

## Development

Use Node.js 22.12+ within the 22.x release line (`nvm use`).

```sh
npm install
npm start
```

Vite prints the local preview URL, normally `http://localhost:5173`.

```sh
npm test             # Regression tests
npm run build       # Production output in dist/
npm run preview     # Preview the production build
npm run format      # Format source and configuration
npm run check       # Formatting, tests, and production build
```

## Deploy on Vercel

Import this GitHub repository into Vercel and use the repository root as the Root Directory. The checked-in `vercel.json` supplies:

| Setting               | Value                                   |
| --------------------- | --------------------------------------- |
| Framework             | Vite                                    |
| Node.js               | 22.x (selected by package.json engines) |
| Install command       | `npm install`                           |
| Build command         | `npm run build`                         |
| Output directory      | `dist`                                  |
| Environment variables | None                                    |

The SPA rewrite serves `index.html` for client routes, so direct visits and refreshes on `/projects`, `/gallery`, `/contact`, and the `/skills` redirect work. Existing static files are served normally. Follow [Vercel’s Vite guide](https://vercel.com/docs/frameworks/frontend/vite) and [Node.js version guidance](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

After the first deployment, check those direct URLs and open an image in each gallery. Vercel Preview deployments can be used to review later branches before promoting changes to production.

Old Contentful settings are unused. `.env` remains local and is excluded from Git and Vercel uploads. Removing it from tracking does not erase it from older commits.

## Editing content

- `src/data/portfolio.json`: home intro, project details, and contacts.
- `src/data/gallery.json`: the 24 selected artworks and accessible descriptions.
- `public/media/`: local assets, referenced as `/media/filename.jpg`.

Projects support a cover (`image`, `imageAlt`), `title`, `category`, `summary`, `description`, a `details` list, optional `githubLink` and `demoLink` / `demoLabel`, plus `images` or `imageGroups`. Groups have a `title`, optional `description`, and `images` list.

Only one project opens at a time. It moves to the first grid row and scrolls below the navigation. AR You Learning shows gameplay first, then three lesson/offline screens, then Studio tools. The gameplay frames come from the original tutorial recording; Honji examples use sample players and scores.

To add art, copy the image to `public/media/art/` and add a record to `src/data/gallery.json`:

```json
{
  "src": "/media/art/new-piece.jpg",
  "alt": "A visual description of the artwork",
  "width": 1200,
  "height": 900
}
```

Use the image’s actual dimensions to reserve its layout space. The gallery keeps original proportions and offers an enlarged viewer with previous/next controls and Escape to close. Art descriptions remain accessible but are hidden visually in the enlarged view. The initial selection excludes personal photos and archived posts.

Home animations and navigation respect reduced-motion preferences. `/skills` redirects to `/gallery`. For another static host, configure the same SPA fallback; subdirectory hosting also requires matching Vite `base` and BrowserRouter `basename` settings.
