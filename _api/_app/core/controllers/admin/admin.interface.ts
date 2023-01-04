import { AdminService, } from "_app/_app.module";
import { IEntity, TController } from 'models'

export interface IAdminControllerMethods extends IEntity {
    login: (data: { email: string, password: string }) => Promise<Awaited<ReturnType<AdminService['get']>>>
    register: (data: Parameters<AdminService['save']>[0] & { Profile: { Credential: { password: string } } }) => ReturnType<AdminService['save']>
}

export interface IAdminController extends TController<IAdminControllerMethods> { }