import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts = [];
  export = null;
  newContacts = 'New Contacts';

  constructor(private databaseService: DatabaseService) {
    this.loadContacts();
  }
  loadContacts(){
    this.databaseService.getContactsList().subscribe(res => {
      this.contacts = res.value;
    });
  }

  async createExport(mode) {
    const dataExport = await this.databaseService.getDatabaseExport(mode);
    this.export = dataExport.export;
  }

  async addContacts() {
    await this.databaseService.addNewContacts(this.newContacts);
    this.newContacts = '';
    this.loadContacts();
  }
  
  async deleteContacts(contacts){
    await this.databaseService.deleteContacts(contacts.id);
    this.contacts = this.contacts.filter(c => c != contacts)
  }
}