import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService<Type> {

    private resolveSuffix = '?resolve=true';
    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http) {
        this.actionUrl = 'http://vps177348.vps.ovh.ca:3000/api/org.acme.biznet.Bank';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public add(ns: string, asset: Type): Observable<Type> {
        return this.http.post(this.actionUrl + ns, asset)
          .map(this.extractData)
          .catch(this.handleError);
    }
   
    private handleError(error: any): Observable<string> {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
    }

    private extractData(res: Response): any {
        return res.json();
    }

}
