'use client';

import React from 'react';

import { CreateGameContext } from './create-game-context';

type Props = {
  children: React.ReactNode;
};

export default function CreateGameProvider({ children }: Props) {
  const [gameType, setGameType] = React.useState<string>('first');
  const [gameDetails, setGameDetails] = React.useState<string>('');
  const [options, setOptions] = React.useState<boolean>(true);

  React.useEffect(() => {
    console.log('~~~~~~~~~~~~~~~', gameType);
  }, [gameType]);

  const memoContext = React.useMemo(
    () => ({ gameType, setGameType, gameDetails, setGameDetails, options, setOptions }),
    [gameType, gameDetails, options]
  );

  return <CreateGameContext.Provider value={memoContext}>{children}</CreateGameContext.Provider>;
}
