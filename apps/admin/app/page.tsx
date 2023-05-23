import { Inter } from 'next/font/google'
import SignForm from './components/server/sign/create'

// import { helloEndpoint } from './api/hello/route'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  // const test = await helloEndpoint.get()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* @ts-expect-error Async Server Component */}
      <SignForm title='Formulário para registro de usuário:' className='w-full p-4' />
    </main>
  )
}
