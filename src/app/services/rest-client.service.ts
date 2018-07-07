import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json', 'Authorization': 'my-auth-token'})
};

@Injectable()

export class RestClientService { 

  readonly ALL_BANKS_URL = 'http://vps177348.vps.ovh.ca:3000/api/org.acme.biznet.Bank';
  readonly ALL_COMPTE_URL = 'http://vps177348.vps.ovh.ca:3000/api/org.acme.biznet.Compte';
  readonly ALL_CheckMvtArrival_URL = 'http://vps177348.vps.ovh.ca:3000/api/org.acme.biznet.CheckMvtArrival ';
  readonly ALL_CheckMvtDepart_URL = 'http://vps177348.vps.ovh.ca:3000/api/org.acme.biznet.CheckMvtDepart ';
  readonly ALL_CONTRACT_URL = 'http://vps177348.vps.ovh.ca:3000/api/org.acme.biznet.Contract';
  readonly VALID_CONTRACT_URL = 'http://vps177348.vps.ovh.ca:3000/api/queries/selectContractValide';
  readonly INPROGRESS_CONTRACT_URL = 'http://vps177348.vps.ovh.ca:3000/api/queries/selectContractEncour';
  readonly ERROR_CONTRACT_URL = 'http://vps177348.vps.ovh.ca:3000/api/queries/selectContractErreur';
  readonly ALL_CHEKS_URL = 'http://vps177348.vps.ovh.ca:3000/api/org.acme.biznet.Check';
  readonly ALL_CHEKS_INBANK = 'http://vps177348.vps.ovh.ca:3000/api/queries/selectCheckIntransit';
  readonly ALL_CHEKS_INTRANSIT = 'http://vps177348.vps.ovh.ca:3000/api/queries/selectCheckInbankt ';
  
  // post "Add Bank"
  readonly POST_BANK_URL = 'http://vps177348.vps.ovh.ca:3000/api/org.acme.biznet.Bank';

  


  public login:String;
  constructor(private http : HttpClient) {
  }

  getAllBanks() {
  	return  this.http.get<any[]>(this.ALL_BANKS_URL);
  }

  addHero (hero: any): Observable<any> {
    return this.http.post<any[]>(this.POST_BANK_URL, hero, httpOptions)
  }


  getAllComptes() {
  	return  this.http.get<any[]>(this.ALL_COMPTE_URL);
  }

  getAllTransactionarrived() {
  	return  this.http.get<any[]>(this.ALL_CheckMvtArrival_URL);
  }

  getAllTransactiondepart() {
  	return  this.http.get<any[]>(this.ALL_CheckMvtDepart_URL);
  }


  getAllContracts() {
  	return  this.http.get<any[]>(this.ALL_CONTRACT_URL);
  }

  getAllContractValid() {
  	return  this.http.get<any[]>(this.VALID_CONTRACT_URL);
  }

  getAllContractInProgress() {
  	return  this.http.get<any[]>(this.INPROGRESS_CONTRACT_URL);
  }

  getAllContractError() {
  	return  this.http.get<any[]>(this.ERROR_CONTRACT_URL);
  }

  getAllCheks() {
  	return  this.http.get<any[]>(this.ALL_CHEKS_URL);
  }

  getAllCheckInBank() {
  	return  this.http.get<any[]>(this.ALL_CHEKS_INBANK);
  }

  getAllCheckIntransit() {
  	return  this.http.get<any[]>(this.ALL_CHEKS_INTRANSIT);
  }

}
