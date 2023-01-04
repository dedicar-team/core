export type IGenericLog<U, T = {}> = {
    requestId: string | null
    emmiterId: string | null
    log: U
    date: number
    duration: number
} & T