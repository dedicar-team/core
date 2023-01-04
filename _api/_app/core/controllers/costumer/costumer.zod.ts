import type { ICostumerController } from './costumer.interface';

import { z } from 'zod'
import { SEX, WEIGHT, HEIGHT, MANNEQUINN, BANK_ACCOUNT_TYPE, CONTACT_TYPE, TIME_SCALE, DISEASE } from '@data';
import { objectKeys } from 'ts-extras';

export const zodCostumerController: ICostumerController['zod'] = {
    login: z.object({
        email: z.string(),
        password: z.string(),
    }),
    register: z.object({
        Profile: z.object({
            Person: z.object({
                name: z.string(),
                birthDate: z.union([z.string(), z.date()]),
                sex: z.enum<SEX, [SEX, ...SEX[]]>(objectKeys(SEX) as [SEX, ...SEX[]]),
                photo: z.string().optional(),
                archive: z.string().optional(),
            }),
            Body: z.object({
                weight: z.enum<WEIGHT, [WEIGHT, ...WEIGHT[]]>(objectKeys(WEIGHT) as [WEIGHT, ...WEIGHT[]]),
                height: z.enum<HEIGHT, [HEIGHT, ...HEIGHT[]]>(objectKeys(HEIGHT) as [HEIGHT, ...HEIGHT[]]),
                mannequinn: z.enum<MANNEQUINN, [MANNEQUINN, ...MANNEQUINN[]]>(objectKeys(MANNEQUINN) as [MANNEQUINN, ...MANNEQUINN[]]),
            }).optional(),
            Address: z.object({
                number: z.string(),
                publicPlace: z.string(),
                district: z.string(),
                city: z.string(),
                CEP: z.string(),
                complement: z.string().optional()
            }),
            BankAccounts: z.object({
                type: z.enum<BANK_ACCOUNT_TYPE, [BANK_ACCOUNT_TYPE, ...BANK_ACCOUNT_TYPE[]]>(objectKeys(BANK_ACCOUNT_TYPE) as [BANK_ACCOUNT_TYPE, ...BANK_ACCOUNT_TYPE[]]),
                name: z.string(),
                agency: z.string(),
                account: z.string(),
                digit: z.string()
            }).array().nonempty(),
            Contacts: z.object({
                data: z.string(),
                type: z.enum<CONTACT_TYPE, [CONTACT_TYPE, ...CONTACT_TYPE[]]>(objectKeys(CONTACT_TYPE) as [CONTACT_TYPE, ...CONTACT_TYPE[]]),
                observation: z.string().optional(),
            }).array().nonempty(),
            Observations: z.object({
                title: z.string(),
                text: z.string(),
            }).array().optional(),
            Credential: z.object({
                email: z.string(),
                password: z.string().or(z.undefined()),
                CPF: z.string(),
                RG: z.string(),
            }).optional()
        }),
        Costumer: z.object({
            favoriteScales: z.enum<TIME_SCALE, [TIME_SCALE, ...TIME_SCALE[]]>(objectKeys(TIME_SCALE) as [TIME_SCALE, ...TIME_SCALE[]]).array(),
        }),
        ImPatient: z.object({
            diseases: z.enum<DISEASE, [DISEASE, ...DISEASE[]]>(objectKeys(DISEASE) as [DISEASE, ...DISEASE[]]).array(),
        }).partial(),
        Patients: z.object({
            Profile: z.object({
                Person: z.object({
                    name: z.string(),
                    birthDate: z.union([z.string(), z.date()]),
                    sex: z.enum<SEX, [SEX, ...SEX[]]>(objectKeys(SEX) as [SEX, ...SEX[]]),
                    photo: z.string().optional(),
                    archive: z.string().optional(),
                }),
                Body: z.object({
                    weight: z.enum<WEIGHT, [WEIGHT, ...WEIGHT[]]>(objectKeys(WEIGHT) as [WEIGHT, ...WEIGHT[]]),
                    height: z.enum<HEIGHT, [HEIGHT, ...HEIGHT[]]>(objectKeys(HEIGHT) as [HEIGHT, ...HEIGHT[]]),
                    mannequinn: z.enum<MANNEQUINN, [MANNEQUINN, ...MANNEQUINN[]]>(objectKeys(MANNEQUINN) as [MANNEQUINN, ...MANNEQUINN[]]),
                }),
                Address: z.object({
                    number: z.string(),
                    publicPlace: z.string(),
                    district: z.string(),
                    city: z.string(),
                    CEP: z.string(),
                    complement: z.string().optional()
                }),
                Contacts: z.object({
                    data: z.string(),
                    type: z.enum<CONTACT_TYPE, [CONTACT_TYPE, ...CONTACT_TYPE[]]>(objectKeys(CONTACT_TYPE) as [CONTACT_TYPE, ...CONTACT_TYPE[]]),
                    observation: z.string().optional(),
                }).array().optional(),
                Observations: z.object({
                    title: z.string(),
                    text: z.string(),
                }).array().optional(),
            }),
            Patient: z.object({
                diseases: z.enum<DISEASE, [DISEASE, ...DISEASE[]]>(objectKeys(DISEASE) as [DISEASE, ...DISEASE[]]).array(),
            })
        }).array()
    }),
}