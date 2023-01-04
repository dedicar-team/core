import { CostumerService } from "_app/_app.module";
import { IEntity, TController } from 'models'

export interface ICostumerControllerMethods extends IEntity {
    login: (data: { email: string, password: string }) => Promise<Awaited<ReturnType<CostumerService['get']>>>
    register: (data: Parameters<CostumerService['save']>[0] & { Profile: { Credential?: { password?: string } } }) => ReturnType<CostumerService['save']>
}

export interface ICostumerController extends TController<ICostumerControllerMethods> { }