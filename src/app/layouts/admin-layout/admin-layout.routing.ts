import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../bank/user-profile.component';
import { TableListComponent } from '../../account/table-list.component';
import { TypographyComponent } from '../../transaction/typography.component';
import { MapsComponent } from '../../contract/maps.component';
import { NotificationsComponent } from '../../cheque/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'bank',           component: UserProfileComponent },
    { path: 'account',        component: TableListComponent },
    { path: 'transaction',    component: TypographyComponent },
    { path: 'contract',           component: MapsComponent },
    { path: 'cheque',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

];
