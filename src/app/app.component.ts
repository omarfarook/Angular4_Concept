'use strict'
import { Component, ViewEncapsulation } from '@angular/core';
//import { AppService} from './app.Service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'app';
  private responseData = [];
  
  constructor() {}
  
  ngOnInit(){}
}
