import { SignModel, connectToDatabase, signRepository, getFormData } from 'arch'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation';
import SignMap from './read'

const A = async () => {
    return new SignModel({} as SignModel).render('pathed-translated')
}

async function submit(formData: FormData) {
    "use server"
    let result: SignModel
    try {
        const [form, salt] = await Promise.all([
            getFormData(SignModel, formData) as unknown as SignModel,
            bcrypt.genSalt(10),
            connectToDatabase({ maxPoolSize: 1 })
        ])
        form.password = await bcrypt.hash(form.password, salt)
        result = await signRepository.save(form)
    } catch (error) {
        console.log(error)
    }
    result ? redirect('/') : null
}

async function SignForm(props: React.HTMLAttributes<HTMLDivElement> & { title: string }) {
    await connectToDatabase({ maxPoolSize: 1 })
    const list = await signRepository.findAll()

    return <><div {...props}>
        {/* {JSON.stringify(a.__form_input_decorator_jsx_pathed_translated__)} */}
        <h1 className='text-2xl mb-4 text-bold'>{props.title}</h1>
        {/* <pre style={{ whiteSpace: 'pre' }}>{JSON.stringify(new CaregiverModel({} as Caregiver), null, 4)}</pre> */}
        <form action={submit} className='mb-4'>
            {/* @ts-expect-error Async Server Component */}
            <A />
            <button type='submit' className='w-full text-black font-bold rounded px-2 py-[5px] bg-green-500'>ENVIAR</button>
        </form>
        {/* @ts-expect-error Async Server Component */}
        <div className='flex flex-row gap-4 flex-wrap'>{(list !== undefined && list?.length > 0) && <SignMap list={list} />}</div>
    </div></>
}

export default SignForm
