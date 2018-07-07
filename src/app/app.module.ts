import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './bank/user-profile.component';
import { TableListComponent } from './account/table-list.component';
import { MapsComponent } from './contract/maps.component';
import { NotificationsComponent } from './cheque/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
// import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RestClientService } from './services/rest-client.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './bank/add-bank/DataService';
import { BankService } from './bank/add-bank/BankServic';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
 
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
       
  ],
  providers: [RestClientService ,DataService,BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
