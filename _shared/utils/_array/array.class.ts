import { IArrayUtils } from "./array.interface";

export class ArrayUtils implements IArrayUtils {
    hasDuplicate<T>(array: T[]) {
        return new Set(array).size !== array.length
    }
}