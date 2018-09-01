import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';
import {Ng2Webstorage} from 'ng2-webstorage';

import { AppComponent } from './app.component';
import { AppService} from './app.Service';
import { routes} from './app.routes';
import { HomeComponent } from './home/home.component';
import { PlpComponent } from './plp/plp.component';
import { SubModule } from './subModule/subModule.module';
//import { pipeModule } from './pipes/pipe.module';
import { HighLightDirectiveModule } from './directives/highlight.module';
import { HomeResolve } from './resolve/homeresolve';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { ChildTwoComponent } from './parent/child-two/child-two.component';
import { CockpitComponent } from './udemy/cockpit/cockpit.component';
import { ElementServerComponent } from './udemy/element-server/element-server.component';
import { UdemyHomeComponent } from './udemy/udemy-home/udemy.home.component';



 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlpComponent,
    ParentComponent,
    ChildOneComponent,
    ChildTwoComponent,
    CockpitComponent,
    ElementServerComponent,
    UdemyHomeComponent
    //htmlConvertionPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SubModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FacebookModule.forRoot(),
    Ng2Webstorage,
    //pipeModule,
    HighLightDirectiveModule
  ],
  exports: [
  
  ],
  providers: [AppService,HomeResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
