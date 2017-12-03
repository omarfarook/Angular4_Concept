import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { htmlConvertionPipe } from './htmlconversion.pipe';

@NgModule({
    declarations: [
        htmlConvertionPipe
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        htmlConvertionPipe
    ]
})
export class pipeModule { }