import Image from 'next/image'
import {
    availableTimeScale as TIME_SCALE,
    diseaseExperience as DISEASE,
    faultingMap as FAULTING,
    occupationStatus as OCCUPATION_STATUS,
    civilStatus as CIVIL_STATUS,
    passed_interview as PASSED_INTERVIEW
} from 'arch'
import DocumentViewer from '../../../client/DocumentViewer'

export const MinimalistCard = ({ data }) => {
    const {
        _id: id,
        Person: {
            name,
            photo,
            birthDate,
            sex,
            Body: { weight, height, mannequinn },
            Address: { street, neighbourhood, complement, city, state, zipCode },
            Credential: { CPF, RG },
            Contact,
            Bank,
        },
        Worker: { pis, smoker, allergic, dependents, occupationStatus, civilStatus, uniqueTicket },
        availableTimeScale,
        diseaseExperience,
        documents,
        faulting,
        observation,
        document_analyzed,
        passed_interview
    } = data;

    return data && (
        <div className="w-full sm:max-w-sm bg-white dark:bg-[#333333] rounded shadow-lg divide-y divide-[#666666]">
            <div className="px-6 py-4">
                <h2 className="text-2xl mb-2">{name}</h2>
                <p className="text-sm">ID: {id}</p>
            </div>
            <div className="px-6 py-4 flex items-center">
                {photo && <Image src={photo} width={100} height={200} alt={name} className=" rounded mr-4" />}
                <div>
                    <p>Nascimento: {new Date(birthDate).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
                    <p>Idade: {Math.floor((new Date().getTime() - new Date(birthDate).getTime()) / (1000 * 60 * 60 * 24 * 365.25))} anos</p>
                    <p>Sexo: {sex}</p>
                    <p>
                        {weight ? `Peso: ${weight} kg` : '[Peso: ---]'} | {height ? `Altura ${height} m` : '[Altura: ---]'}
                    </p>
                    <p>Mannequin: {mannequinn}</p>
                </div>
            </div>
            <div className="px-6 py-4">
                <p className="font-bold mb-2">Endereço:</p>
                <p>{street ? street : '[Rua: ---]'}, {neighbourhood ? neighbourhood : '[Bairro: ---]'}</p>
                <p>{complement ? `Complemento: ${complement}` : '[Complemento: ---]'}</p>
                <p>{city ? city : '[Cidade: ---]'}, {state} - {zipCode ? zipCode : '[CEP: ---]'}</p>
            </div>
            <div className="px-6 py-4">
                <p className="font-bold mb-2">Credenciais:</p>
                <p>CPF: {CPF}</p>
                <p>RG: {RG}</p>
            </div>
            <div className="px-6 py-4">
                <p className="font-bold mb-2">Contato:</p>
                {(Contact && Contact.length > 0) ? Contact.map((contact, index) => (
                    <div key={index}>
                        <p>Celular: {contact.cellphone}</p>
                        <p>Telefone: {contact.telephone}</p>
                        <p>Email: {contact.email}</p>
                    </div>
                )) : "[Contatos: ---]"}
            </div>
            <div className="px-6 py-4">
                <p className="font-bold mb-2">Contas bancárias:</p>
                {(Bank && Bank.length > 0) ? Bank.map((bank, index) => (
                    <div key={index}>
                        <p>Tipo: {bank.type}</p>
                        <p>Nome: {bank.name}</p>
                        <p>Agência: {bank.agency}</p>
                        <p>Conta: {bank.account}</p>
                        <p>Dígito: {bank.digit}</p>
                    </div>
                )) : "---"}
            </div>
            <div className="px-6 py-4">
                <p className="font-bold mb-2">Informações de trabalho:</p>
                <p>{pis ? `PIS: ${pis}` : '[PIS: ---]'}</p>
                <p>Fumante: {smoker ? 'sim' : 'não'}</p>
                <p>Alergias: {allergic ? allergic : 'não'}</p>
                <p>Dependentes (-14 anos): {dependents}</p>
                <p>Status trabalhista: {OCCUPATION_STATUS[OCCUPATION_STATUS.findIndex((item) => item.value == occupationStatus)].label}</p>
                <p>Status civil: {CIVIL_STATUS[CIVIL_STATUS.findIndex((item) => item.value == civilStatus)].label}</p>
                <p>{uniqueTicket ? `Bilhete único: ${uniqueTicket}` : '[Bilhete único: ---]'}</p>
            </div>
            <div className="px-6 py-4">
                <p className="font-bold mb-2">Escalas de trabalho favoritas:</p>
                {(availableTimeScale && availableTimeScale.length > 0) ? availableTimeScale.map((timeScale, index) => (
                    <p key={index}>{TIME_SCALE[TIME_SCALE.findIndex((item) => item.value === timeScale)].label}</p>
                )) : '---'}
            </div>
            <div className="px-6 py-4">
                <p className="font-bold mb-2">Experiência com doenças:</p>
                {diseaseExperience && diseaseExperience.length > 0 ? diseaseExperience.map((disease, index) => (
                    <p key={index}>{DISEASE[DISEASE.findIndex((item) => item.value === disease)].label}</p>
                )) : '---'}
            </div>
            <div className="px-6 py-4">
                <p className="font-bold mb-2">Documentos:</p>
                <DocumentViewer document={documents} />
                {document_analyzed == 'yes' ?
                    (faulting && faulting.length > 0) ? <p>
                        pendências: {faulting.map((fault, index) => (
                            <p key={index}>{FAULTING[FAULTING.findIndex((item) => item.value === fault)].label}</p>
                        ))}
                    </p> : <p className='mt-1 text-xs'>status da documentação: analisado / em dia</p> :
                    <p className='mt-1 text-xs'>status da documentação: análise em triagem</p>
                }
            </div>
            <div className="px-6 py-4">
                <p className="font-bold mb-2">Resultado da entrevista:</p>
                {PASSED_INTERVIEW[PASSED_INTERVIEW.findIndex((item) => item.value === passed_interview)]?.label || '---'}
            </div>
            <div className="px-6 py-4">
                <p className="font-bold mb-2">Observações:</p>
                {observation ? observation : '---'}
            </div>
        </div>
    );
};