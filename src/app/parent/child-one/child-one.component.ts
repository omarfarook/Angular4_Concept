import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.less'],
  encapsulation: ViewEncapsulation.Native
})
export class ChildOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
