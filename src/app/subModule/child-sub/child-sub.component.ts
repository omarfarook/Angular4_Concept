import { Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import { ViewChildrenComponent } from './view-children/view-children.component'

@Component({
  selector: 'app-child-sub',
  templateUrl: './child-sub.component.html',
  styleUrls: ['./child-sub.component.less']
})
export class ChildSubComponent implements OnInit {
@ViewChildren(ViewChildrenComponent) viewChildren: QueryList<ViewChildrenComponent>;
  constructor() { }

  ngOnInit() {
  }

  childMethod() {
    console.log("invoked from other component");
    //this.viewChildren;
  }

}
