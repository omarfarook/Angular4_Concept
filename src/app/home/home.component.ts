import { Component, OnInit, PLATFORM_ID, Inject, ElementRef } from '@angular/core';
import { isPlatformBrowser} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { AppService} from '../app.Service';
import { FacebookService, InitParams } from 'ngx-facebook';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
 
})

export class HomeComponent implements OnInit {
  private responseDataHome = [];
  private localVar: any;
  private sessionVar: any;
  testBrowser: boolean;
  private modelData = "umarfarook";
  resolvedData: any;
  staticData: any;
  statusMessage: string = "Loading ..pls wait";

  constructor(private appService: AppService, private localStorage:LocalStorageService, 
              private sessionStorage:SessionStorageService,
              @Inject(PLATFORM_ID) private platformId: Object, private elementRef: ElementRef,
              private route: ActivatedRoute) { 
    // let initParams: InitParams = {
    //   appId: '1234566778',
    //   xfbml: true,
    //   version: 'v2.8'
    // };
 
    // fb.init(initParams);https://jsonplaceholder.typicode.com/posts
  }

  ngOnInit() {
    this.appService.getApi("../assets/json/userDetails.json").subscribe(data => {
      this.responseDataHome = data;
      console.log('response from home api',this.responseDataHome);
      this.elementRef.nativeElement.querySelector("#domelement").classList.add("sampleClass");
    },
    (error) => { 
                     this.statusMessage="problem with the server.pls try again after sme tym"
                    })

    //local Storage and session
    this.localStorage.store('local', "localStorage");
    this.sessionStorage.store('session', "sessionStorage");
    this.localVar = this.localStorage.retrieve('local');
    this.sessionVar = this.sessionStorage.retrieve('session');
    console.log("localStorage",this.localVar);
    console.log("sessionStorage",this.sessionVar);

//certona recommendation with isBrowser check
    if (isPlatformBrowser(this.platformId)) {
     console.log("browsercheck true");
     (<any>window).certona = {
          "pagetype" : "HOME",
          "devicetype" : "DESKTOP",
          "recommendations" : true
      };
      (<any>window).callCertona();
      (<any>window).certonaRecommendations = this.getCertonaRecommendation.bind(this);
    } else {
     console.log("browsercheck false -- Application not running in browser")
    }

    //Resolved data from route to component
    this.resolvedData = this.route.snapshot.data['resolvedData'];
    console.log("resolvedData from route",this.resolvedData);

    //static data from route to component
    this.staticData = this.route.snapshot.data[0]['stateName'];
    console.log("staticData from route",this.staticData);
  }

//certona callback function handler
  getCertonaRecommendation(response){
    console.log(response);
  }
}
