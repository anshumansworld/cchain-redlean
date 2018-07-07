import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../services/rest-client.service';
import { Observable } from 'rxjs/Observable';
import { Bank } from '../services/factory/bank';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {
  public allBanks:  Observable<Bank[]> ;
  constructor(private dataService : RestClientService ) {
  }

  ngOnInit() {
     this.allBanks = this.dataService.getAllBanks();
  }

}
