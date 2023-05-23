import { Inter } from 'next/font/google'
import Login from '@/app/components/client/next-auth/Login'
import { SignModel } from 'arch'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/v1/auth/[...nextauth]/route'


// import { helloEndpoint } from './api/hello/route'
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) redirect('/caregivers')
  // const test = await helloEndpoint.get()
  const SignForm = () => new SignModel({} as SignModel).render('pathed-translated')
  return (
    <main className="w-full h-full flex flex-col grow items-center justify-between">
      <div className='h-full flex items-center justify-between'>
        <Login>
          <SignForm />
        </Login>
      </div>
    </main>
  )
}
