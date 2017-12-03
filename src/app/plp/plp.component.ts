import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AppService} from '../app.Service';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.css']
})
export class PlpComponent implements OnInit {
responseDataPLP:any;
statusMessage: string = "Loading ..pls wait";
sampleData = "umar farook";
sampleObject = {
  name: 'umarfarook',
  age: 25
};


  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { 
   }

  ngOnInit() {
    this.appService.getApi("https://jsonplaceholder.typicode.com/posts/1")
                   .subscribe(data => this.responseDataPLP = data,
                   (error) => { 
                     this.statusMessage="problem with the server.pls try again after some time";
                     console.error(error);
                    });
     
     //To get route params
        var routeParam = this.route.snapshot.params.id;
        console.log(routeParam)
  }
  outputFn(){
    console.log("output decorator");
  }

  navigateToHome(){
    this.router.navigate(['/home']);
  }
 

}
