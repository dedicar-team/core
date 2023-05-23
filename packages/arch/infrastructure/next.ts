import { NextResponse } from "next/server"
import { connectToDatabase } from "./mongoose"
import type { TypegooseRepository } from './repository';

export const genericNextTypegooseEndpoint = <T>(typegooseRepository: TypegooseRepository<T>) => ({
    GET: async (request: Request, { params }: { params: { id: [string] } }) => {
        await connectToDatabase()
        const result = await typegooseRepository.findById(params.id[0])
        return NextResponse.json(result)
    },
    POST: async (request: Request, { params }: { params: { id: [string] } }) => {
        await connectToDatabase()
        const result = await typegooseRepository.save(await request.json())
        return NextResponse.json(result)
    },
    PUT: async (request: Request, { params }: { params: { id: [string] } }) => {
        await connectToDatabase()
        const result = await typegooseRepository.updateById(params.id[0], await request.json())
        return NextResponse.json(result)
    },
    DELETE: async (request: Request, { params }: { params: { id: [string] } }) => {
        await connectToDatabase()
        const result = await typegooseRepository.deleteById(params.id[0])
        return NextResponse.json(result)
    }
})