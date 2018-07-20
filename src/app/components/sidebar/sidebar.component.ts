import {Component, OnInit} from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/account', title: 'Account',  icon:'people', class: '' },
    { path: '/bank', title: 'Bank',  icon:'account_balance', class: '' },  
    { path: '/transaction', title: 'Transaction',  icon:'swap_horiz', class: '' },
    { path: '/contract', title: 'Contract',  icon:'content_paste', class: '' },
    { path: '/cheque', title: 'Cheque',  icon:'credit_card', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
