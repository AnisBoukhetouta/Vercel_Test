'use clinet';

import { useContext } from 'react';

import { CreateGameContext } from '../context/create-game-context';

export const UseCreateGameContext = () => {
  const context = useContext(CreateGameContext);

  if (!context)
    throw new Error('useCreateGameContext must be used within a CreateGameContext.Provider');

  return context;
};
