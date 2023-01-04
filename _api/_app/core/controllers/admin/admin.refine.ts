import type { TMethodsRefine } from "models";
import type { ObjectUtils } from "utils";
import { IAdminControllerMethods } from "./admin.interface";

export class AdminControllerRefine implements TMethodsRefine<IAdminControllerMethods> {
    objectUtils: ObjectUtils

    constructor({ objectUtils }: { objectUtils: ObjectUtils }) {
        this.objectUtils = objectUtils
    }

    async login(data: Parameters<TMethodsRefine<IAdminControllerMethods>['login']>[0]) {
        const { Profile, Admin } = data
        return Promise.all([
            Profile.Person ? this.objectUtils.exclude({ model: Profile.Person, keys: ['id'] }) : null,
            Profile.Address ? this.objectUtils.exclude({ model: Profile.Address, keys: ['personId'] }) : null,
            Profile.Body ? this.objectUtils.exclude({ model: Profile.Body, keys: ['personId'] }) : null,
            Promise.all(Profile.BankAccounts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            Promise.all(Profile.Observations.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            Promise.all(Profile.Contacts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
            this.objectUtils.exclude({ model: Admin, keys: ['credentialId'] })
        ])
            .then(([Person, Address, Body, BankAccounts, Observations, Contacts, Admin]) => ({
                Profile: { Person, Address, Body, BankAccounts, Observations, Contacts },
                Admin: Admin
            }))
    };
    async register({ Profile, Admin }: Parameters<TMethodsRefine<IAdminControllerMethods>['register']>[0]) {
        try {
            return await Promise.all([
                this.objectUtils.exclude({ model: Profile.Person, keys: ['id'] }),
                this.objectUtils.exclude({ model: Profile.Address, keys: ['personId'] }),
                this.objectUtils.exclude({ model: Profile.Body, keys: ['personId'] }),
                Promise.all(Profile.BankAccounts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
                Promise.all(Profile.Observations.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
                Promise.all(Profile.Contacts.map(async (item) => this.objectUtils.exclude({ model: item, keys: ['personId'] }))),
                this.objectUtils.exclude({ model: Admin, keys: ['credentialId'] })
            ])
                .then(([Person, Address, Body, BankAccounts, Observations, Contacts, Admin]) => ({
                    Profile: { Person, Address, Body, BankAccounts, Observations, Contacts },
                    Admin: Admin
                }))
        } catch (e) {
            throw e
        }
    };
}