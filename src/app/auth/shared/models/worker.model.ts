import { WorkerStatus } from "../enums/worker-status.enum";
import { Role } from "../enums/worker-role.enum";

export interface Worker{
    workerId: string;
    name?: string;
    email:string;
    password:string;
    status?:WorkerStatus | string;
    cellphone?: string;
    role?:Role | string;
}