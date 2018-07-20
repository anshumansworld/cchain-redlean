import { Component, OnInit } from '@angular/core';
import { Compte } from '../services/factory/compte';
import { RestClientService } from '../services/rest-client.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html'
})
export class TableListComponent implements OnInit {
  public allComptes: Observable<Compte[]>;
  constructor(private dataService: RestClientService) { }

  ngOnInit() {
    this.allComptes = this.dataService.getAllComptes();
  }

}
