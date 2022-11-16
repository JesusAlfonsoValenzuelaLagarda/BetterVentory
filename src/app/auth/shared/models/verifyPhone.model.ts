export interface VerifyPhone{
    phone: string;
    valid: boolean;
    format:[international:string, local:string];
    country:[code:string, name:string, prefix:string];
    location:string;
    type:string;
    carrier:string;
}