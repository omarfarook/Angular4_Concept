import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ChildTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
