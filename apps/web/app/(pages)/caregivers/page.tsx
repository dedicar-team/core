import Caregivers from '@/app/components/server/personas/caregiver/form'
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/v1/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function Lul() {
  const session = await getServerSession(authOptions)
  if(!session) redirect('/')

  return (<main className="flex min-h-screen flex-col items-center justify-between">
    {/* @ts-expect-error Async Server Component */}
    <Caregivers title='Formulário para cadastro de cuidadoras:' description='campos marcados com * (asterisco) são obrigatórios' className='w-full p-4' />
  </main>)
}