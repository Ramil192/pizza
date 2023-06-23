import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPizza } from '../../types/pizzas';

export const pizzasApi = createApi({
  reducerPath: 'pizzasApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),

  endpoints: (build) => ({
    fetchAllPizza: build.query<
      { pizzasApi: IPizza[]; totalCount: number },
      { limit: number; page: number }
    >({
      query: ({ limit = 8, page = 1 }) => ({
        url: '/pizzas',
        params: {
          _page: page,
          _limit: limit,
        },
      }),
      transformResponse: (pizzasApi: IPizza[], meta) => {
        return {
          pizzasApi,
          totalCount: Number(meta!.response!.headers.get('X-Total-Count')),
        };
      },
    }),
  }),
});
