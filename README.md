# X7 Trading Gateway

**Aurora Minimal** — AI-Powered Hyperliquid DEX Trading Platform

Modern minimalist glassmorphism interface with real-time WebSocket backbone for perpetual futures trading, whale tracking, and automated strategies.

## 🎯 Vision

An AI-powered gateway for Hyperliquid perpetual DEX trading with:
- **Smart Discovery & Whale Tracking** powered by HypurrScan API
- **AI-Driven Trading Terminal** with multi-order execution
- **Automated Strategies** (Grid Trading, Copy Trading, DCA)
- **Real-Time Alerts** via WebSocket, Telegram, and Web Push
- **Modern Aurora Minimal Design** (glassmorphism + neon accents)

## 🏗️ Architecture

### Tech Stack
- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion
- **Backend**: Node.js + Express + WebSocket (ws) + Redis + PostgreSQL
- **Data Sources**:
  - HypurrScan API (`https://api.hypurrscan.io`) — whale tracking, address tags
  - Hyperliquid Official API (`https://api.hyperliquid.xyz`) — trading execution
- **AI Layer**: OpenAI / Claude for smart money classification
- **Real-Time**: WebSocket server for live data streams
- **Auth**: WalletConnect v2 (MetaMask, WalletConnect) + JWT
- **Deployment**: Docker + Docker Compose

### Key Features

1. **Smart Discovery & Whale Tracking**
   - Real-time address leaderboard (PnL, ROI, win rate)
   - AI tagging system (Smart Money, Whale, Bot, Sniper, KOL)
   - Whale profile deep-dive analysis
   - Token holder analysis
   - Search & discovery

2. **AI-Powered Trading Terminal**
   - Multi-order types (Market, Limit, Conditional, Stop-Loss, TP, Trailing)
   - 3-way orders execution
   - Portfolio dashboard with real-time PnL
   - Position tracking and management

3. **Automated Strategies**
   - Grid Trading (volatility harvesting)
   - AI Copy Trading (mirror top whales)
   - DCA Bot (scheduled purchases)
   - Dip Buying (threshold-triggered)

4. **Real-Time Alerts**
   - Telegram Bot integration
   - Web push notifications
   - Custom alert builder
   - Alert history logging

## 📁 Project Structure

```
x7scan/
├── frontend/                 # Next.js 14 application
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── styles/
│   └── package.json
├── backend/                  # Express + WebSocket server
│   ├── src/
│   │   ├── api/
│   │   ├── websocket/
│   │   ├── services/
│   │   ├── middleware/
│   │   └── index.ts
│   └── package.json
├── docker-compose.yml        # Docker services orchestration
├── .env.example             # Environment variables template
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 14+
- Redis 7+

### Environment Setup

```bash
cp .env.example .env.local
# Configure your API keys and database URLs
```

### Local Development

```bash
# Install dependencies
npm install --workspaces

# Start Docker services
docker-compose up -d

# Run migrations
npm run db:migrate --workspace=backend

# Start dev servers
npm run dev
```

### Docker Deployment

```bash
docker-compose up --build
```

Services will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- WebSocket: ws://localhost:8080
- PostgreSQL: localhost:5432
- Redis: localhost:6379

## 📊 WebSocket API

Base: `wss://api.x7trading.com/ws`

**Channels**:
- `orderbook:{market}` — L2/L3 updates
- `trades:{market}` — Real-time trades
- `position:{user_id}` — User positions
- `whale_alert` — Whale movements
- `order_status:{user_id}` — Order fills
- `smart_money_flow` — Aggregated flows

**Example Subscription**:
```json
{
  "id": 1,
  "method": "subscribe",
  "params": ["orderbook:ETH-USD", "trades:ETH-USD"]
}
```

## 🔌 Data Sources

### HypurrScan API
- Address rankings and tags
- Token holder analysis
- Whale movement tracking
- Global address aliases

### Hyperliquid Official API
- Trading execution (orders, fills)
- Orderbook and market data
- User positions and clearinghouse state
- OHLCV candlestick data

## 🎨 Design System

**Theme**: Aurora Minimal
- **Primary**: Deep Indigo (#4F46E5)
- **Accent**: Electric Teal (#14B8A6)
- **Typography**: Inter + JetBrains Mono
- **Effects**: Glassmorphism + subtle glow animations
- **Dark Mode**: Optional toggle (light-first design)

## 🔒 Security

- Non-custodial (private keys not stored)
- HMAC-SHA256 API signatures
- Nonce + timestamp replay prevention
- Tier-based rate limiting
- E2E encryption for sensitive payloads
- Strict CORS origin whitelist
- Zod input validation
- Full audit logging

## 📋 Development Roadmap

- **Phase 1** (Week 1-2): Foundation, Auth, HypurrScan integration
- **Phase 2** (Week 3-4): Trading Core, Position tracking, WebSocket
- **Phase 3** (Week 5-6): Smart Features, Copy Trading, Strategies
- **Phase 4** (Week 7-8): Polish, Testing, Launch

## 📝 API Documentation

Full API docs available at `/docs` (Swagger/OpenAPI)

## 🤝 Contributing

See CONTRIBUTING.md for development guidelines.

## 📄 License

Proprietary — X7 Trading Gateway

---

**Status**: In Development
**Last Updated**: June 2026
