import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestClientService } from '../../services/rest-client.service';
import { Bank } from '../../services/factory/bank';

@Component({
  selector: 'app-get-bank',
  templateUrl: './get-bank.component.html',
})
export class GetBankComponent implements OnInit {
  public allBanks:  Observable<Bank[]> ;
  constructor(private dataService : RestClientService ) {
  }

  ngOnInit() {
     this.allBanks = this.dataService.getAllBanks();
  }
}
