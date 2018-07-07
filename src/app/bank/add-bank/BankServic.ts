
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Bank } from '../../services/factory/bank';
import { DataService } from './DataService';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class BankService {
  private NAMESPACE = 'Bank';
  private CoursUrl = 'http://vps177348.vps.ovh.ca:3000/api/org.acme.biznet.Bank';

  constructor(private http: Http , private dataService: DataService<Bank>) {
  };

  public addParticipant(itemToAdd: any): Observable<Bank> {
    return this.dataService.add(this.NAMESPACE, itemToAdd);
  }
  createCours(body: Object): Observable<Bank[]> {
    let bodyString = JSON.stringify(body); 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.CoursUrl, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
 
  }
 

}
