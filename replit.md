# Wonderfilled, Inc. - Marketing Website

## Overview
A single-page marketing website for Wonderfilled, Inc. (wonderfilled.games), a transmedia studio and publisher focused on narrative architecture, game design, and IP development.

## Project Structure
- `wonderfilled_v1.html` - Original HTML source file
- `index.html` - Copy of the HTML file served as the site root

## Technology
- Pure HTML5/CSS3, no build system or package manager
- Google Fonts: Cormorant Garamond, Bebas Neue, Space Mono
- Served via Python's built-in HTTP server in development

## Running Locally
The "Start application" workflow runs `python3 -m http.server 5000` to serve the static files on port 5000.

## Deployment
Configured as a static site deployment with `publicDir: "."`.
