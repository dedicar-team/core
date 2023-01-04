import { CaregiverService } from "_app/_app.module";
import { IEntity, TController } from 'models'

export interface ICaregiverControllerMethods extends IEntity {
    login: (data: { email: string, password: string }) => Promise<Awaited<ReturnType<CaregiverService['get']>>>
    register: (data: Parameters<CaregiverService['save']>[0] & { Profile: { Credential?: { password?: string } } }) => ReturnType<CaregiverService['save']>
}

export interface ICaregiverController extends TController<ICaregiverControllerMethods> { }