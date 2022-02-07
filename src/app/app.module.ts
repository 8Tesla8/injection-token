import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerComponent } from './components/logger.component';
import { BooleanServiceToken, FalseBooleanService, TrueBooleanService } from './services/boolean.service';
import { ErrorLoggerService, InformationLoggerService, LoggerServiceToken } from './services/logger.service';
import { TestService } from './services/test.service';
import { ValueToken } from './value.token';

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: LoggerServiceToken, useClass: InformationLoggerService, multi: true },
    { provide: LoggerServiceToken, useClass: ErrorLoggerService, multi: true },    

    { provide: ValueToken, useValue: 'This is value token sting'},


    TestService, // converting to this {provide: TestService, useClass: TestService },
    //{provide: TestService, useClass: TestService }, //equal to TestService

    
    {
      provide: BooleanServiceToken,
      useFactory: () => {
        if (environment.production) {
          return new TrueBooleanService();
        } else {
          return new FalseBooleanService();
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
