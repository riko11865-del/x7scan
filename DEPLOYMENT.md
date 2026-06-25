# X7 Trading Gateway

**Aurora Minimal** — AI-Powered Hyperliquid DEX Trading Platform

Modern minimalist glassmorphism interface with real-time whale tracking and automated strategies.

## 🎯 Features

- **Smart Whale Tracking**: Real-time analysis powered by HypurrScan API
- **AI-Powered Terminal**: Execute trades with intelligent routing
- **Automated Strategies**: Grid trading, copy trading, DCA bots
- **Real-Time Alerts**: Telegram, Web Push, Custom conditions
- **Aurora Minimal Design**: Glassmorphism + Neon accents

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Styling**: Glassmorphism + Framer Motion
- **State Management**: Zustand + React Query
- **Data Sources**:
  - HypurrScan API (`https://api.hypurrscan.io`)
  - Hyperliquid Official API (`https://api.hyperliquid.xyz`)
- **Authentication**: WalletConnect v2
- **Deployment**: Vercel (Serverless)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

\`\`\`bash
# Clone repository
git clone https://github.com/riko11865-del/x7scan.git
cd x7scan

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Start development server
npm run dev
\`\`\`

Open http://localhost:3000 in your browser.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📡 API Integration

### HypurrScan API

\`\`\`typescript
import { hypurrscanAPI } from '@/lib/api';

// Get address details
const profile = await hypurrscanAPI.getAddressDetails('0x...');

// Get address tags
const tags = await hypurrscanAPI.getAddressTags('0x...');

// Search
const results = await hypurrscanAPI.search('query');
\`\`\`

### Hyperliquid API

\`\`\`typescript
import { hyperliquidAPI } from '@/lib/api';

// Get market midprices
const mids = await hyperliquidAPI.getAllMids();

// Get orderbook
const orderbook = await hyperliquidAPI.getOrderbook('ETH-USD');

// Get candles
const candles = await hyperliquidAPI.getCandles('BTC-USD', '1h');
\`\`\`

## 🎨 Design System

### Colors

- **Primary**: Deep Indigo (#4F46E5)
- **Accent**: Electric Teal (#14B8A6)
- **Background**: White/Light Gray (light mode), Slate-950 (dark mode)

### Typography

- **Headings**: Inter
- **Monospace**: JetBrains Mono

### Components

- Glass cards with backdrop blur
- Smooth animations via Framer Motion
- Responsive layouts for all devices

## 📱 Responsive Design

- **Desktop (1440px+)**: Full dashboard layout
- **Laptop (1024px)**: Collapsible sidebar
- **Tablet (768px)**: Bottom navigation
- **Mobile (<768px)**: Tab bar interface

## 🔒 Security

- Non-custodial (private keys not stored)
- WalletConnect v2 for secure authentication
- CORS protection
- Input validation with Zod

## 🚀 Deployment to Vercel

1. **Push to GitHub**
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin develop/x7-trading-gateway
\`\`\`

2. **In Vercel Dashboard**:
   - Import project from GitHub
   - Set environment variables from `.env.example`
   - Deploy

3. **Custom Domain**:
   - Add domain in Vercel settings
   - Configure DNS records

## 📚 Project Structure

\`\`\`
src/
├── app/                 # Next.js 14 App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   └── dashboard/      # Dashboard pages
├── components/
│   ├── ui/             # Reusable UI components
│   ├── layout/         # Layout components
│   └── dashboard/      # Dashboard components
├── lib/
│   ├── api.ts          # API clients
│   └── utils.ts        # Utility functions
└── hooks/              # Custom React hooks
\`\`\`

## 🤝 Contributing

Contributions welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

Proprietary — X7 Trading Gateway

## 🔗 Links

- [HypurrScan API](https://hypurrscan.io)
- [Hyperliquid](https://hyperliquid.xyz)
- [WalletConnect](https://walletconnect.com)

---

**Status**: In Development
**Last Updated**: June 2026
