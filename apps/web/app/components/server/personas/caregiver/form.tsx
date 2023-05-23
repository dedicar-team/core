import { CaregiverModel, connectToDatabase, caregiverRepository, getFormData } from 'arch';
import { redirect } from 'next/navigation';
import { MinimalistCard } from './view';

const A = async () => {
    return new CaregiverModel({} as CaregiverModel).render('pathed-translated')
}

async function submit(formData: FormData) {
    "use server"
    let result
    try {
        const connection = await connectToDatabase()
        const form = await getFormData(CaregiverModel, formData)
        form.Person.Bank.type == 'NONE' ? form.Person.Bank = undefined : null
        result = await caregiverRepository.save(form as CaregiverModel);
        connection && await connection.close()
    } catch (error) {
        console.log(error)
    }
    result && redirect('/caregivers')
}
async function CaregiverForm(props: React.HTMLAttributes<HTMLDivElement> & { title: string, description?: string }) {
    await connectToDatabase()
    const list = await caregiverRepository.findAll()

    return <div {...props}>
        {/* {JSON.stringify(a.__form_input_decorator_jsx_pathed_translated__)} */}
        <h1 className='text-2xl text-bold'>{props.title}</h1>
        {props.description && <p className='text-xs mb-4'>{props.description}</p>}
        {/* <pre style={{ whiteSpace: 'pre' }}>{JSON.stringify(new CaregiverModel({} as Caregiver), null, 4)}</pre> */}
        <form action={submit} className='mb-4'>
            {/* @ts-expect-error Async Server Component */}
            <A />
            <button type='submit' className='w-full text-black font-bold rounded px-2 py-[5px] bg-green-500'>ENVIAR</button>
        </form>
        <div className='flex flex-row gap-4 flex-wrap'> {(list && Array.isArray(list) && list?.length > 0) && list.map(item => MinimalistCard({ data: item }))}</div>
    </div>
}

export default CaregiverForm
