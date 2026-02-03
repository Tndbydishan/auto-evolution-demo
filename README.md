# Auto Evolution Workshop - Premium Automotive Website

A high-performance, **Multi-Page Application (MPA)** built for professional automotive workshops. This project utilizes **React**, **TypeScript**, and **Vite** to generate static HTML pages for optimal SEO, performance, and ease of hosting.

## 🚀 Quick Start

### Prerequisites
*   Node.js (v18 or higher) installed on your machine.

### Installation
1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser.

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    The compiled website will be generated in the `dist/` folder.

---

## 📂 Project Structure

This project does not use a `src` folder. The root directory contains the source code.

```text
├── components/          # UI Components
│   ├── branding/        # Logo variants
│   ├── ContactInfo.../  # Scrolling marquee component
│   ├── Footer/          # Site footer
│   ├── Logo/            # Main SVG Logo
│   ├── Map/             # Google Maps wrapper
│   ├── Navbar/          # Responsive Navigation
│   ├── PageHero/        # Hero banners with video/image support
│   ├── Preloader/       # Initial loading animation
│   ├── SOS/             # Emergency call-to-action component
│   └── SmoothScroll/    # Native scrolling behavior wrapper
├── data/                # Content Configuration
│   └── index.ts         # Navigation links, social media URLs
├── fonts/               # Local font files
├── pages/               # Page Content (React Components)
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Training.tsx
│   ├── Blogs.tsx
│   ├── Contact.tsx
│   └── Registration.tsx
├── resources/           # ASSET GUIDELINES (Read this for images/icons)
├── index.html           # Home Page Entry
├── about.html           # About Page Entry
├── services.html        # Services Page Entry
├── ... (other .html)    # Other Page Entries
├── index.tsx            # React Entry Point for Home
├── index.css            # Global Styles
├── tailwind.config.js   # (Note: Tailwind is configured via CDN in HTML head)
└── vite.config.ts       # Vite Build Configuration
```

---

## 🛠️ Customization Guide

### 1. Changing Colors & Theme
This project uses **Tailwind CSS via CDN** injected into the `<head>` of every HTML file.

*   **Location**: Open any `.html` file (e.g., `index.html`).
*   **Action**: Find the `<script>` tag defining `tailwind.config`.
    ```javascript
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'auto-red': '#d02029', // <-- CHANGE THIS HEX CODE
            'auto-black': '#141414',
            // ...
          }
        }
      }
    }
    ```
*   **Note**: You must update this script in **every** `.html` file to maintain consistency across pages.

### 2. Updating Navigation & Links
*   **File**: `data/index.ts`
*   **Action**: Modify the `NAV_LINKS` array to add/remove menu items. Update `SOCIALS` for footer social icons.

### 3. Replacing the Logo
*   **File**: `components/Logo/index.tsx`
*   **Action**: This is a pure SVG component. Replace the `<svg>...</svg>` content with your own vector logo. Ensure you preserve the `className` props for animations to work.

### 4. Changing Images
*   **File**: `pages/Home.tsx` (or specific page file)
*   **Action**: Look for the `PageHero` component.
    ```tsx
    <PageHero 
      mediaSource="https://your-image-url.com/image.jpg" 
      ... 
    />
    ```
*   **Local Images**: See `resources/README.md` for instructions on using local image files.

---

## 🌐 Deployment

Since this project generates **static HTML**, it can be hosted anywhere.

### Option A: Netlify / Vercel (Recommended)
1.  Push your code to GitHub.
2.  Import the project in Netlify/Vercel.
3.  **Build Command**: `npm run build`
4.  **Publish Directory**: `dist`

### Option B: Shared Hosting (cPanel/Hostinger)
1.  Run `npm run build` locally.
2.  A `dist` folder will be created.
3.  Upload **all files inside `dist/`** to your server's `public_html` folder.
4.  No Node.js server is required.

---

## 🚑 Troubleshooting

*   **Marquee text not showing?**
    Ensure `ContactInfoSection.css` has the correct mask settings (browser compatibility) and text colors aren't blending with the background.

*   **Mobile Menu stuck?**
    The layout uses a class `menu-open` on the body to lock scrolling. If stuck, reload or check `components/Layout.tsx`.

*   **Images broken?**
    Check if the URL in `mediaSource` is valid. If using local images, ensure they are in the `public/` folder and referenced with a leading slash (e.g., `/images/car.jpg`).

---

**© 2026 Auto Evolution Workshop**
