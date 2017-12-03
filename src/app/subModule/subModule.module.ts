import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SubComponentComponent } from './sub-component/sub-component.component';
import { HighLightDirectiveModule } from '../directives/highlight.module';
import { pipeModule } from '../pipes/pipe.module';
import { ChildSubComponent } from './child-sub/child-sub.component';
import { ViewChildrenComponent } from './child-sub/view-children/view-children.component';


@NgModule({
    declarations: [
        SubComponentComponent,
        ChildSubComponent,
        ViewChildrenComponent,       
    ],
    imports: [
        BrowserModule,
        HighLightDirectiveModule,
        pipeModule
    ],
    exports: [
        SubComponentComponent
   ]

})
export class SubModule { }