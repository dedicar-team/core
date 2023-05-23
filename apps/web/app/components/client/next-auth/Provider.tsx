'use client'
import { SessionProvider } from 'next-auth/react'

const Provider = ({ children, session }: { children: React.ReactNode, session: any }) => {
    return <SessionProvider session={session} basePath='/api/v1/auth'>{children}</SessionProvider>
}

export default Provider