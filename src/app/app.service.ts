import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx'; //everything come under Rx
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/publishReplay';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/observable/of';
//import 'rxjs/add/observable/catch';

@Injectable()
export class AppService{

    i: any;
    responseData = [];
    
    constructor(private http: Http){ }

    public getApi(url): Observable<any> {
        if(this.responseData.length ===0){
           var templateResponse = {
            page : '',
            response: ''
            };
            return this.http.get(url,this.getHeader())
            .map(res => res.json())
            .do(response => templateResponse.response= response ,templateResponse.page = url )
            .do(response => this.responseData.push(templateResponse))
            .publishReplay(1)
            .refCount()
            .catch(this.handleError);
        } 
        else {
            var templateResponse = {
                page : '',
                response: ''
            };
            for(let i in this.responseData ){
                if(this.responseData.length != 0 && this.responseData[i].page === url) 
                        {
                            return Observable.of(this.responseData[i].response );
                        } 
                }
              
                return this.http.get(url,this.getHeader())
               .map(res => res.json())
               .do(response => templateResponse.response= response ,templateResponse.page = url )
               .do(response => this.responseData.push(templateResponse))
               .publishReplay(1)
               .refCount()
               .catch(this.handleError);      
        }
   }

   //Header for get api call
    getHeader(){
        let headers = new Headers({ 'Accept': 'application/json' });
        headers.append('Authorization', `Bearer`);
        return new RequestOptions({ headers: headers });
    }

    //error handling
    handleError(error: Response){
        console.error("error",error);
        return Observable.throw(error);
    }
    
  

}