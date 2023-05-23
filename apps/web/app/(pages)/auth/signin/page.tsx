import Login from '@/app/components/client/next-auth/Login'
import { SignModel } from 'arch'

export default async function SignIn() {
    const SignForm = () => new SignModel({} as SignModel).render('pathed-translated')
    return (<Login>
        <SignForm />
    </Login>)
}