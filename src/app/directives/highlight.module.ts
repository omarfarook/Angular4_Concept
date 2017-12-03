import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    declarations: [
        HighlightDirective
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        HighlightDirective
    ]

})
export class HighLightDirectiveModule { }