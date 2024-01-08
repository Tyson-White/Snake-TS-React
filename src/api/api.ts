import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {DataSettings} from "../Interfaces/interfaces.ts";


export const snakeApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333/' }),
    endpoints: (builder) => ({
        getSettings: builder.query<DataSettings, string>({
            query: () => `settings`,
        }),
    }),
})


export const { useGetSettingsQuery } = snakeApi