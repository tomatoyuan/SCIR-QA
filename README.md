# Research Directions Showcase System

A modern, interactive web application for showcasing research directions with flow diagrams, research points, papers, and demos.

## Features

- 🎯 **Interactive Flow Diagrams**: Click on nodes to navigate to research directions and points
- 📚 **Research Point Details**: View detailed information about each research point
- 📄 **Paper Listings**: Browse papers with links to PDFs, arXiv, code, and demos
- 🌐 **Bilingual Support**: Chinese and English language support
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🚀 **GitHub Pages Ready**: Easy deployment to GitHub Pages

## Technology Stack

- **React 18** + **TypeScript**
- **Vite** - Build tool
- **React Router** - Routing
- **React Flow** - Interactive flow diagrams
- **React i18next** - Internationalization
- **Tailwind CSS** - Styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tomatoyuan/SCIR-QA.git
cd SCIR-QA
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
SCIR-QA/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── FlowDiagram.tsx
│   │   ├── ResearchCard.tsx
│   │   ├── PaperList.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── ResearchDirection.tsx
│   │   └── ResearchPoint.tsx
│   ├── data/            # Data and translations
│   │   ├── researchData.ts
│   │   └── translations.ts
│   ├── i18n/            # i18n configuration
│   │   └── config.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── README.md
```

## Adding Research Data

Edit `src/data/researchData.ts` to add or modify research directions, research points, papers, and demos.

### Research Direction Structure

```typescript
{
  id: 'unique-id',
  title: { zh: '中文标题', en: 'English Title' },
  description: { zh: '中文描述', en: 'English Description' },
  flowDiagram: {
    nodes: [...],
    edges: [...],
    researchPointMapping: { nodeId: 'researchPointId' }
  },
  researchPoints: [...]
}
```

### Research Point Structure

```typescript
{
  id: 'unique-id',
  title: { zh: '中文标题', en: 'English Title' },
  description: { zh: '中文描述', en: 'English Description' },
  papers: [
    {
      title: 'Paper Title',
      authors: 'Author 1, Author 2',
      venue: 'Conference/Journal',
      year: '2024',
      links: {
        paper: 'https://arxiv.org/abs/xxxx.xxxxx',
        code: 'https://github.com/...',
        demo: 'https://demo-url.com',
        website: 'https://project-website.com'
      }
    }
  ],
  demos: [
    {
      title: 'Demo Title',
      url: 'https://demo-url.com',
      description: { zh: '中文描述', en: 'English Description' }
    }
  ]
}
```

## Deployment to GitHub Pages

The project is already configured for the `SCIR-QA` repository. To deploy:

1. Build and deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Select source: `gh-pages` branch
   - Save

Your site will be available at `https://tomatoyuan.github.io/SCIR-QA/`

## Development

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme.

### Adding New Languages

1. Add translations to `src/data/translations.ts`
2. Update the language switcher if needed

## License

This project is open source and available under the MIT License.

