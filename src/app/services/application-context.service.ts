import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { appConfig } from '../app.config';

@Injectable()
export class ApplicationContextService {
  private appContextData = new BehaviorSubject<AppContext>(
    new AppContext(10252, false));
  appContext = this.appContextData.asObservable();

  constructor() { }

  changeAppContext(data: AppContext) {
    this.appContextData.next(data);
  }
}

export class AppContext {
  constructor(public storeId: number, public loggedIn: boolean) {
    this.storeId = storeId;
    this.loggedIn = loggedIn;
  }

}
