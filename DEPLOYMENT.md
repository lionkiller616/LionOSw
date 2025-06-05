# Deploying the LionOS Website (Project "Apex Predator")

This document outlines the steps for deploying the LionOS static website. Given its static nature (HTML, CSS, JavaScript, and images), it can be easily deployed to various static hosting providers.

## Recommended Hosting Platforms

*   **Vercel:** Excellent for Next.js, Astro, and static sites. Offers global CDN, CI/CD, custom domains, and SSL.
*   **Netlify:** Similar to Vercel, great for Jamstack sites. Offers global CDN, CI/CD, forms, functions, custom domains, and SSL.
*   **GitHub Pages:** Free hosting for public repositories directly from your GitHub repository.
*   **Cloudflare Pages:** Another strong contender with a generous free tier, focusing on performance and security.
*   **AWS S3 + CloudFront:** For more advanced configurations and integration with the AWS ecosystem.
*   **Azure Static Web Apps:** Microsoft's solution for hosting static sites.

## General Deployment Steps

The core idea is to make the `lionos-website` directory (or a specific build output directory if you were using a framework that compiles to a `dist` or `out` folder) accessible via a web server. For this pure static site, the entire `lionos-website` root folder (excluding `.git`, `node_modules` if they existed for a build tool, etc.) is your deployment package.

**1. Prepare Your Code:**
   *   Ensure all paths to assets (`css/`, `js/`, `images/`) are relative and correct.
   *   Optimize images for the web (e.g., using WebP where appropriate, compressing JPEGs/PNGs).
   *   Minify CSS and JavaScript files for production (though for this project, we are generating them directly, build tools would typically handle this).

**2. Choose a Hosting Provider and Follow Their Instructions:**

### Deploying to Vercel

1.  **Sign up/Log in:** Go to [vercel.com](https://vercel.com).
2.  **Connect Your Git Repository:**
    *   Click "New Project."
    *   Import your Git repository (e.g., from GitHub, GitLab, Bitbucket).
3.  **Configure Project:**
    *   Vercel will usually auto-detect it as a static site.
    *   **Framework Preset:** Select "Other" (since it's not a specific framework like Next.js or Create React App).
    *   **Build Command:** Leave this blank or, if you had a build step (e.g., for Tailwind), you'd put it here (e.g., `npm run build` if `build` script was `npx tailwindcss -i ./src/input.css -o ./public/css/tailwind-output.css --minify`).
    *   **Output Directory:** Set this to `.` (root directory) or `public` if you decide to only deploy the contents of the public folder. However, since your HTML files are in `pages/` at the root level and reference assets in `public/`, deploying the root is simpler. Vercel is smart enough to serve `pages/index.html` as the root. If you want `index.html` to be served from the root, you might need to move `pages/index.html` to `index.html` at the root. *For this project structure, deploying the root directory should work, and Vercel will typically handle `pages/index.html` as the entry point for the site's root, or you might need to configure rewrites or move `pages/index.html` to `index.html`.*
        *   **Correction for given structure:** If you want `lionos-website/pages/index.html` to be `www.yourdomain.com/`, you might need to adjust Vercel's root directory setting or ensure your `index.html` is at the actual root. A common practice for pure static sites is to have `index.html` at the project root. **Assuming your `index.html` is at `pages/index.html` and you want it to be the site root, you might need to adjust this or configure Vercel to serve from the `pages` directory as root, or use rewrites.** Alternatively, you could just deploy the `pages` directory and ensure all asset paths are adjusted (e.g. `../public/css/style.css`).
        *   **Simplified Approach:** For the provided structure, you'd likely deploy the entire `lionos-website` directory. Vercel might require you to specify that `pages/index.html` is the entry point, or you might use rewrites. Alternatively, setting the **Output Directory** to `pages` and ensuring asset paths from within HTML files are like `../public/css/style.css` could work. For maximum simplicity without build tools, ensuring `index.html` is at the root of the *deployed directory* is often easiest.
4.  **Environment Variables:** Not typically needed for a fully static site unless your `main.js` fetches from an API that needs a key (which is not the case here).
5.  **Deploy:** Click "Deploy."

### Deploying to Netlify

1.  **Sign up/Log in:** Go to [netlify.com](https://netlify.com).
2.  **Connect Your Git Repository:**
    *   Click "New site from Git."
    *   Choose your Git provider and repository.
3.  **Configure Build Settings:**
    *   **Branch to deploy:** `main` or your production branch.
    *   **Build command:** Leave blank (unless you have a build step).
    *   **Publish directory:** `.` (root directory). Similar to Vercel, you might need to adjust this if `index.html` is not at the root of what Netlify considers the publish directory. If `pages/index.html` is your main page, you might set this to `pages` and ensure asset paths are correct (e.g., `../public/css/style.css`).
        *   **Simplified Approach:** Set **Publish directory** to `pages`. Ensure all asset paths in your HTML files within `pages/` correctly reference files in `public/` using `../public/`. For example, `<link rel="stylesheet" href="../public/css/style.css">`.
4.  **Deploy Site:** Click "Deploy site."

### Deploying to GitHub Pages

1.  **Push your code to a GitHub repository.**
2.  **Go to your repository settings on GitHub.**
3.  **Navigate to the "Pages" section in the sidebar.**
4.  **Configure GitHub Pages:**
    *   **Source:** Choose "Deploy from a branch."
    *   **Branch:** Select your main branch (e.g., `main` or `master`) and the folder to serve from.
        *   If your `index.html` is at `pages/index.html`, you might need to serve from the `/docs` folder (a common convention for GitHub Pages if not serving from root) or use a GitHub Action to move files around during deployment.
        *   **Simplest Method for GitHub Pages (with current structure):**
            1.  Rename your `pages` directory to `docs` (a special name GitHub Pages can serve from).
            2.  In your HTML files within the (now named) `docs` directory, update asset paths from `../public/` to `../public/` (if `public` is also at the root alongside `docs`). Or, move the `public` directory *inside* the `docs` directory and change paths to `public/`.
            3.  Alternatively, keep `pages/` and `public/` at the root, and set up a GitHub Action to copy the contents of `pages/` and `public/` to the root of the `gh-pages` branch, or into a `/docs` folder on your main branch.
    *   **Recommended approach for GitHub Pages with minimal changes:**
        1.  Ensure `index.html` is at the root of the branch you are deploying (e.g., move `pages/index.html` to `index.html`).
        2.  All other HTML files also at the root (e.g., `downloads.html`, etc.).
        3.  The `public` directory is also at the root.
        4.  Asset paths in HTML would be like `public/css/style.css`.
        5.  In GitHub Pages settings, deploy the root of your `main` branch.

5.  **Save.** Your site will be available at `http://<username>.github.io/<repository-name>/`.

## Build Command Considerations (If using Tailwind for Dev)

If you are actively using Tailwind CSS and need to compile it:
*   Your `package.json` might have a script like:
    ```json
    "scripts": {
      "build:css": "tailwindcss -i ./src/input.css -o ./public/css/tailwind-output.css --minify",
      "build": "npm run build:css" // Or other build steps
    }
    ```
*   In this case, your **Build Command** on Vercel/Netlify would be `npm run build` (or `yarn build`).
*   Your **Publish Directory** would be the directory containing the final `index.html` and all assets (likely the project root or `public/` if all HTML was moved there).

## Custom Domains & SSL

Most modern hosting providers (Vercel, Netlify, Cloudflare Pages) offer free SSL certificates (via Let's Encrypt) and easy custom domain configuration. Follow their specific documentation once your site is deployed.

## Environment Variables

This project, as defined, does not require environment variables for deployment as it's fully static. If you were to add features like API calls that need keys, you would configure them in your hosting provider's dashboard.

## Final Check

After deployment:
*   Test all pages and links.
*   Verify images and assets load correctly.
*   Check responsive design on different devices.
*   Run a performance audit (e.g., Lighthouse in Chrome DevTools).