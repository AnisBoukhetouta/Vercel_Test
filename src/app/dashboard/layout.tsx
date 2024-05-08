'use client';

import { useScroll } from 'framer-motion';

import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';

// ----------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      {children}
    </MainLayout>
  );
}
