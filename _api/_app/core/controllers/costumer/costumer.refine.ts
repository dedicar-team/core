import type { TMethodsRefine } from "models";
import type { ObjectUtils } from "utils";
import { ICostumerControllerMethods } from "./costumer.interface";

export class CostumerControllerRefine implements TMethodsRefine<ICostumerControllerMethods> {
    objectUtils: ObjectUtils

    constructor({ objectUtils }: { objectUtils: ObjectUtils }) {
        this.objectUtils = objectUtils
    }

    async login(data: Parameters<TMethodsRefine<ICostumerControllerMethods>['login']>[0]) {
        const { Profile, Costumer, Contracts } = data
        return Promise.all([
            Profile.Person ? this.objectUtils.exclude({ model: Profile.Person, keys: ['id'] }) : null,
            Profile.Address ? this.objectUtils.exclude({ model: Profile.Address, keys: ['personId'] }) : null,
            Promise.all(Profile.BankAccounts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            Promise.all(Profile.Observations.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            Promise.all(Profile.Contacts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            this.objectUtils.exclude({ model: Costumer, keys: ['credentialId'] }),
            // Promise.all(Patients.map(({ Profile, Patient }) => Promise.all([
            //     Profile.Person ? this.objectUtils.exclude({ model: Profile.Person, keys: ['id'] }) : null,
            //     Profile.Address ? this.objectUtils.exclude({ model: Profile.Address, keys: ['personId'] }) : null,
            //     Profile.Body ? this.objectUtils.exclude({ model: Profile.Body, keys: ['personId'] }) : null,
            //     Promise.all(Profile.BankAccounts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            //     Promise.all(Profile.Observations.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            //     Promise.all(Profile.Contacts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            //     this.objectUtils.exclude({ model: Patient, keys: ['personId', 'contractId', 'costumerId'] })
            // ])
            //     .then(([Person, Address, Body, BankAccounts, Observations, Contacts, Patient]) => ({
            //         Profile: { Person, Address, Body, BankAccounts, Observations, Contacts },
            //         Patient: { Common: Patient }
            //     }))
            // ))
        ])
            .then(([Person, Address, Body, BankAccounts, Observations, Contacts,
                // Costumer, Patients
            ]) => ({
                Profile: { Person, Address, Body, BankAccounts, Observations, Contacts },
                Costumer: {
                    Common:
                        Costumer,
                    // Patients 
                }
            }))
    }
    async register({ Profile, Costumer, Patients }: Parameters<TMethodsRefine<ICostumerControllerMethods>['register']>[0]) {
        try {
            return Promise.all([
                this.objectUtils.exclude({ model: Profile.Person, keys: ['id'] }),
                this.objectUtils.exclude({ model: Profile.Address, keys: ['personId'] }),
                this.objectUtils.exclude({ model: Profile.Body, keys: ['personId'] }),
                Promise.all(Profile.BankAccounts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
                Promise.all(Profile.Observations.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
                Promise.all(Profile.Contacts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
                this.objectUtils.exclude({ model: Costumer, keys: ['credentialId'] }),
                Promise.all(Patients.map(async ({ Profile, Patient }) => {
                    const [Person, Address, Body, BankAccounts, Observations, Contacts, Patient_1] = await Promise.all([
                        this.objectUtils.exclude({ model: Profile.Person, keys: ['id'] }),
                        this.objectUtils.exclude({ model: Profile.Address, keys: ['personId'] }),
                        this.objectUtils.exclude({ model: Profile.Body, keys: ['personId'] }),
                        Promise.all(Profile.BankAccounts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
                        Promise.all(Profile.Observations.map(async (item_1) => this.objectUtils.exclude({ model: item_1, keys: ['personId'] }))),
                        Promise.all(Profile.Contacts.map(async (item_2) => this.objectUtils.exclude({ model: item_2, keys: ['personId'] }))),
                        this.objectUtils.exclude({ model: Patient, keys: ['personId', 'contractId', 'costumerId'] })
                    ]);
                    return ({
                        Profile: { Person, Address, Body, BankAccounts, Observations, Contacts },
                        Patient: Patient_1
                    });
                }
                ))
            ])
                .then(([Person, Address, Body, BankAccounts, Observations, Contacts, Costumer, Patients]) => ({
                    Profile: { Person, Address, Body, BankAccounts, Observations, Contacts },
                    Costumer: Costumer,
                    Patients: Patients
                }))
        } catch (e) {
            throw e
        }
    }
}