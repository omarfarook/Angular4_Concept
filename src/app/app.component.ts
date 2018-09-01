'use strict'
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ApplicationContextService } from './services/application-context.service';
import { appConfig } from './app.config'
//import { AppService} from './app.Service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ApplicationContextService]
})

export class AppComponent {
  title = 'app';
  private responseData = [];
  private appContext: any;
  
  constructor(private appContextService: ApplicationContextService,
              private router: Router) {
    this.appContextService.appContext.subscribe(context => {
      
            this.appContext = context;
      
          });
          router.events.subscribe(event => {
            
              if (event instanceof NavigationStart) {
            
                const url = event.url;
            
                if (url.startsWith('/home')) { // Don’t hardcode ‘/b2b’
            
                  this.appContext.storeId = appConfig.storeOptions.storeId_B2B;
            
                  this.appContextService.changeAppContext(this.appContext);
                  this.b2bHeader();
                } else {
            
                  this.appContext.storeId = appConfig.storeOptions.storeId_B2C;
            
                  this.appContextService.changeAppContext(this.appContext);
                  this.b2cHeader();
                }
            
              }
            
            });
  }
  
  ngOnInit(){}

  b2cHeader() {
    console.log('b2c header imp');
  };

  b2bHeader() {
      console.log('b2b header imp')
    
  }
}
