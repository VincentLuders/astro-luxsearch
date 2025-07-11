# Lux Search Website Guide

## Project Overview
Static recruitment landing page website deployed on Netlify with HTML, CSS, and JavaScript.

## Development Commands
- **Local development**: Use a local server like `python -m http.server` or VSCode's Live Server extension
- **Deploy**: Push to the connected Netlify repository (auto-deployed)
- **Preview**: Open HTML files directly in browser during development

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements (header, section, nav)
- Include proper accessibility attributes
- Indent with 2 spaces

### CSS
- Use CSS variables for colors and consistent values (defined in :root)
- Follow BEM naming convention for classes
- Order properties alphabetically within ruleset

### JavaScript
- Use camelCase for variables and functions
- Prefer const/let over var
- Handle form validation client-side
- Organize event listeners at the bottom of script
- Use proper error handling for form submissions

### Form Handling
- Use Netlify forms for form submissions
- Include data-netlify="true" attribute
- Handle form validation before submission