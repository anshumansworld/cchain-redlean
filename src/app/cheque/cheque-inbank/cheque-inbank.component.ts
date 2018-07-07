import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CheckInBank } from '../../services/factory/checkinbank';
import { RestClientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-cheque-inbank',
  templateUrl: './cheque-inbank.component.html',
})
export class ChequeInbankComponent implements OnInit {

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

  public allcheckinbank: Observable<CheckInBank[]>;
  constructor(private dataService: RestClientService) { }

  ngOnInit() {
    this.allcheckinbank = this.dataService.getAllCheckInBank();
    this.loadPosts();
  }
  //load data from API REST to data collection 'posts'
  private loadPosts() {
    // do a call to fetch the ' CheckInBank ' on init of component
    //we manually subscribe to this method and take the CheckInBank 
    // in our callback
    this.dataService.getAllCheckInBank()
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

            //'Push' CheckInBank data  into  markers 

            this.markers.push({
              'Idcheck': this.Idcheck,
              'amount': this.amount,
              'date': this.date,
              'receiver': this.receiver,
              'owner': this.bankowner,
              'compte_owner': this.compte_owner,
              'statue': this.statue,


            });
          }
          console.log("hhhhhhheeeeeeeeee " + this.markers)
          this.posts = this.markers;
        });

  }
}
