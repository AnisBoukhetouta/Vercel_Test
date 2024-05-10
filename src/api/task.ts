import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher, endpoints } from 'src/utils/axios';

const URL = `https://grat.fun/api/pwniq${endpoints.taskTimer}`;

export function useGetTimer(userId: string) {
  const GET_URL = `${URL}?uid=${userId}`;
  const { data, isLoading, error, isValidating } = useSWR(GET_URL, fetcher);

  const memoizedValue = useMemo(
    () => ({ timer: data?.timer, isLoading, error, isValidating }),
    [data, isLoading, error, isValidating]
  );

  return memoizedValue;
}
