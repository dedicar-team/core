export interface IStringUtils {
    generateRandom: ({ length, chars }: {
        length: number;
        chars: string;
    }) => string
}