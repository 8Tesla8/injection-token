import { Component, Inject } from '@angular/core';
import { BooleanServiceToken, IBooleanService } from '../services/boolean.service';
import { ILoggerService, LoggerServiceToken } from '../services/logger.service';
import { ValueToken } from '../value.token';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent {
  constructor(
    @Inject(LoggerServiceToken)
    public readonly loggerService: ILoggerService[],
    @Inject(ValueToken)
    public readonly valueToken: string,
    @Inject(BooleanServiceToken)
    public readonly booleanService:IBooleanService
  ) {
    loggerService.forEach((l) => l.log('LoggerComponent'));


  }
}
