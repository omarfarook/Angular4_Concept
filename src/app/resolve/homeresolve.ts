import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AppService} from '../app.Service';

@Injectable()
export class HomeResolve implements Resolve<any> {
  constructor(private appService: AppService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return "resolved home data"
  }
}
