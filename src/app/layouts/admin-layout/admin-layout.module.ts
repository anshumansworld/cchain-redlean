import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../bank/user-profile.component';
import { TableListComponent } from '../../account/table-list.component';
import { TypographyComponent } from '../../transaction/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../cheque/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { MatButtonModule,MatInputModule,MatRippleModule,MatTooltipModule} from '@angular/material';
import { TransactionDepartureComponent } from '../../transaction/transaction-departure/transaction-departure.component';
import { TransactionArrivedComponent } from '../../transaction/transaction-arrived/transaction-arrived.component';
import { ButtonsModule } from 'ngx-bootstrap';
import { AllContractComponent } from '../../maps/all-contract/all-contract.component';
import { ValidContractComponent } from '../../maps/valid-contract/valid-contract.component';
import { InprogressContractComponent } from '../../maps/inprogress-contract/inprogress-contract.component';
import { EroorContractComponent } from '../../maps/eroor-contract/eroor-contract.component';
import { AllChequeComponent } from '../../cheque/all-cheque/all-cheque.component';
import { ChequeInbankComponent } from '../../cheque/cheque-inbank/cheque-inbank.component';
import { ChequeIntransitComponent } from '../../cheque/cheque-intransit/cheque-intransit.component';
import { GetBankComponent } from '../../bank/get-bank/get-bank.component';
import { AddBankComponent } from '../../bank/add-bank/add-bank.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,ButtonsModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    TransactionDepartureComponent,
    TransactionArrivedComponent,
    AllContractComponent,
    ValidContractComponent,
    InprogressContractComponent,
    EroorContractComponent,
    AllChequeComponent,
    ChequeInbankComponent,
    ChequeIntransitComponent,
    AddBankComponent,
    GetBankComponent,

  ]
})

export class AdminLayoutModule {}
