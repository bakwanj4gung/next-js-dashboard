'use client'

import React, { useEffect } from 'react'

export default function Error({
    
    error, reset
} : {
    error: Error & { digest?: string };
    reset: () => void;
}) {

    useEffect(() => {
        console.error(error);
    }, [error]);


    return (
        <main className="flex h-full flex-col justify-center items-center">
            <h2 className="text-center">Something went wrong!</h2>
            <button onClick={ () => reset() } className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400">
                Try Again
            </button>
        </main>
    )
}
