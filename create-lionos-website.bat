@echo off
set BASE=lionos-website

rem Create folders
mkdir %BASE%\public\css
mkdir %BASE%\public\js\vendor
mkdir %BASE%\public\images
mkdir %BASE%\public\icons
mkdir %BASE%\pages
mkdir %BASE%\content\docs
mkdir %BASE%\content\blog

rem Create CSS files
type nul > %BASE%\public\css\style.css
type nul > %BASE%\public\css\themes.css
type nul > %BASE%\public\css\animations.css

rem Create JS files
type nul > %BASE%\public\js\main.js
type nul > %BASE%\public\js\vendor\marked.min.js

rem Create image placeholders
type nul > %BASE%\public\images\logo.svg
type nul > %BASE%\public\images\hero-background.jpg
type nul > %BASE%\public\images\os-screenshot-1.png
type nul > %BASE%\public\images\os-screenshot-2.png
type nul > %BASE%\public\images\feature-performance.svg
type nul > %BASE%\public\images\feature-simplicity.svg
type nul > %BASE%\public\images\feature-security.svg
type nul > %BASE%\public\images\appstore-preview.png

rem Create HTML pages
type nul > %BASE%\pages\index.html
type nul > %BASE%\pages\downloads.html
type nul > %BASE%\pages\community.html
type nul > %BASE%\pages\docs.html
type nul > %BASE%\pages\blog.html
type nul > %BASE%\pages\blog-post-template.html
type nul > %BASE%\pages\contribute.html
type nul > %BASE%\pages\about.html
type nul > %BASE%\pages\appstore.html
type nul > %BASE%\pages\privacy.html
type nul > %BASE%\pages\404.html

rem Create Markdown content
type nul > %BASE%\content\docs\introduction.md
type nul > %BASE%\content\docs\installation-guide.md
type nul > %BASE%\content\blog\welcome-to-lionos.md
type nul > %BASE%\content\blog\new-features-v1.md

rem Create root files
type nul > %BASE%\README.md
type nul > %BASE%\DEPLOYMENT.md
type nul > %BASE%\.gitignore

echo Folder structure created under %BASE%
