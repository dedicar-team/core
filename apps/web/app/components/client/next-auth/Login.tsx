"use client"
import { signIn } from "next-auth/react"

export default function LoginForm({ children }: { children: React.ReactNode }) {

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        await signIn("credentials", {
            login: e.target[0].value,
            password: e.target[1].value,
            redirect: true,
            callbackUrl: 'http://localhost:3002/caregivers',

        })
    }
    return (
        <form onSubmit={onSubmit}>
            {children}
            <button type='submit' className='w-full text-black font-bold rounded px-2 py-[5px] bg-green-500'>Login</button>
        </form>
    )
}