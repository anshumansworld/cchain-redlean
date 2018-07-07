import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TransactionDepart } from '../../services/factory/transactiondeparture';
import { RestClientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-transaction-departure',
  templateUrl: './transaction-departure.component.html',
})
export class TransactionDepartureComponent implements OnInit {
  markers=[];
  fromBankStr: String;
  fromBank: String;
  checkStr: String;
  check: String;
  contractStr: String;
  contract: String;
  timestampStr: String;
  timestamp: String;
  posts: any[];

  public allTransactionDepart:  Observable<TransactionDepart[]> ;
  constructor(private dataService : RestClientService ) {}

  ngOnInit() {
     this.allTransactionDepart = this.dataService.getAllTransactiondepart();
     this.loadPosts();
  }

  private loadPosts() {
      this.dataService.getAllTransactiondepart()
        .subscribe(
          posts => {
            for (var _i = 0; _i < posts.length; _i++) {

              //idbank
              this.fromBankStr = posts[_i].fromBank,
              this.fromBank = this.fromBankStr.replace("resource:org.acme.biznet.Bank#", "");
           
              //idcheck 
              this.checkStr = posts[_i].check;
              this.check = this.checkStr.replace("resource:org.acme.biznet.Check#", "");
              //contrat
              this.contractStr = posts[_i].contract;
              this.contract = this.contractStr.replace("resource:org.acme.biznet.Contract#", "");

               //Date
               this.timestamp= posts[_i].timestamp, 
               
               
              this.markers.push(
              {
                  // 'Idcontract': this.Idcontract,
                  'fromBank': this.fromBank,
                  'check': this.check,
                  'contract': this.contract,                  
                  'timestamp': this.timestamp,
              });
            }
  
            this.posts = this.markers;
          });
        }
}
