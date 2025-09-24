# Copilot Instructions for The Originals Web Project

## Project Overview
- This is a single-page web application for a men's fashion store, built with vanilla JavaScript, HTML, and CSS.
- The main files are:
  - `index.html`: Page structure, navigation, modals, and cart sidebar.
  - `app.js`: All interactive logic, including product rendering, cart management, filtering, notifications, and UI event handling.
  - `style.css`: Custom design system using CSS variables for colors, layout, and responsive styles.

## Architecture & Data Flow
- **Products** are defined as a static array in `app.js` and rendered dynamically into the DOM.
- **Cart state** is managed in-memory (not persisted) and updated via UI actions. Cart UI is updated by manipulating DOM elements directly.
- **Filtering** is handled by button clicks, which re-render the product grid.
- **Notifications** are shown using dynamically created DOM elements and custom CSS animations.
- **Modals** (login, cart) and overlays are toggled by adding/removing the `hidden` class.
- **Responsive navigation** uses a mobile menu toggle and window resize events.

## Key Patterns & Conventions
- All UI updates are performed by direct DOM manipulation (no frameworks).
- Product prices are stored as strings (e.g., `₹1,999`) and parsed for calculations.
- Event listeners are set up on DOMContentLoaded for initialization.
- CSS uses a design system with semantic color tokens and custom properties for easy theming.
- Images use the `loading="lazy"` attribute and have error handling for unavailable images.
- Social login buttons are placeholders; actual authentication is not implemented.
- No build step or external dependencies; all code runs client-side.

## Developer Workflows
- **No build or test commands**: Directly open `index.html` in a browser to view changes.
- **Debugging**: Use browser DevTools for inspecting DOM, console logs, and CSS.
- **Adding products**: Update the `products` array in `app.js`.
- **Styling**: Extend or modify CSS variables and classes in `style.css`.
- **UI changes**: Edit HTML structure in `index.html` and update event logic in `app.js`.

## Integration Points
- External image URLs are used for product images.
- WhatsApp link in header for direct contact.
- Social login buttons (Google, Facebook, Instagram) are present but non-functional.

## Examples
- To add a new product:
  ```js
  products.push({
    id: 7,
    name: "New Product",
    category: "shirts",
    price: "₹1,499",
    originalPrice: "₹1,999",
    image: "<image-url>",
    description: "Description here"
  });
  ```
- To add a new filter:
  Add a button in the `.product-filters` section of `index.html` and update filter logic in `app.js` if needed.

## Important Files
- `index.html`, `app.js`, `style.css` (root directory)

---
_If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions._
