import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const pathParts = pathname.split('/');

    async function checkPathParts(startWith: string, maxLength: number) {
        if (pathname.startsWith(startWith) && (pathParts && pathParts?.length > maxLength)) {
            return new NextResponse(undefined, { status: 404 })
        }
        Promise.reject()
    }

    const check = await Promise.any([
        checkPathParts('/api/v1/personas/caregivers', 6),
        checkPathParts('/api/v1/personas/customers', 6),
        checkPathParts('/api/v1/test', 5)
    ])

    return check ? check : undefined
}