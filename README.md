# LionOS Website

This repository contains the source code for the official LionOS website. LionOS is a next-generation, Linux-based operating system focused on performance, simplicity, and community-powered growth.

## 🎯 Project Goals

*   Create a high-performance, sleek, and minimal website that reflects the futuristic and user-focused identity of LionOS.
*   Provide easy access to downloads, documentation, community links, and news.
*   Ensure content is easily editable, leveraging Markdown for docs and blog posts.

## 🎨 Design Philosophy

*   **Style**: Inspired by Deepin and macOS – ultra-clean, smooth, with subtle animations.
*   **Color Scheme**: Primarily monochrome (black, white, grays) with an elegant cobalt blue accent.
*   **Typography**: Modern, legible, and elegant fonts.
*   **Animations**: Minimal and purposeful page transitions, hover effects, and smooth scrolling.
*   **Dark Mode**: User-selectable dark mode for comfortable viewing.

## 💻 Tech Stack

*   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
*   **CSS Features**: Custom properties (variables), Flexbox, Grid, subtle glassmorphism.
*   **JavaScript Libraries**:
    *   `marked.js` (for rendering Markdown content for Docs and Blog).
*   **Icons**: Google Material Icons (Filled, Rounded).
*   **Static Site**: No complex backend or build system. Purely client-side rendered.

## 📁 Folder Structure

```
lionos-website/
├── public/
│   ├── css/
│   │   ├── style.css         # Global styles, layout, components
│   │   ├── themes.css        # Light and dark theme definitions
│   │   └── animations.css    # Animation styles
│   ├── js/
│   │   ├── main.js           # Core JavaScript logic
│   │   └── vendor/
│   │       └── marked.min.js # Markdown parser library
│   ├── images/               # Site images (logo, screenshots, feature icons)
│   │   ├── logo.svg
│   │   ├── hero-background.jpg
│   │   └── ... (other images)
│   └── icons/                # (Optional if not using CDN for icons)
├── pages/                    # HTML pages
│   ├── index.html
│   ├── downloads.html
│   └── ... (other pages)
├── content/                  # Markdown content
│   ├── docs/
│   │   ├── introduction.md
│   │   └── ...
│   ├── blog/
│   │   ├── first-post.md
│   │   └── ...
├── README.md                 # This file
├── DEPLOYMENT.md             # Deployment instructions
└── .gitignore                # Files to ignore for Git
```

## 🚀 Getting Started

### Prerequisites

*   A modern web browser.
*   A code editor (e.g., VS Code).
*   (Optional) A local web server for development to handle relative paths correctly and avoid CORS issues if fetching local Markdown files. Many simple options exist:
    *   Node.js `http-server`: `npm install -g http-server` then run `http-server .` in the `lionos-website` directory.
    *   Python's built-in server: `python -m http.server` (Python 3) or `python -m SimpleHTTPServer` (Python 2) in the `lionos-website` directory.
    *   VS Code Live Server extension.

### Setup

1.  **Clone the repository (or download the files):**
    ```bash
    # If this were a real Git repo:
    # git clone <repository-url>
    # cd lionos-website
    ```
    For now, just create the directory structure and files as provided.

2.  **Download `marked.js`:**
    *   Go to [https://cdn.jsdelivr.net/npm/marked/marked.min.js](https://cdn.jsdelivr.net/npm/marked/marked.min.js)
    *   Save the file as `marked.min.js` inside the `public/js/vendor/` directory.

3.  **Add Assets:**
    *   Place your `logo.svg` and other placeholder images in the `public/images/` directory.
    *   Create placeholder Markdown files in `content/docs/` and `content/blog/`.

### Running Locally

1.  Navigate to the `lionos-website` directory in your terminal.
2.  Start a local web server (see Prerequisites). For example, using Python 3:
    ```bash
    python -m http.server 8000
    ```
3.  Open your web browser and go to `http://localhost:8000/pages/index.html`.
    *(Note: The root for the server will be `lionos-website/`. You'll need to navigate to `pages/index.html` or the specific page you want to view.)*

## 🛠️ Content Editing

*   **Pages**: Directly edit the HTML files in the `pages/` directory.
*   **Documentation**: Add or edit Markdown (`.md`) files in the `content/docs/` directory. The website will dynamically fetch and render these.
*   **Blog/News**: Add or edit Markdown (`.md`) files in the `content/blog/` directory.

## 🚢 Deployment

See `DEPLOYMENT.md` for instructions on deploying to services like Vercel, Netlify, or a traditional VPS.

## 🤝 Contributing

Contributions are welcome! If this were an open-source project, refer to a `CONTRIBUTING.md` for guidelines. For now, this website is built as per the project requirements.

## 📄 License

(Specify a license if applicable, e.g., MIT License. For this project, we'll assume it's proprietary unless stated otherwise).

---

*This website is the face of LionOS — designed to be beautiful, performant, and inspiring.*
```