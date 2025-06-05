// public/js/main.js
/* ==========================================================================
   LionOS - Core JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const docElement = document.documentElement;
    const siteHeader = document.querySelector('.site-header');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');

    // Determine current page for active link highlighting
    // Handles cases like 'index.html' or just '/' for the homepage
    let currentPath = window.location.pathname;
    if (currentPath.endsWith('/')) {
        currentPath += 'index.html';
    }
    currentPath = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    if (currentPath === '' || currentPath === 'pages') { // If served from root and path is /pages/ or just /
      currentPath = 'index.html';
    }


    // --- 1. Sticky Header with Enhanced Styling ---
    function handleHeaderScroll() {
        if (siteHeader) {
            if (window.scrollY > 30) { // Lower threshold for quicker effect
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        }
    }
    window.addEventListener('scroll', handleHeaderScroll, { passive: true }); // Use passive listener for scroll performance
    handleHeaderScroll(); // Initial check on page load

    // --- 2. Mobile Navigation Toggle ---
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = navMenu.classList.toggle('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
            const icon = mobileMenuToggle.querySelector('.material-icons-round');
            if (icon) {
                icon.textContent = isExpanded ? 'close' : 'menu';
            }
            // Optional: Prevent body scroll when mobile menu is open
            // document.body.style.overflow = isExpanded ? 'hidden' : '';
        });
    }

    // --- 3. Active Navigation Link Highlighting & Mobile Menu Close ---
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        let linkPage = link.getAttribute('href');
        if (linkPage) {
            linkPage = linkPage.substring(linkPage.lastIndexOf('/') + 1);
             if (linkPage === '' && (link.pathname === '/' || link.pathname.endsWith('/index.html'))) { // Handle root path href="" or href="/"
                linkPage = 'index.html';
            }
        }

        if (linkPage === currentPath) {
            link.classList.add('active');
        }

        // Close mobile menu on link click
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                const icon = mobileMenuToggle.querySelector('.material-icons-round');
                if (icon) icon.textContent = 'menu';
                // document.body.style.overflow = ''; // Restore body scroll
            }
        });
    });

    // --- 4. Theme Toggler (Dark/Light Mode) ---
    function applyTheme(theme) {
        docElement.setAttribute('data-theme', theme);
        if (themeToggleBtn) {
            const icon = themeToggleBtn.querySelector('.material-icons-round');
            if (icon) {
                icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
                icon.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
            }
        }
        localStorage.setItem('lionos-theme', theme);
    }

    function getInitialTheme() {
        const storedTheme = localStorage.getItem('lionos-theme');
        if (storedTheme) {
            return storedTheme;
        }
        // Default to system preference if no stored theme
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    let currentTheme = getInitialTheme();
    applyTheme(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            currentTheme = docElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme);
            // Set a flag that user has manually changed the theme
            localStorage.setItem('lionos-theme-manual-override', 'true');
        });
    }

    // Listen for system theme changes, but respect manual override
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('lionos-theme-manual-override')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }


    // --- 5. Scroll-triggered Animations (Intersection Observer) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observerInstance.unobserve(entry.target); // Animate only once
                }
            });
        }, {
            rootMargin: '0px 0px -10% 0px', // Trigger when element is 10% from bottom of viewport
            threshold: 0.01 // Even a tiny bit visible
        });

        animatedElements.forEach(el => observer.observe(el));
    } else { // Fallback for older browsers or if no elements to animate
        animatedElements.forEach(el => el.classList.add('is-visible')); // Make them visible immediately
    }

    // --- 6. Markdown Content Loading (REMOVED/COMMENTED OUT as marked.js is removed) ---
    /*
    // For Docs Page
    const docsContentEl = document.getElementById('docs-content-area');
    const docsSidebarLinks = document.querySelectorAll('.docs-sidebar a[data-md]');

    async function loadMarkdown(filePath, targetElement) {
        // ... (This function would require marked.js)
        // For now, Docs and Blog content should be static HTML.
    }

    if (docsContentEl && docsSidebarLinks.length > 0) {
        // Logic for loading initial doc and handling sidebar clicks (would need marked.js)
        // docsContentEl.innerHTML = "<p>Documentation content will be loaded here (requires JS functionality).</p>";
    }

    // For Blog Post Page (if loading single post via MD)
    const blogPostBody = document.getElementById('blog-post-body');
    if (blogPostBody && blogPostBody.dataset.mdSource) {
        // loadMarkdown(blogPostBody.dataset.mdSource, blogPostBody);
        // blogPostBody.innerHTML = "<p>Blog post content will be loaded here (requires JS functionality).</p>";
    }

    // For Blog Index Page
    const blogGrid = document.getElementById('blog-grid-main');
    if (blogGrid) {
        // Logic for fetching manifest.json and rendering blog cards (would need further dev)
        // blogGrid.innerHTML = "<p>Blog posts will be listed here (requires JS functionality).</p>";
    }

    // For loading a single blog post into blog-post-template.html
    const blogPostContent = document.getElementById('blog-post-content-area');
    const urlParams = new URLSearchParams(window.location.search);
    const postSlug = urlParams.get('post');
    if (blogPostContent && postSlug) {
        // Logic for fetching manifest, then MD content for a single blog post
        // blogPostContent.innerHTML = "<p>Individual blog post content will be loaded here (requires JS functionality).</p>";
    }
    */

    // --- 7. Changelog Toggles for Downloads Page (If any) ---
    const changelogToggles = document.querySelectorAll('.changelog-toggle');
    changelogToggles.forEach(toggle => {
        const targetId = toggle.getAttribute('data-target');
        if (!targetId) return;
        const contentElement = document.getElementById(targetId);

        if (contentElement) {
            contentElement.style.display = 'none'; // Initially hide
            toggle.setAttribute('aria-expanded', 'false');

            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const isHidden = contentElement.style.display === 'none';
                contentElement.style.display = isHidden ? 'block' : 'none';
                toggle.textContent = isHidden ? 'Hide Changelog' : 'Show Changelog';
                toggle.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
            });
        }
    });

    // --- 8. Cookie Banner ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    if (cookieBanner && acceptCookiesBtn) {
        // Show banner only if cookies haven't been accepted
        if (!localStorage.getItem('lionos-cookies-accepted')) {
            // Delay showing the banner slightly so it doesn't interrupt page load animation
            setTimeout(() => {
                cookieBanner.style.display = 'block'; // Or 'flex' if styled that way
                // Animate in if desired
                // cookieBanner.style.opacity = '0';
                // cookieBanner.style.transform = 'translateY(20px)';
                // requestAnimationFrame(() => {
                //    cookieBanner.style.opacity = '1';
                //    cookieBanner.style.transform = 'translateY(0)';
                // });
            }, 1500); // 1.5 second delay
        }

        acceptCookiesBtn.addEventListener('click', () => {
            cookieBanner.style.display = 'none';
            localStorage.setItem('lionos-cookies-accepted', 'true');
        });
    }

    // --- 9. Smooth Scroll for On-Page Anchor Links (Enhanced) ---
    // CSS `scroll-behavior: smooth;` is preferred, but this is a fallback or for more control.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ensure it's a valid on-page anchor, not just "#" or for JS interaction (e.g. Bootstrap components)
            if (href.length > 1 && href.startsWith('#') && document.querySelector(href)) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerOffset = siteHeader ? siteHeader.offsetHeight : 0; // Account for fixed header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Optionally update URL hash without page jump (for history)
                    // if (history.pushState) {
                    //     history.pushState(null, null, href);
                    // } else {
                    //     location.hash = href;
                    // }
                }
            }
        });
    });

    // --- Final Log ---
    console.log('LionOS Website JS Initialized. Version 1.0.0');
});