import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Contract } from '../../services/factory/contract';
import { RestClientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-all-contract',
  templateUrl: './all-contract.component.html',

})
export class AllContractComponent implements OnInit {

// initial variable
markers=[];
compteNewOwnerStr: string;
comptenewOwner :string;
compteOwnerStr: string;
compteOwner1: string;
OwnerStr: string;
compteowner:string;
checkStr:string;
check:string;
validation:string;
posts: any[];

public allContracts:  Observable<Contract[]> ;
constructor(private dataService : RestClientService ) {}

ngOnInit() 
{ 
  this.loadPosts() // this.allContracts = this.dataService.getAllContracts();
}
private loadPosts(){
this.dataService.getAllContracts()
.subscribe(
          posts => { 
            for (var _i = 0; _i <posts.length; _i++) {
              //new owner
              this.compteNewOwnerStr= posts[_i].compte_newowner,
              this.comptenewOwner = this.compteNewOwnerStr.replace("resource:org.acme.biznet.Compte#", "");
              //owner
              this.compteOwnerStr= posts[_i].compte_owner,
              this.compteOwner1 = this.compteOwnerStr.replace("resource:org.acme.biznet.Compte#", "");
              //bank owner
              this.OwnerStr= posts[_i].owner;
              this.compteowner = this.OwnerStr.replace("resource:org.acme.biznet.Bank#", "");
               //check 
              this.checkStr= posts[_i].check;
              this.check = this.checkStr.replace("resource:org.acme.biznet.Check#", "");
              //statut
              this.validation=posts[_i].validation;

              this.markers.push(
                { 
                  'compte_newowner': this.comptenewOwner,
                  'compte_owner': this.compteOwner1,
                  'owner': this.compteowner,
                  'check': this.check,
                  'validation': this.validation,
                });
           }
      
           this.posts = this.markers;
            });
}

}
