# Bhautik Tank - Full Stack Developer (MERN) & AI Applications Portfolio

A performant, responsive, and visually stunning single-page portfolio website designed and built using **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. 

This portfolio showcases the technical expertise, work experience, projects, and AI integrations of **Bhautik Tank**, Full Stack Developer (MERN).

---

## Key Features

- **Signature Glassmorphism & Animated Gradient System**: Custom HSL dark and light theme tokens with slow aurora keyframe gradient loops on accents, borders, and hero blobs.
- **Persistent Light / Dark Theme Engine**: Theme state managed via React Context (`ThemeContext.jsx`) and synchronized with `localStorage` and `data-theme` root attribute.
- **Premium Initial Glass Loading Screen**: Animated loader (`Loader.jsx`) featuring a rotating gradient ring, glowing initials, and smooth unmount transitions powered by Framer Motion.
- **Floating Pill Glass Navbar**: Sticky top navbar with active section tracking, smooth scroll navigation, theme switcher, and mobile drawer.
- **Hero Section**: Bold visual display header in *Space Grotesk* font, role title, supporting bio summary, CTA buttons, and ambient floating blobs.
- **Technical Skills & Expertise**: Categorized skills (Languages, Frontend, Backend, Database, Version Control, Development Tools, AI Integration, AI Tools, AI Research Tools, Other AI Tools, Practices) accompanied by crisp brand icons (`TechIcon.jsx`).
- **Work Experience**: Structured timeline for internship experience at Vneviks Skill Tech Pvt. Ltd. with key achievements.
- **Symmetrical 3-Card Projects Layout**: Responsive single-row desktop layout displaying featured projects (*ChipWise*, *Bunny-Book*, *Portfolio Website*) with equal-height cards, tech stack chips, and demo/GitHub links.
- **Interactive Contact Section**: Contact information cards alongside a direct message form wrapped inside an animated signature-gradient border container.
- **Clean Architecture & Zero Third-Party bloat**: Built with modular components and centralized data (`src/data/content.js`).

---

## Tech Stack

| Category | Technology |
| :--- | :--- |
| **Core Framework** | React.js 19, Vite |
| **Styling** | Tailwind CSS v4, Vanilla CSS Custom Properties |
| **Animations** | Framer Motion |
| **Icons** | Lucide React, React Icons (Simple Icons, Font Awesome 6) |
| **Typography** | Space Grotesk (Headings), Open Sans (Body) |
| **State Management** | React Context API |

---

## Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg             # Custom circular BT initial logo
│   └── favicon.png
├── src/
│   ├── assets/                 # Static media assets
│   ├── components/
│   │   ├── Footer.jsx          # Full-width glass footer with top gradient line
│   │   ├── Loader.jsx          # Initial animated loading screen
│   │   ├── Navbar.jsx          # Floating pill glass navbar with scroll spy
│   │   └── TechIcon.jsx        # Icon resolver for technologies and skills
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark / Light mode provider
│   ├── data/
│   │   └── content.js          # Single source of truth for portfolio content
│   ├── sections/
│   │   ├── About.jsx           # Bio summary, education, languages & skills
│   │   ├── Connect.jsx         # Contact info cards & gradient form
│   │   ├── Experience.jsx      # Work experience timeline card
│   │   ├── Hero.jsx            # Hero section with display heading & CTAs
│   │   └── Projects.jsx        # Symmetrical 3-card projects grid
│   ├── App.jsx                 # Main application layout wrapper
│   ├── index.css               # Design tokens, CSS variables & utilities
│   └── main.jsx                # Application root entry point
├── index.html                  # HTML template with Google Fonts
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MrTankIsHere/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the local development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles and builds the production bundle into the `dist/` directory.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint to check for code quality and syntax errors.

---

## Customization

### Updating Portfolio Data
All personal details, project specs, work history, education, and technical skills are centralized in [`src/data/content.js`](file:///home/bhautik/Projects/website-projects/portfolio/portfolio/src/data/content.js). Simply update the exported JS objects to reflect changes across the entire site instantly.

### Adjusting Design Tokens
Theme colors, glassmorphism blur values, and animation keyframes can be customized in [`src/index.css`](file:///home/bhautik/Projects/website-projects/portfolio/portfolio/src/index.css) under the `:root[data-theme="dark"]` and `:root[data-theme="light"]` CSS rules.

---

## Contact & Social Links

- **Name**: Bhautik Tank
- **Title**: Full Stack Developer (MERN) | AI-Integrated Web Applications

---

## License

This project is open-source and available under the [MIT License](LICENSE).
