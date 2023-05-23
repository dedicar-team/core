import { Suspense } from 'react'
// import Test from '@/app/components/server/test'

export default async function Lul() {
  return (<div>
    <div>isso é um teste</div>
    <Suspense fallback={<>Loading...</>}>
      {/* <Test /> */}
    </Suspense>
  </div>)
}