import type { TMethodsRefine } from "models";
import type { ObjectUtils } from "utils";
import { ICaregiverControllerMethods } from "./caregiver.interface";

export class CaregiverControllerRefine implements TMethodsRefine<ICaregiverControllerMethods> {
    objectUtils: ObjectUtils

    constructor({ objectUtils }: { objectUtils: ObjectUtils }) {
        this.objectUtils = objectUtils
    }

    async login(data: Parameters<TMethodsRefine<ICaregiverControllerMethods>['login']>[0]) {
        const { Profile, Worker, Caregiver } = data
        return Promise.all([
            Profile.Person ? this.objectUtils.exclude({ model: Profile.Person, keys: ['id'] }) : null,
            Profile.Address ? this.objectUtils.exclude({ model: Profile.Address, keys: ['personId'] }) : null,
            Profile.Body ? this.objectUtils.exclude({ model: Profile.Body, keys: ['personId'] }) : null,
            Promise.all(Profile.BankAccounts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            Promise.all(Profile.Observations.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            Promise.all(Profile.Contacts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            this.objectUtils.exclude({ model: Worker, keys: ['credentialId', 'PIS'] }),
            this.objectUtils.exclude({ model: Caregiver, keys: ['workerId', 'uniqueTicket'] }),
        ])
            .then(([Person, Address, Body, BankAccounts, Observations, Contacts, Worker, Caregiver]) => ({
                Profile: { Person, Address, Body, BankAccounts, Observations, Contacts },
                Caregiver: { Common: { ...Worker, ...Caregiver } }
            }))
    }
    async register({ Profile, Worker, Caregiver }: Parameters<TMethodsRefine<ICaregiverControllerMethods>['register']>[0]) {
        try {
            return Promise.all([
                this.objectUtils.exclude({ model: Profile.Person, keys: ['id'] }),
                this.objectUtils.exclude({ model: Profile.Address, keys: ['personId'] }),
                this.objectUtils.exclude({ model: Profile.Body, keys: ['personId'] }),
                Promise.all(Profile.BankAccounts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
                Promise.all(Profile.Observations.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
                Promise.all(Profile.Contacts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
                this.objectUtils.exclude({ model: Worker, keys: ['credentialId', 'PIS'] }),
                this.objectUtils.exclude({ model: Caregiver, keys: ['workerId', 'uniqueTicket'] }),
            ])
                .then(([Person, Address, Body, BankAccounts, Observations, Contacts, Worker, Caregiver]) => ({
                    Profile: { Person, Address, Body, BankAccounts, Observations, Contacts },
                    Worker: Worker,
                    Caregiver: Caregiver
                }))
        } catch (e) {
            throw e
        }
    }
}