'use client';

import { useScroll } from 'framer-motion';

import { Box, alpha } from '@mui/material';

import ScrollProgress from 'src/components/scroll-progress';
import { CustomKanbanView } from 'src/components/custom-kanban/view';

export default function TasksView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <Box component="div" sx={{ px: 5, width: '100%', height: '100vh' }}>
        <Box
          component="div"
          sx={{
            p: '14px',
            position: 'relative',
            width: '100%',
            height: '90vh',
            borderRadius: 2,
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
            border: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <CustomKanbanView />
        </Box>
      </Box>
    </>
  );
}
