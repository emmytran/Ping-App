import { Injectable } from '@angular/core';
import { myContact } from '../models/contact.model';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IonItem } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactItems$ = new BehaviorSubject<myContact[]>([
      {
        id: 1,
        firstName: 'First',
        lastName: 'Last',
        phone: "1234567987",
        image: 'assets/images/person.png',
      },
    ]);

    getContact() {
      return this.contactItems$.asObservable();
    }

    removeItem(id: number) {
      this.contactItems$.next(this.contactItems$.getValue().filter((item) => item.id !== id));
    }


}
