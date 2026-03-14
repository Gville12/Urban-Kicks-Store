# UrbanKicks · Sneaker Store Landing Page

This is a small React single-page application that simulates the landing page and basic information pages of a fictional sneaker brand called **UrbanKicks**.

The project focuses on clean UI, simple navigation, and responsive layouts using Flexbox and media queries.

---

## 📝 Main Screen Description

The **home page** (`/` and `/home`) acts as the main landing page of the project:

- **Header**: fixed navigation bar with the UrbanKicks logo and links to the Home, About and Contact pages.
- **Hero section**: short tagline, main headline and call-to-action buttons highlighting the store value proposition.
- **Highlight card**: a small summary card mentioning free shipping and return policies to build user trust.
- **Featured sneakers grid**: responsive grid that displays a list of sneakers loaded from a JSON array, each rendered through a reusable card component showing image, brand, description and price.
- **Footer**: section with brand summary, project links (GitHub and Figma inspiration) and social icons.

All sections are responsive and adapt to different screen sizes using Flexbox and media queries.

---

## 🧩 Third‑party Components & Libraries

These are the main third‑party libraries used in the project:

- **React Router DOM**: client-side routing between the Home, About and Contact pages.
  - Documentation: `https://reactrouter.com/`
- **React Leaflet + Leaflet**: interactive map component shown on the Contact page to display the UrbanKicks concept store location.
  - React Leaflet: `https://react-leaflet.js.org/`
  - Leaflet: `https://leafletjs.com/`

---

## 📚 Helpful Tutorials & References

Some tutorials and articles that inspired or helped build this project:

- Best README template inspiration:
  - `https://github.com/othneildrew/Best-README-Template`
- React Router basic tutorial:
  - `https://reactrouter.com/en/main/start/tutorial`
- React Leaflet getting started:
  - `https://react-leaflet.js.org/docs/start-installation/`
- Responsive web images guidelines:
  - `https://www.shopify.com/es/blog/imagenes-para-web-tamano`

You can add any extra tutorials or resources that you personally used while working on the project.

---

## 🧱 Project Structure & Naming Conventions

The project follows these structural and naming rules:

- `src/components`: reusable UI components (Header, Footer, Map, card components, etc.).
  - Each component lives in its own folder using **kebab-case** (e.g. `header`, `footer`, `destination-card`).
  - Component files use **PascalCase** (e.g. `Header.jsx`, `Footer.jsx`, `DestinationCard.jsx`).
- `src/pages`: top‑level pages for routing.
  - Each page has its own folder using **kebab-case** (e.g. `home`, `about`, `contact`).
  - Page files use **PascalCase** (e.g. `Home.jsx`, `About.jsx`, `Contact.jsx`).
- `src/data`: data files in **kebab-case** (e.g. `sneakers.js`) exporting JSON‑like arrays.
- CSS files for components and pages also use **PascalCase** (e.g. `Home.css`, `About.css`).
- Class names and ids in JSX use **kebab-case** (e.g. `className="sneaker-card"`).
- JavaScript variables use **camelCase** (e.g. `sneakerList`, `isNew`).

This naming scheme keeps the codebase consistent and easier to navigate.

---

## 🧠 Clean Code & UX Considerations

Some examples of clean code and UX decisions applied in the project:

- **Small, focused components**:
  - `DestinationCard` is a reusable card that receives data via props and focuses only on presentation.
  - Page components (`Home`, `About`, `Contact`) are responsible for layout and composition, not low‑level styling.
- **DRY principles**:
  - Header and Footer are shared across all pages through the main `App` layout.
  - Sneaker data is stored in a single JSON array (`src/data/sneakers.js`) and consumed from there.
- **Self-explanatory code**:
  - Descriptive variable and component names such as `sneakers`, `heroSection`, `contactPage`, `contactFormWrapper`.
- **User experience**:
  - Clear visual hierarchy (hero > featured products > footer links).
  - Sufficient spacing and legible font sizes for comfortable reading.
  - Responsive layout using Flexbox and media queries for mobile, tablet and desktop.

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:

   - `http://localhost:5173`
   - `http://localhost:5173/home`

---

## 🗺️ Pages Overview

- **Home** (`/` and `/home`):
  - Hero banner, highlight section and responsive grid of sneakers loaded from a JSON array.
- **About** (`/about`):
  - Explanation of the UrbanKicks concept, mission and design approach.
- **Contact** (`/contact`):
  - Store address and opening hours.
  - Contact details (email and phone).
  - Contact form (demo only) with fields for name, email, subject and message.
  - Embedded interactive map using React Leaflet, centered on Madrid.

---

## ⭐ Advanced Features

To maximize the project grade, the following 3 interactive React features have been implemented from scratch:

1. **Professional Dark Mode**: A persistent theme switcher (sun/moon SVG icons) that uses a sleek slate-grey palette. It includes **custom CSS filters for the Leaflet Map**, ensuring the entire UI remains cohesive in dark mode.
2. **Interactive Sneaker Slider**: A custom-built horizontal carousel on the Home page that allows users to navigate through featured products with smooth transitions and responsive logic.
3. **Sneaker Match Mini-game**: An algorithmic quiz that recommends the ideal sneaker from the database based on user preferences, demonstrating complex conditional rendering and array filtering.

---

## 🎨 Design Reference (Figma)

The visual design and layout inspiration for this project is based on the following Figma community file:

  **Shoe Store – Figma Community Template**
  https://www.figma.com/es-es/comunidad/file/1373911621515633358/shoe-store

This design was used as a visual reference for:

  - Overall layout structure (hero + featured products + footer)

  - Clean typography and spacing hierarchy

  - Card-based product presentation

  - Minimal and modern e-commerce aesthetics

  - Balanced use of whitespace and content blocks

While the implementation is adapted to fit the UrbanKicks brand concept, the Figma file served as a structural and visual guideline during the UI development process.

---

## 🌳 Git Branching (main & develop)

To match the assignment requirements, you can use the following simple branching strategy:

1. Initialize the repository and create the `main` branch:

   ```bash
   git init
   git checkout -b main
   git add .
   git commit -m "Initial commit: UrbanKicks sneaker landing page"
   ```

2. Create the `develop` branch from `main`:

   ```bash
   git checkout -b develop
   git push -u origin main
   git push -u origin develop
   ```

3. Use `develop` for ongoing changes and create pull requests into `main` when features are ready.

> When you submit the assignment, remember to provide **only the GitHub repository URL** in the platform, as requested in the instructions.

---

## 🔗 Firebase Hosting Deployment
> **Live Project Link**: https://urban-kicks-store.web.app


## 📸 RSS Reader Demonstration
Below is the screenshot using an RSS Feed Reader software (Showing the local `/feed.xml` import pointing to the Home page):

![RSS Reader Screenshot]
([public/screenshot1.png])
([public/screenshot2.png])


---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
