export * from './controllers/_controller.module'
export * from './services/_service.module'

import { AdminService, CaregiverService, CostumerService, PasswordService } from './services/_service.module'
import {
    // RegisterController, RegisterControllerRefine, LoginController, zodLoginController, zodRegisterController, LoginControllerRefine, 
    AdminController, CaregiverController, CostumerController, zodAdminController, zodCaregiverController, zodCostumerController, AdminControllerRefine, CaregiverControllerRefine, CostumerControllerRefine
} from './controllers/_controller.module'
import { prismaClient, prismaRepository, passwordMongoose } from '@data'
import { bcryptAdapter } from 'adapters'
import { objectUtils } from 'utils'

export const [adminService, caregiverService, costumerService, passwordService, refineAdminController, refineCaregiverController, refineCostumerController,
    // registerControllerRefine, loginControllerRefine
] = await Promise.all([
    (async () => new AdminService({ prismaClient, prismaRepository }))(),
    (async () => new CaregiverService({ prismaClient, prismaRepository }))(),
    (async () => new CostumerService({ prismaClient, prismaRepository }))(),
    (async () => new PasswordService({ bcryptAdapter, passwordMongoose }))(),
    (async () => new AdminControllerRefine({ objectUtils }))(),
    (async () => new CaregiverControllerRefine({ objectUtils }))(),
    (async () => new CostumerControllerRefine({ objectUtils }))(),
    // (async () => new RegisterControllerRefine({ objectUtils }))(),
    // (async () => new LoginControllerRefine({ objectUtils }))(),
])

export const [
    adminController,
    caregiverController,
    costumerController
    // loginController, registerController
] = await Promise.all([
    (async () => new AdminController({
        adminService,
        prismaClient,
        passwordService,
        zod: zodAdminController,
        refine: refineAdminController
    }))(),
    (async () => new CaregiverController({
        caregiverService,
        prismaClient,
        passwordService,
        zod: zodCaregiverController,
        refine: refineCaregiverController
    }))(),
    (async () => new CostumerController({
        costumerService,
        prismaClient,
        passwordService,
        zod: zodCostumerController,
        refine: refineCostumerController
    }))(),
    // (async () => new LoginController({
    //     adminService,
    //     caregiverService,
    //     costumerService,
    //     prismaClient,
    //     passwordService,
    //     zod: zodLoginController,
    //     refine: loginControllerRefine
    // }))(),
    // (async () => new RegisterController({
    //     adminService,
    //     caregiverService,
    //     costumerService,
    //     passwordService,
    //     zod: zodRegisterController,
    //     refine: registerControllerRefine
    // }))(),
])