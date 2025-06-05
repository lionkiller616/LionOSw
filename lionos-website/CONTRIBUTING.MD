# Contributing to the LionOS Website

Welcome to the LionOS Website project! We're thrilled you're interested in contributing. Your help is essential for keeping the website beautiful, informative, and up-to-date, reflecting the quality and innovation of LionOS itself.

This document provides a set of guidelines for contributing to the website.

## How to Contribute

We welcome contributions in various forms:

*   **Reporting Bugs:** If you find a bug, typo, broken link, or display issue on the website.
*   **Suggesting Enhancements:** If you have ideas for new sections, features, or improvements to existing content or design.
*   **Content Contributions:** Writing or updating documentation, blog posts, or other informational content.
*   **Code Contributions:** Fixing bugs in the HTML, CSS, or JavaScript. Improving performance or accessibility.
*   **Design Contributions:** Proposing UI/UX improvements (mockups, wireframes).

## Getting Started

1.  **Fork the Repository:**
    If you plan to contribute code or content changes, start by forking the main `lionos-website` repository on GitHub.

2.  **Clone Your Fork:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/lionos-website.git
    cd lionos-website
    ```

3.  **Create a New Branch:**
    For each distinct contribution, create a new branch from the `main` branch:
    ```bash
    git checkout -b feature/your-feature-name  # For new features
    git checkout -b fix/issue-description     # For bug fixes
    git checkout -b docs/topic-update         # For documentation changes
    ```
    Please use a descriptive branch name.

4.  **Make Your Changes:**
    *   Follow the coding style and conventions used in the project (see [Code Style](#code-style) below).
    *   Ensure your changes are well-tested locally.
    *   If adding new images, optimize them for the web.
    *   If adding new content (docs, blog), ensure it's well-written and formatted correctly in Markdown.

5.  **Commit Your Changes:**
    Write clear, concise commit messages.
    ```bash
    git add .
    git commit -m "feat: Add responsive improvements to hero section"
    # or
    git commit -m "fix: Correct typo in installation guide"
    # or
    git commit -m "docs: Update introduction.md with new philosophy section"
    ```
    We encourage using [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

6.  **Push to Your Fork:**
    ```bash
    git push origin your-branch-name
    ```

7.  **Submit a Pull Request (PR):**
    *   Go to the original `lionos-website` repository on GitHub.
    *   You should see a prompt to create a Pull Request from your recently pushed branch.
    *   Provide a clear title and a detailed description of your changes in the PR. Explain the "what" and "why" of your contribution.
    *   If your PR addresses an existing issue, link to it (e.g., "Closes #123").
    *   The maintainers will review your PR. Be prepared to discuss your changes and make adjustments if requested.

## Reporting Issues

*   Use the GitHub Issues tracker for the `lionos-website` repository.
*   Before creating a new issue, please check if a similar one already exists.
*   Provide as much detail as possible:
    *   A clear and descriptive title.
    *   Steps to reproduce the bug (if applicable).
    *   Expected behavior and actual behavior.
    *   Screenshots or screen recordings can be very helpful.
    *   Your browser and operating system (if relevant to a display issue).

## Code Style & Guidelines

*   **HTML:** Write semantic HTML5. Use appropriate tags for structure and meaning. Keep it clean and well-indented.
*   **CSS:**
    *   Adhere to the established design system (colors, typography, spacing defined in `public/css/style.css` and `public/css/themes.css`).
    *   Prefer utility classes (if a system like Tailwind is conceptually used, even if manually implemented) for common styling needs.
    *   Write modular and reusable CSS.
    *   Comment complex or non-obvious CSS rules.
    *   Ensure styles are responsive and work well across different screen sizes.
*   **JavaScript:**
    *   Write modern, clean ES6+ JavaScript.
    *   Keep JavaScript focused on interactivity and DOM manipulation. Avoid complex state management unless absolutely necessary for a specific feature.
    *   Comment your code where necessary.
    *   Prioritize performance and efficiency.
*   **Markdown:**
    *   Use standard Markdown syntax.
    *   Keep lines relatively short for readability in raw format.
    *   For blog posts, update `content/blog/_metadata.json` accordingly if you are adding a new post.

## Content (Documentation & Blog)

*   **Clarity and Conciseness:** Content should be easy to understand.
*   **Accuracy:** Ensure all information is correct and up-to-date.
*   **Tone:** Maintain a professional, welcoming, and enthusiastic tone consistent with the LionOS brand.
*   **Grammar and Spelling:** Please proofread your contributions.

## Design Contributions

*   If you have suggestions for UI/UX improvements, it's often best to start by opening an issue to discuss your ideas.
*   You can include mockups, wireframes, or links to existing examples that illustrate your concept.
*   Contributions to improve consistency with Apple's Human Interface Guidelines or the general aesthetic are welcome.

## Code of Conduct

All contributors are expected to adhere to the [LionOS Project Code of Conduct](link-to-main-lionos-coc.md). Please ensure you read and understand it. We are committed to fostering an open, welcoming, and inclusive community.

*(Architect Prime Note: You would need to create a `CODE_OF_CONDUCT.md` for the main LionOS project and link it here.)*

## Questions?

Feel free to reach out by opening an issue or joining our community channels (see the Community page on the website).

Thank you for helping make the LionOS website amazing!