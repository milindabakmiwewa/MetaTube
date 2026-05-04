# MetaTube

A modern YouTube clone built with React 18, Material UI 5, and the YouTube Data API v3. Features a purple and white theme with full video browsing, channel pages, search, and video playback.

## Tech Stack

- **React 18** with Vite
- **Material UI 5** (@mui/material)
- **React Router v6**
- **Axios** for API requests
- **React Player** for video playback
- **YouTube Data API v3**

## Features

- Browse videos by category
- Watch videos with full player
- View channel pages
- Search across YouTube
- Responsive design (mobile + desktop)

## Getting Started

### Prerequisites

- Node.js 18+
- A [YouTube Data API v3](https://console.developers.google.com) key

### Setup

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```
REACT_APP_YOUTUBE_API_KEY=your_google_api_key_here
```

3. Start the development server:

```bash
npm start
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

| Variable | Description |
|---|---|
| `REACT_APP_YOUTUBE_API_KEY` | YouTube Data API v3 key from Google Cloud Console |

## Color Theme

| Role | Color |
|---|---|
| Background | `#0F0F1A` |
| Navbar | `#1A0A2E` |
| Primary accent | `#7C3AED` |
| Secondary accent | `#A855F7` |
| Text | `#FFFFFF` |

## Docker Deployment

Build and run using docker-compose (reads `REACT_APP_YOUTUBE_API_KEY` from `.env`):

```bash
docker-compose up --build
```

Open `http://localhost` once the build completes.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- A [YouTube Data API v3](https://console.cloud.google.com/) key stored in `.env` as `REACT_APP_YOUTUBE_API_KEY`
