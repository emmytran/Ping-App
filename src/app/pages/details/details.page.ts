import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { DatabaseService } from 'src/app/services/database.service';
const { PushNotifications } = Plugins;

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id =null;
  product = null; 
  constructor( private route: ActivatedRoute, private databaseService) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.id = param.get('id');
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.product = await this.databaseService.getProductById(id);
  }



  resetBadgeCount() {
    PushNotifications.removeAllDeliveredNotifications();
  }

}
