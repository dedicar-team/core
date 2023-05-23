import { IRepository, TypegooseRepository } from "../../../infrastructure/repository";
import { ReturnModelType, prop } from "@typegoose/typegoose";

export class Contract {
    constructor(contract: {}) {
    }
}

export class ContractModel extends Contract {
    constructor(contract: {}) {
        super(contract)
    }
}

export class ContractRepository extends TypegooseRepository<ContractModel> implements IRepository {
    constructor(contractModel: ReturnModelType<typeof ContractModel>) {
        super(contractModel)
    }
}