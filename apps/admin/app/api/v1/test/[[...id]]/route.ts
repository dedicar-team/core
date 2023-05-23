import { NextResponse } from 'next/server';

export const GET = async (request: Request, { params }: { params: { id: [string] } }) => {
    return NextResponse.json({ params })
}
export const POST = async (request: Request, { params }: { params: { id: [string] } }) => {
    return NextResponse.json(await request.json())
}
export const PUT = async (request: Request, { params }: { params: { id: [string] } }) => {
    const body = await request.json()
    return NextResponse.json({ body, params })
}
export const DELETE = async (request: Request, { params }: { params: { id: [string] } }) => {
    return NextResponse.json({ params })
}

// helloEndpoint.get('/:id')
// helloEndpoint.post('/', {})
// helloEndpoint.put('/:id', { Person: {} })
// helloEndpoint.delete('/:id')