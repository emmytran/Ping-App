import { Component, OnInit } from '@angular/core';
import { syncContacts } from 'src/app/contacts.service';
@Component({
  selector: 'app-sync',
  templateUrl: './sync.page.html',
  styleUrls: ['./sync.page.scss'],
})
export class SyncPage implements OnInit {

  constructor( private syncContacts: syncContacts) { }

  ngOnInit() {
  }

}
