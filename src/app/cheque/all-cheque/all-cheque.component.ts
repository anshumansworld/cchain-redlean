import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Check } from '../../services/factory/check';
import { RestClientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-all-cheque',
  templateUrl: './all-cheque.component.html',
})
export class AllChequeComponent implements OnInit {
  //inital variables
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

  public allcheck: Observable<Check[]>;
  constructor(private dataService: RestClientService) { }

  ngOnInit() {
    this.allcheck = this.dataService.getAllCheks();

    this.loadPosts()

  }

  //load data from API REST to data collection posts
  private loadPosts() {
    // do a call to fetch the ' Check ' on init of component
    //we manually subscribe to this method and take the CHECK 
    // in our callback
    this.dataService.getAllCheks()
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

            //'Push' CHECK data  into  markers 
            this.markers.push({
              'Idcheck': this.Idcheck,
              'amount': this.amount,
              'date': this.date,
              'receiver': this.receiver,
              'owner': this.bankowner,
              'compte_owner': this.compte_owner,
              'state': this.statue,
            });
          }
          this.posts = this.markers;
        });

  }

}
