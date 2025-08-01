"use client"

import { useTRPC } from '@/trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query'
import React from 'react'

function Client() {
    const trpc = useTRPC()
    const { data } = useSuspenseQuery(trpc.createAI.queryOptions({ text: "Antonio" }))
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default Client