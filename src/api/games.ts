//----------------------------------------------------------------

import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher2, endpoints } from 'src/utils/axios';

export function useGetGames() {
  const URL = `https://grat.fun/api/pwniq${endpoints.games.games}`;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher2);

  const memoizedValue = useMemo(
    () => ({ data, isLoading, error, isValidating }),
    [data, isLoading, error, isValidating]
  );

  return memoizedValue;
}

export function useGetAssets() {
  const URL = endpoints.games.assets;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher2);

  const memoizedValue = useMemo(
    () => ({ data, isLoading, error, isValidating }),
    [data, isLoading, error, isValidating]
  );

  return memoizedValue;
}
