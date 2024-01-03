import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/*
  {"abbreviation":"GMT","client_ip":"185.231.140.53","datetime":"2023-12-07T11:19:57.186018+00:00","day_of_week":4,"day_of_year":341,"dst":false,"dst_from":null,"dst_offset":0,"dst_until":null,"raw_offset":0,"timezone":"Europe/London","unixtime":1701947997,"utc_datetime":"2023-12-07T11:19:57.186018+00:00","utc_offset":"+00:00","week_number":49}
 */

export type TimeResponse = {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: unknown;
  dst_offset: number;
  dst_until: unknown;
  raw_offset: number;
  timzone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
};

export const timeApi = createApi({
  reducerPath: 'timeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://worldtimeapi.org/api/timezone/',
  }),
  endpoints: (builder) => ({
    getLondonTime: builder.query<TimeResponse, void>({
      query: () => 'Europe/London',
    }),
  }),
});

export const { useGetLondonTimeQuery, useLazyGetLondonTimeQuery } = timeApi;
