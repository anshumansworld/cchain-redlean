import { Component, OnInit } from '@angular/core';
import { BankService } from './BankServic';
import { Bank } from '../../services/factory/bank';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
})
export class AddBankComponent implements OnInit {

  successMessage: string;
  constructor(private BankService: BankService) {}
  bank = new Bank();
  errorMessage: any;
  
  save() {
    this.successMessage = '';
    this.errorMessage = '';
    this.BankService.createCours(this.bank)
      .subscribe(cours => {
        this.successMessage = 'cours was created!';
        console.log(JSON.stringify(this.bank));
      });
  }
  ngOnInit() {
  }

}
