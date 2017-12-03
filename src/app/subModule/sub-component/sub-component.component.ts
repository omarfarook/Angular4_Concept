import { Component, OnInit, Input,Output,EventEmitter, OnChanges, SimpleChanges,ViewChild} from '@angular/core';
import { ChildSubComponent } from '../child-sub/child-sub.component'

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.css']
})
export class SubComponentComponent implements OnInit {
  @Input() sampleData: string;
  @Input() sampleObject: any;
  @Output() outputFn: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(ChildSubComponent) childComponent : ChildSubComponent;
  recommendedContent: any;
  directiveValue:any = "data from sub comp to directive"
  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called 1st ");
      if(changes.sampleData){
        console.log("onChangesDetected",this.sampleData);
      }
    }

  ngOnInit() {
    console.log("ngOnInit called 2nd",this.sampleObject);
    this.recommendedContent = "<style>.span-block{ color: red;}</style><script type=\"text/javascript\">\n$('div.footer_top').css('margin', '50px 0px');\n</script>\n<!--<div class=\"desktop\" style=\"box-sizing: border-box;\">-->\n<div class=\"desktop\">\n    <label style=\"line-height: 22px;\">NEW EMAIL CUSTOMERS RECEIVE 10% OFF WHEN YOU SIGN UP!<br>\n          <span class=\"span-block\">Get emails about sales, special offers, events &amp; more from Field &amp; Stream!</span>\n     </label>\n     <div style=\"float:right; color:#8eb6b5;\" id=\"MarketingEmailControls\">\n        <input style=\"color:#a7a7a7 !important;\" type=\"text\" placeholder=\"Enter your email address\" maxlength=\"60\" size=\"40\" id=\"DSG_MarketingEmailSignupForm_Textbox\">\n        <a data-em=\"Footer_NewCustomer_EmailSignUp\" id=\"DSG_MarketingEmailSignupForm_Button\" class=\"button_primary\" role=\"button\" href=\"#MarketingEmail\">\n            <div class=\"left_border\"></div>\n            <div class=\"button_text\">Sign up</div>                                                \n            <div class=\"right_border\"></div>\n        </a>    \n    </div>\n</div>\n\n<div class=\"clear-float\"></div>\n<script>\nfunction getElementsById(elementID){\n    var elementCollection = new Array();\n    var allElements = document.getElementsByTagName(\"*\");\n    for(i = 0; i < allElements.length; i++){\n        if(allElements[i].id == elementID)\n            elementCollection.push(allElements[i]);\n\n    }\n    if(elementCollection.length > 1){\n    \t$('.footer_top').css('display','none');\n    }\n}\ngetElementsById('MarketingEmailControls');\n</script>\n";

    //output decorator ex
this.outputFn.emit();

   //Vew child
   this.childComponent.childMethod();
  }


  ngOnDestroy(){
    console.log("ngOnDestroy called last after moving from this component");
  }
}
