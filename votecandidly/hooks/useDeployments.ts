
import useSWR from 'swr';
import { Fetcher } from 'swr';


export const fetcher: Fetcher<any, string> = (...args) =>
    fetch(...args).then((res) => res.json());

// import { fetcher } from '@/utils/fetcher';
import { global_app } from '@/utils/config';



