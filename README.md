# Dolly Strategy Website

A multilingual (English/Italian) website for Dolly Strategy, offering AI solutions for Italian businesses.

## Features

- Responsive design with modern UI
- Multilingual support (English and Italian)
- Built with Next.js App Router
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/giobordoli/dolly-strategy-website.git
cd dolly-strategy-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Next.js App Router file structure
  - `page.tsx`: Home page
  - `layout.tsx`: Root layout
  - `globals.css`: Global styles
  - `[locale]/`: Language-specific routes
  - `components/`: Reusable UI components
  - `context/`: React contexts (including LanguageContext)
  - `translations/`: Translation files for multilingual support

## Deployment

This site can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgiobordoli%2Fdolly-strategy-website) 