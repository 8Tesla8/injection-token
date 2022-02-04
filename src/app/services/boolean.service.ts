import { InjectionToken } from "@angular/core";

export const BooleanServiceToken = new InjectionToken<IBooleanService>(
    'IBooleanService injection token'
);

export interface IBooleanService{
    getValue():boolean;
}

export class TrueBooleanService implements IBooleanService{
    getValue(): boolean {
        return true;
    }
}

export class FalseBooleanService implements IBooleanService{
    getValue(): boolean {
        return false;
    }
}