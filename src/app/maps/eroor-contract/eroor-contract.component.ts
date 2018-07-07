import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorContract } from '../../services/factory/errorcontract';
import { RestClientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-eroor-contract',
  templateUrl: './eroor-contract.component.html',
})
export class EroorContractComponent implements OnInit {

// initial variable
markers=[];
// IdcontractStr: string;
// Idcontract :string;
compte_newownerStr: string;
compte_newowner: string;
compte_ownerStr: string;
compte_owner:string;
ownerStr:string;
owner:string;
checkStr:string;
check:string;
validation:string;
posts: any[];



  public allContractError:  Observable<ErrorContract[]> ;
    constructor(private dataService : RestClientService ) {}
  
    ngOnInit() {
       this.allContractError = this.dataService.getAllContractError();
       this.loadPosts();
    }


    private loadPosts(){
      this.dataService.getAllContractError()
      .subscribe(
                posts => { 
                  for (var _i = 0; _i <posts.length; _i++) {
                    // //new owner
                    // this.IdcontractStr= posts[_i].compte_newowner,
                    // this.Idcontract = this.IdcontractStr.replace("resource:org.acme.biznet.Compte#", "");

                    //owner
                    this.compte_newownerStr= posts[_i].compte_owner,
                    this.compte_newowner = this.compte_newownerStr.replace("resource:org.acme.biznet.Compte#", "");
                    //bank owner
                    this.compte_ownerStr= posts[_i].owner;
                    this.compte_owner = this.compte_ownerStr.replace("resource:org.acme.biznet.Bank#", "");
                     //bank owner
                     this.compte_ownerStr= posts[_i].owner;
                     this.compte_owner = this.compte_ownerStr.replace("resource:org.acme.biznet.Bank#", "");
                     //check 
                    this.checkStr= posts[_i].check;
                    this.check = this.checkStr.replace("resource:org.acme.biznet.Check#", "");
                    //statut
                    this.validation=posts[_i].validation;
      
                    this.markers.push(
                      { 
                       // 'Idcontract': this.Idcontract,
                        'compte_newowner':this.compte_newowner,
                        'compte_owner': this.compte_newowner,
                        'owner': this.compte_owner,
                        'check': this.check,
                        'validation': this.validation,
                      });
                 }
            
                 this.posts = this.markers;
                  });
      }

}
