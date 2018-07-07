import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }
  radioModel = 'allcheck';
}
