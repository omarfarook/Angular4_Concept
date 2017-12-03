import { Component, OnInit } from '@angular/core';
import { ISampleObject }  from './sampleObjects.interface'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less']
})
export class ParentComponent implements OnInit {

  private sampleObjects:ISampleObject[];

  constructor() { 
    this.sampleObjects = [
    { name:'umarfarook', gender:'male',age:25,dob:'24/12/1992' },
    { name:'vinoth', gender:'male',age:24,dob:'24/11/1993' },
    { name:'megha', gender:'female',age:22,dob:'24/3/1995' },
    { name:'wiki', gender:'female',age:23,dob:'24/10/1994' }
    ]
  }

  ngOnInit() {
  }

  refresh() {
    this.sampleObjects = [
    { name:'umarfarook', gender:'male',age:25,dob:'24/12/1992' },
    { name:'vinoth', gender:'male',age:24,dob:'24/11/1993' },
    { name:'megha', gender:'female',age:22,dob:'24/3/1995' },
    { name:'wiki', gender:'female',age:23,dob:'24/10/1994' },
    { name:'sai', gender:'male',age:23,dob:'24/9/1994' },
  ]
  }

  trackByName(index: number, sampleObject: any): string{
    return sampleObject.name;
  }

}
