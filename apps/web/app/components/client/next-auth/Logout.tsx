"use client"
import { signOut } from 'next-auth/react'

function Logout() {
    return <button className='w-full text-black font-bold rounded px-2 py-[5px] bg-blue-500' onClick={async (e) => {
        e.preventDefault()
        await signOut({ callbackUrl: '/' })
    }}>Sair</button>
}

export default Logout