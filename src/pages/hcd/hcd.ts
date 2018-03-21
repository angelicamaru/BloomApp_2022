import {
     Component
} from '@angular/core';
import {
     IonicPage,
     NavController,
     NavParams
} from 'ionic-angular';

/**
 * Generated class for the HcdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
     selector: 'page-hcd',
     templateUrl: 'hcd.html',
})
export class HcdPage {

     constructor(public navCtrl: NavController, public navParams: NavParams) {}

     ionViewDidLoad() {
          console.log('ionViewDidLoad HcdPage');
     }

}
