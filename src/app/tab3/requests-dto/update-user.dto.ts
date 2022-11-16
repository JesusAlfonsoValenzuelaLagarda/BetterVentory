import { Role } from "../../auth/shared/enums/worker-role.enum";
import { WorkerStatus } from "../../auth/shared/enums/worker-status.enum";

export class UpdateUserDTO{
    workerId: string;
    name?: string;
    email:string;
    password:string;
    status?:WorkerStatus | string;
    cellphone?: string;
    role?:Role | string;
}