import { QueryClient } from '@tanstack/react-query';

/**
 * Query Client responsible for housing cache of
 * React Query network requests.
 * `staleTime: 0` sets all requests as instantly stale.
 * `retry: false` prevents failed reqeusts from retrying.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: true,
    },
  },
});
