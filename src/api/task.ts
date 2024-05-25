import useSWR from 'swr';
import { useMemo } from 'react';

import { fetcher2, endpoints } from 'src/utils/axios';

import { DEV_HOST_API } from 'src/config-global';

const URL = `${DEV_HOST_API}${endpoints.taskTimer}`;

export function useGetTimer(userId: string) {
  const GET_URL = `${URL}?uid=${userId}`;
  const { data, isLoading, error, isValidating } = useSWR(GET_URL, fetcher2);

  const memoizedValue = useMemo(
    () => ({ timer: data?.timer, isLoading, error, isValidating }),
    [data, isLoading, error, isValidating]
  );

  return memoizedValue;
}
