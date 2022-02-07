import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
    log(): void{
        console.log("TestService");
    }
}
