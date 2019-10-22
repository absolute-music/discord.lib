declare module "dbjs" {
    export default function dbjs(input: string, options?: HasteBinOptions): Promise<string>;

    export interface dbjsOptions {
        token?: string;
        extension?: string;
    };
}
