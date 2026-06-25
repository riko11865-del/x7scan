'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/layout/navigation';

const features = [
  {
    icon: TrendingUp,
    title: 'Smart Whale Tracking',
    description: 'Real-time analysis of whale movements powered by HypurrScan API',
  },
  {
    icon: Zap,
    title: 'AI-Powered Terminal',
    description: 'Execute trades with intelligent order routing',
  },
  {
    icon: Shield,
    title: 'Automated Strategies',
    description: 'Grid trading, copy trading, and DCA bots',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
          <motion.div
            className="text-center space-y-8 max-w-5xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-6xl font-bold gradient-text">
                X7 Trading Gateway
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                AI-powered Hyperliquid perpetual DEX trading platform
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg">
                  Launch Dashboard
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass p-6 rounded-2xl hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
