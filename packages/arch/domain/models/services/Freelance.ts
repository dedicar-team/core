import { IRepository, TypegooseRepository } from "../../../infrastructure/repository";
import { ReturnModelType, prop } from "@typegoose/typegoose";

export class Freelance {
    constructor(freelance: {}) {
    }
}

export class FreelanceModel extends Freelance {
    constructor(freelance: {}) {
        super(freelance)
    }
}

export class FreelanceRepository extends TypegooseRepository<FreelanceModel> implements IRepository {
    constructor(freelanceModel: ReturnModelType<typeof FreelanceModel>) {
        super(freelanceModel)
    }
}