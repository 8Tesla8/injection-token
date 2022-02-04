import { InjectionToken } from '@angular/core';

export const LoggerServiceToken = new InjectionToken<ILoggerService>(
    'ILoggerServiceToken injection token'
);

export interface ILoggerService {
    log(message:string): void;
}


export class ErrorLoggerService implements ILoggerService {
    log(message:string): void{
        console.error(`Error message: ${message}`);
    }
}

export class InformationLoggerService implements ILoggerService {
    log(message:string): void{
        console.log(`Information message: ${message}`);
    }
}
