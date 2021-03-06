import { Component, OnInit } from '@angular/core';
import { ValidContract } from '../../services/factory/validContract';
import { Observable } from 'rxjs/Observable';
import { RestClientService } from '../../services/rest-client.service';

@Component({
  selector: 'app-valid-contract',
  templateUrl: './valid-contract.component.html',
})
export class ValidContractComponent implements OnInit {

 
  // initial variable
  markers = [];
  compte_newownerStr: string;
  compte_newowner: string;
  compte_ownerStr: string;
  compte_owner: string;
  ownerStr: string;
  owner: string;
  checkStr: string;
  check: string;
  validation: string;
  posts: any[];



  public allCpntractValid: Observable<ValidContract[]>;
  constructor(private dataService: RestClientService) { }

  ngOnInit() {
    this.allCpntractValid = this.dataService.getAllContractValid();
    this.loadPosts();
  }
  private loadPosts() {
    this.dataService.getAllContractValid()
      .subscribe(
        posts => {
          for (var _i = 0; _i < posts.length; _i++) {


            //owner
            this.compte_newownerStr = posts[_i].compte_owner,
              this.compte_newowner = this.compte_newownerStr.replace("resource:org.acme.biznet.Compte#", "");
            //bank owner
            this.compte_ownerStr = posts[_i].owner;
            this.compte_owner = this.compte_ownerStr.replace("resource:org.acme.biznet.Bank#", "");
            //bank owner
            this.compte_ownerStr = posts[_i].owner;
            this.compte_owner = this.compte_ownerStr.replace("resource:org.acme.biznet.Bank#", "");
            //check 
            this.checkStr = posts[_i].check;
            this.check = this.checkStr.replace("resource:org.acme.biznet.Check#", "");
            //statut
            this.validation = posts[_i].validation;

            this.markers.push(
              {
                // 'Idcontract': this.Idcontract,
                'compte_newowner': this.compte_newowner,
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
