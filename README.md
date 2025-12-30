# Professional Portfolio SPA

A beautiful, high-performance Single Page Application (SPA) portfolio built with React, Vite, and Vanilla CSS. Designed to be fast, responsive, and easy to customize.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18+ and Vite for lightning-fast development and builds.
- **Responsive Design**: Fully responsive layout ensuring a great experience on mobile, tablet, and desktop.
- **Premium Aesthetics**: Custom dark mode design with glassmorphism effects and smooth animations.
- **JSON-Driven Content**: All portfolio data is stored in a structured JSON file (`src/data/resume.json`), making it easy to update without touching code.
- **Performance Optimized**: Minimal dependencies and optimized assets.

## 🛠️ Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/portfolio.git](https://github.com/MrTankIsHere/Portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 🧩 Project Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/      # Reusable UI components (Header, etc.)
├── data/            # Data sources (resume.json)
├── sections/        # Page sections (Hero, About, etc.)
├── styles/          # Global styles and CSS modules
├── App.jsx          # Main application component
└── main.jsx         # Entry point
```

## 🎨 Customization

### Updating Content
Edit `src/data/resume.json` to update your personal information, experience, projects, and skills. The app will automatically reflect these changes.

### Styling
Global styles are located in `src/index.css` and `src/styles`. 
- **Colors & Typography**: Modify CSS variables in `src/index.css` (`:root`).
- **Section Styles**: each section has its own CSS file in `src/styles/`.

## 📄 License

MIT
