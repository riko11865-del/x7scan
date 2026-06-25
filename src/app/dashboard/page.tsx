'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MarketOverview from '@/components/dashboard/market-overview';
import WhaleLeaderboard from '@/components/dashboard/whale-leaderboard';

export default function Dashboard() {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-400">Real-time trading insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold gradient-text">$25,430.50</div>
            <p className="text-sm text-green-500 mt-2">+12.5% this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">24h Change</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">+2.3%</div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">vs previous day</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Active Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Currently trading</p>
          </CardContent>
        </Card>
      </div>

      <MarketOverview />
      <WhaleLeaderboard />
    </motion.div>
  );
}
