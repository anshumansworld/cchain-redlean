import { Component, OnInit } from '@angular/core';
import { TransactionArrived } from '../../services/factory/transactionarrived';
import { Observable } from 'rxjs/Observable';
import { RestClientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-transaction-arrived',
  templateUrl: './transaction-arrived.component.html',
})
export class TransactionArrivedComponent implements OnInit {

  markers = [];
  arrivalBankStr: String;
  arrivalBank: String;
  checkStr: String;
  check: String;
  contractStr: String;
  contract: String;
  timestampStr: String;
  timestamp: String;
  posts: any[];


  public allTransactionArrived: Observable<TransactionArrived[]>;
  constructor(private dataService: RestClientService) { }

  ngOnInit() {
  this.allTransactionArrived = this.dataService.getAllTransactionarrived();
	this.loadPosts();
  }

  private loadPosts() {
    this.dataService.getAllTransactionarrived()
      .subscribe(
        posts => {
          for (var _i = 0; _i < posts.length; _i++) {


            //idbank
            this.arrivalBankStr = posts[_i].fromBank,
              this.arrivalBank = this.arrivalBankStr.replace("resource:org.acme.biznet.Bank#", "");

            //idcheck 
            this.checkStr = posts[_i].check;
            this.check = this.checkStr.replace("resource:org.acme.biznet.Check#", "");
            //contrat
            this.contractStr = posts[_i].contract;
            this.contract = this.contractStr.replace("resource:org.acme.biznet.Contract#", "");

            //Date
            this.timestamp = posts[_i].timestamp,
              // this.timestamp = this.timestampStr.replace("resource:org.acme.biznet.Compte#", "");


              this.markers.push(
                {
                  // 'Idcontract': this.Idcontract,
                  'arrivalBank': this.arrivalBank,
                  'check': this.check,
                  'contract': this.contract,
                  'timestamp': this.timestamp,
                });
          }

          this.posts = this.markers;
        });
  }

}
