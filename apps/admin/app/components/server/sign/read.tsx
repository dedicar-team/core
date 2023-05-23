import 'server-only'
import { connectToDatabase, signRepository } from 'arch'
import { redirect } from 'next/navigation';

async function SignRead({ data }) {
    const {
        _id,
        login,
        password
    } = data;
    const deleteSign = (_id: string) => async (formData: FormData) => {
        "use server"
        let result
        try {
            await connectToDatabase({ maxPoolSize: 1 })
            result = await signRepository.deleteById(_id)
        } catch (error) {
            console.log(error)
        }
        result == true && redirect('/')
    }

    return (
        <div className="w-full sm:max-w-sm bg-white dark:bg-[#333333] rounded shadow-lg divide-y divide-[#666666]">
            <div className="px-6 py-4">
                <h2 className="text-2xl mb-2">ID: {_id}</h2>
            </div>
            <div className="px-6 py-4 flex items-center">
                <div>
                    <p>login: {login}</p>
                    <p>password: {password}</p>
                </div>
            </div>
            <form className="px-6 py-4 flex items-center" action={deleteSign(_id)}>
                <button type='submit' className='w-full text-black font-bold rounded px-2 py-[5px] bg-red-500'>DELETAR</button>
            </form>
        </div>
    );
};

export default async function SignMap({ list }) {
    {/* @ts-expect-error Async Server Component */ }
    return <>{(Array.isArray(list) && list?.length > 0) && (list.map(item => (<SignRead key={item._id} data={item} />)))}</>
}