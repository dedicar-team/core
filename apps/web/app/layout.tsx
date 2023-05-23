// import Theme from './components/client/theme'
import AuthProvider from '@/app/components/client/next-auth/Provider'
import './globals.css'
import { authOptions } from './api/v1/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import { cookies, headers } from 'next/headers'
import { getToken } from "next-auth/jwt"
import LogoutButton from '@/app/components/client/next-auth/Logout'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  const token = await getToken({
    req: {
      headers: Object.fromEntries(headers()),
      cookies: Object.fromEntries(cookies().getAll().map((c) => [c.name, c.value])),
    } as any,
  })
  // console.log({
  //   session,
  //   token
  // })
  return (
    <html lang='pt-br' className='dark'>
      <body className='h-[100vh] bg-white text-black dark:bg-[#111111] dark:text-white'>
        {/* <Theme> */}
        <AuthProvider session={session}>
          <div className='mt-4 mx-4'>{session && <LogoutButton />}</div>
          {children}
        </AuthProvider>
        {/* </Theme> */}
      </body>
    </html>
  );
}