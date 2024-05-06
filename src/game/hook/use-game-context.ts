'use client';

import { useContext } from 'react';

import { GameContext } from '../context/game-context';

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context) throw new Error('useGameContext context must be use inside GameContextProvider');

  return context;
};
