import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CheckInTransit } from '../../services/factory/checkintransit';
import { RestClientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-cheque-intransit',
  templateUrl: './cheque-intransit.component.html',
})
export class ChequeIntransitComponent implements OnInit {

  //initial variables
  markers = [];
  IdcheckStr: String;
  Idcheck: string;
  amountStr: String;
  amount: string;
  dateStr: String;
  date: string;
  receiverStr: String;
  receiver: string;
  bankownerStr: String;
  bankowner: string;
  compte_ownerStr: String;
  compte_owner: string;
  statue: String;
  posts: any[];

  public allcheckintransit: Observable<CheckInTransit[]>;
  constructor(private dataService: RestClientService) { }

  ngOnInit() {
    this.allcheckintransit = this.dataService.getAllCheckIntransit();
    this.loadPosts();
  }
  //load data from API REST to data collection 'posts'

  private loadPosts() {

    // do a call to fetch the ' CheckIntransit ' on init of component
    //we manually subscribe to this method and take the CheckIntransit 
    // in our callback
    this.dataService.getAllCheckIntransit()
      .subscribe(
        posts => {
          for (var _i = 0; _i < posts.length; _i++) {
            //id
            this.Idcheck = posts[_i].Idcheck;
            //amount
            this.amount = posts[_i].amount;
            //date
            this.date = posts[_i].date;
            //bank receiver
            this.receiverStr = posts[_i].reciver;
            this.receiver = this.receiverStr.replace("resource:org.acme.biznet.Bank#", "");
            //bank owner
            this.bankownerStr = posts[_i].owner;
            this.bankowner = this.bankownerStr.replace("resource:org.acme.biznet.Bank#", "");
            //Account owner
            this.compte_ownerStr = posts[_i].compte_owner;
            this.compte_owner = this.compte_ownerStr.replace("resource:org.acme.biznet.Compte#", "");
            //state
            this.statue = posts[_i].statue;

            //'Push' CheckIntransit data  into  markers 

            this.markers.push
              ({
                'Idcheck': this.Idcheck,
                'amount': this.amount,
                'date': this.date,
                'reciver': this.receiver,
                'owner': this.bankowner,
                'compte_owner': this.compte_owner,
                'statue': this.statue,
              });
          }
          this.posts = this.markers;
        });
  }

}
