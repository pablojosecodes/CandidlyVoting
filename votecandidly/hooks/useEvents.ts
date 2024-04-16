
import useSWR from 'swr';
import { Fetcher } from 'swr';


export const fetcher: Fetcher<any, string> = (...args) =>
    fetch(...args).then((res) => res.json());

// import { fetcher } from '@/utils/fetcher';
import { global_app } from '@/utils/config';



import { useEffect, useState } from 'react';

import { events, events as EventsType } from '@prisma/client';
import { EventWithInteractionType } from '@/utils/getsend/models';

interface EventFilter {
    builder?: boolean;
    funlover?: boolean;
    investor?: boolean;
    onboarding?: boolean;
    page: number;
    pageSize: number;
}



export const useAgenda = (userType?: string, onboarding?: boolean) => {
    const [page, setPage] = useState(1);
    const pageSize = 3;
    const [allEvents, setAllEvents] = useState<EventWithInteractionType[]>([]);

    const requestBody = {
        builder: userType === "Builder",
        funlover: userType === "Fun-Lover",
        investor: userType === "Investor",
        onboarding: onboarding,
        page, // this should dynamically change for every fetch
        pageSize,
    };

    const url = `${global_app}/api/data/agenda`; // Replace `global_app` with your global variable or constant

    // Modify fetchData to accept page as a parameter
    const fetchData = async (url: string, currentPage: number): Promise<EventWithInteractionType[] | null> => {
        const requestBodyWithPage = {
            ...requestBody,
            page: currentPage
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBodyWithPage),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const text = await response.text();
            try {
                const jsonData = JSON.parse(text);
                return jsonData as EventWithInteractionType[];
            } catch (parseError) {
                console.error("Error parsing JSON:", parseError);
                return null;
            }
        } catch (networkError) {
            console.error("Error fetching data:", networkError);
            return null;
        }
    };

    // SWR hook with dependency on `page`
    const { data, error, isValidating: isLoading } = useSWR<EventWithInteractionType[] | null>([url, page], () => fetchData(url, page), { shouldRetryOnError: false, revalidateOnFocus: false });

    // Update allEvents when new data is fetched
    useEffect(() => {
        if (data) {
            setAllEvents(prevEvents => [...prevEvents, ...data]);
        }
    }, [data]);

    const fetchMore = (): void => {
        console.group("FETCH")
        setPage(prevPage => prevPage + 1);
    };

    return { events: allEvents, data, isLoading, error, fetchMore };
};





export const useEvents = (userType?: string, onboarding?: boolean, agenda?: boolean) => {
    const [page, setPage] = useState(1);
    const pageSize = 4;
    const [allEvents, setAllEvents] = useState<EventsType[]>([]);

    const requestBody = {
        builder: userType === "Builder",
        funlover: userType === "Fun-Lover",
        investor: userType === "Investor",
        onboarding: onboarding,
        page, // this should dynamically change for every fetch
        pageSize,
        agenda
    };

    const url = `${global_app}/api/data/events`;

    // Modify fetchData to accept page as a parameter
    const fetchData = async (url: string, currentPage: number): Promise<EventsType[] | null> => {
        const requestBodyWithPage = {
            ...requestBody,
            page: currentPage
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBodyWithPage),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const text = await response.text();
            try {
                const jsonData = JSON.parse(text);
                return jsonData as EventsType[];
            } catch (parseError) {
                console.error("Error parsing JSON:", parseError);
                return null;
            }
        } catch (networkError) {
            console.error("Error fetching data:", networkError);
            return null;
        }
    };

    // SWR hook with dependency on `page`
    const { data, error, isValidating: isLoading } = useSWR<EventsType[] | null>([url, page], () => fetchData(url, page), { shouldRetryOnError: false, revalidateOnFocus: false });

    // Update allEvents when new data is fetched  

    useEffect(() => {
        if (data) {
            setAllEvents(prevEvents => {
                const newEvents = data.filter(newEvent =>
                    !prevEvents.some(prevEvent => prevEvent.internalid === newEvent.internalid));
                return [...prevEvents, ...newEvents];
            });
        }
    }, [data]);



    // useEffect(() => {
    //     if (data) {
    //         setAllEvents(prevEvents => [...prevEvents, ...data]);
    //     }
    // }, [data]);

    const fetchMore = (): void => {
        console.group("FETCH")
        setPage(prevPage => prevPage + 1);
    };

    return { events: allEvents, data, isLoading, error, fetchMore };
};



export const useSearch = (query: string, userType?: string, onboarding?: boolean) => {
    const [page, setPage] = useState(1);
    const pageSize = 3;
    const [allEvents, setAllEvents] = useState<EventsType[]>([]);

    const requestBody = {
        builder: userType === "Builder",
        funlover: userType === "Fun-Lover",
        investor: userType === "Investor",
        onboarding: onboarding,
        query, // Integrate the search query
        page,
        pageSize
    };

    const url = `${global_app}/api/data/searchevents`;

    // fetchData now includes query and doesn't need page as it's included in requestBody
    const fetchData = async (): Promise<EventsType[] | null> => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();
            return jsonData as EventsType[];
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    };

    // SWR hook with dependencies on `page` and `query`
    const { data, error, isValidating: isLoading } = useSWR<EventsType[] | null>(
        [url, page, query], // Add query as a dependency for re-fetching when it changes
        fetchData, // Just pass the reference to fetchData
        { shouldRetryOnError: false, revalidateOnFocus: false }
    );


    // Update allEvents when new data is fetched
    useEffect(() => {
        if (data) {
            setAllEvents(prevEvents => {
                const newEvents = data.filter(newEvent =>
                    !prevEvents.some(prevEvent => prevEvent.internalid === newEvent.internalid));
                return [...prevEvents, ...newEvents];
            });
        }
    }, [data]);

    // useEffect(() => {
    //     if (data) {
    //         setAllEvents(prevEvents => [...prevEvents, ...data]);
    //     }
    // }, [data]);

    const reset = () => {
        setAllEvents([])

    }
    const fetchMore = (): void => {
        setPage(prevPage => prevPage + 1);
    };

    return { events: allEvents, data, isLoading, error, fetchMore, reset };
};




export const useMagicSearch = (query: string, userType?: string, onboarding?: boolean) => {
    const [page, setPage] = useState(1);
    const pageSize = 3;
    const [allEvents, setAllEvents] = useState<EventsType[]>([]);

    const requestBody = {
        builder: userType === "Builder",
        funlover: userType === "Fun-Lover",
        investor: userType === "Investor",
        onboarding: onboarding,
        query, // Integrate the search query
        page,
        pageSize
    };

    const url = `${global_app}/api/data/go`;

    // fetchData now includes query and doesn't need page as it's included in requestBody
    type ResponseType = {
        events: EventsType[];
        exactly: any; // Replace with the actual type of 'exactly'
    };

    const fetchData = async (): Promise<ResponseType | null> => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const jsonData = await response.json();
            console.log("Zzzz");
            console.log(jsonData);

            // Assuming jsonData contains 'events' and 'exactly'
            return {
                events: jsonData.events as EventsType[],
                exactly: jsonData.exactly as any // Replace 'boolean' with the actual type of 'exactly'
            };
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    };

    // Now using SWR hook with updated type
    const { data, error, isValidating: isLoading } = useSWR<ResponseType | null>(
        [url, page, query], // Dependencies for re-fetching
        fetchData, // Reference to fetchData
        { shouldRetryOnError: false, revalidateOnFocus: false }
    );



    // Update allEvents when new data is fetched
    useEffect(() => {
        if (data) {
            setAllEvents(prevEvents => [...prevEvents, ...data.events]);
        }
    }, [data]);

    const reset = () => {
        setAllEvents([])

    }
    const fetchMore = (): void => {
        setPage(prevPage => prevPage + 1);
    };

    return { events: allEvents, data, isLoading, error, fetchMore, reset };
};





export const useOnboarding = () => {
    console.log("GETTING EVENTS")


    const url = global_app + `/api/data/onboarding`

    const searchParams = new URLSearchParams();

    const { data, error, isLoading, mutate } = useSWR(
        `${url}`,
        fetcher,
        { keepPreviousData: true }
    );
    let onboardingEvents = null

    if (data) {
        onboardingEvents = JSON.parse(data)
    }


    return { data, onboardingEvents, error, isLoading, mutate };
};




