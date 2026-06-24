# Run And Deploy

This project currently has two parts:

1. The root landing page: `index.html`
2. The React/Vite demo app inside: `Arabic Child Milestone Tracker`

The landing page embeds the demo app with this iframe path:

```html
./Arabic Child Milestone Tracker/dist/index.html
```

That means the nested app must be built before local preview or deployment.

## Local Run

### 1. Install demo app dependencies

From the nested app folder:

```bash
cd "d:\Apps Dev\Personal\Arabic-Child-Milestone-Tracker\Arabic Child Milestone Tracker"
npm install
```

### 2. Build the demo app

Still in the nested app folder:

```bash
npx vite build --base=./
```

This creates:

- `Arabic Child Milestone Tracker/dist/index.html`
- `Arabic Child Milestone Tracker/dist/assets/...`

### 3. Serve the root project

From the project root:

```bash
cd "d:\Apps Dev\Personal\Arabic-Child-Milestone-Tracker"
py -3 -m http.server 4173
```

Then open:

- `http://127.0.0.1:4173/`

Do not open `index.html` directly with `file://`, because the iframe demo may render as a blank white screen when module assets are loaded that way.

## When You Edit The Demo

If you change files inside:

- `Arabic Child Milestone Tracker/src/...`

you must rebuild before previewing or deploying:

```bash
cd "d:\Apps Dev\Personal\Arabic-Child-Milestone-Tracker\Arabic Child Milestone Tracker"
npx vite build --base=./
```

Then commit the updated `dist` files too, because the landing page depends on them.

## Git Ignore

The root `.gitignore` ignores:

- `node_modules`
- local caches
- logs
- environment files

It intentionally does **not** ignore:

- `Arabic Child Milestone Tracker/dist/`

because that built folder is part of the current deployment strategy.

## Deploy To Netlify

### Option 1: Manual static deploy

This is the simplest option with the current structure.

1. Build the nested demo app:

```bash
cd "d:\Apps Dev\Personal\Arabic-Child-Milestone-Tracker\Arabic Child Milestone Tracker"
npx vite build --base=./
```

2. Make sure these are present:

- `index.html`
- `Arabic Child Milestone Tracker/dist/index.html`
- `Arabic Child Milestone Tracker/dist/assets/...`

3. Deploy the **root project folder** to Netlify.

The publish directory should be:

```text
d:\Apps Dev\Personal\Arabic-Child-Milestone-Tracker
```

### Option 2: Connect the GitHub repo

If Netlify deploys directly from Git:

- set the base directory to the repo root
- publish the repo root
- make sure the nested `dist` folder is committed

Because the landing page is static, Netlify does not need a complex build command unless you later automate rebuilding the nested demo app during deploy.

## Deploy To GitHub Pages

GitHub Pages can work with the current structure too, as long as the repo publishes the root files and the nested `dist` directory is committed.

Before pushing:

```bash
cd "d:\Apps Dev\Personal\Arabic-Child-Milestone-Tracker\Arabic Child Milestone Tracker"
npx vite build --base=./
```

Then commit:

- root `index.html`
- root `.gitignore`
- `RUN_AND_DEPLOY.md`
- `Arabic Child Milestone Tracker/dist/...`

## Recommended Deploy Checklist

Before every deploy:

1. Rebuild the nested demo app
2. Confirm `Arabic Child Milestone Tracker/dist/index.html` exists
3. Confirm the landing page iframe still points to:

```text
./Arabic Child Milestone Tracker/dist/index.html
```

4. Preview locally with `http.server`
5. Commit and deploy

## Future Improvement

The current setup works, but it is a little fragile because the root landing page depends on a nested built folder.

A cleaner future setup would be one of these:

1. Move the built demo into a simpler top-level folder such as `demo/`
2. Add a root deploy script that rebuilds the nested app automatically
3. Merge the landing page and demo into one deploy pipeline

For now, the current approach is valid as long as you rebuild the nested app before deployment and keep its `dist` folder committed.
