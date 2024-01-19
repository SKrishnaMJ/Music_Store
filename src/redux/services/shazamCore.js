import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '41bd72105fmsh75e3b1bdcc9a403p13dac4jsnccbf73b8b2c7');

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world'}),
        }),


    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;