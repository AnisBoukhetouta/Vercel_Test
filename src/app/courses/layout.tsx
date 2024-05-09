'use client';

import React from 'react';
import { useScroll } from 'framer-motion';

import { Box, alpha } from '@mui/material';

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
      <Box
        component="div"
        sx={{
          m: 3,
          p: '14px',
          height: '85vh',
          overflow: 'scroll',
          scrollbarWidth: 'none',
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        {children}
      </Box>
    </MainLayout>
  );
}
