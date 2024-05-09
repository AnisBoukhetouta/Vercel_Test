import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios';

const URL = endpoints.taskTimer;

export function useGetTimer() {
  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  const memoizedValue = useMemo(
    () => ({ timer: data?.timer, isLoading, error, isValidating }),
    [data, isLoading, error, isValidating]
  );

  return memoizedValue;
}
