'use client';

import { useScroll } from 'framer-motion';

import MainLayout from 'src/layouts/main';
import DashboardProvider from 'src/dashboard/context/dashboard-provider';

import ScrollProgress from 'src/components/scroll-progress';

// ----------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <DashboardProvider>
        <ScrollProgress scrollYProgress={scrollYProgress} />
        {children}
      </DashboardProvider>
    </MainLayout>
  );
}
