import {
     Component
} from '@angular/core';
import {
     NavController
} from 'ionic-angular';
import {
     AuthProvider
} from '../../providers/auth/auth';
import * as $ from 'jquery';

import {
     PruebaProvider
} from '../../providers/prueba/prueba';



@Component({
     selector: 'page-home',
     templateUrl: 'home.html'
})
export class HomePage {


     constructor(public navCtrl: NavController, public authData: AuthProvider, public pruebaProvider: PruebaProvider) {


     }
     logoutUsr(): void {
          this.authData.logoutUser().then(() => this.navCtrl.setRoot('WalkthroughPage'));
     }

     ionViewDidLoad() {

          this.botones();
     }
     async botones() {
          /*
         stroop=1
         hanoi= 2
         token= 3
         wisconsin=4
         raven=5
         stroopCompleto =6
         hanoiCompleto = 7
         tokenCompleto = 8
         wisonsinCompleto =9
         ravenCompleto = 10
         */
          var arr = [1, 2, 3, 4, 5];
          var res = "";
          var un = "undone";
          for (var i = 1; i < 6; i++) {
               await this.pruebaProvider.isUndone(i).then(result => {
                    res = result.toString();
                    if (res === un || res==="entrenamiento") {} else {
                         arr[i - 1] = i + 5;
                    }
               });
          }
          arr = this.shuffle(arr);

          $('#button1').attr('style', 'background:url(assets/imgs/bloom-' + arr[0] + '.jpg) no-repeat center;background-size:cover;');
          $('#button1').attr('data-user', arr[0]);
          $('#button2').attr('style', 'background:url(assets/imgs/bloom-' + arr[1] + '.jpg) no-repeat center;background-size:cover;');
          $('#button2').attr('data-user', arr[1]);
          $('#button3').attr('style', 'background:url(assets/imgs/bloom-' + arr[2] + '.jpg) no-repeat center;background-size:cover;');
          $('#button3').attr('data-user', arr[2]);
          $('#button4').attr('style', 'background:url(assets/imgs/bloom-' + arr[3] + '.jpg) no-repeat center;background-size:cover;');
          $('#button4').attr('data-user', arr[3]);
          $('#button5').attr('style', 'background:url(assets/imgs/bloom-' + arr[4] + '.jpg) no-repeat center;background-size:cover;');
          $('#button5').attr('data-user', arr[4]);
          $('#button6').attr('style', 'background:url(assets/imgs/bloom-hcd.jpg) no-repeat center;background-size:cover;');
     }

     shuffle(array) {
          var currentIndex = array.length;
          var randomIndex, temporaryValue;
          // While there remain elements to shuffle...
          while (0 !== currentIndex) {
               // Pick a remaining element...
               randomIndex = Math.floor(Math.random() * currentIndex);
               currentIndex -= 1;
               // And swap it with the current element.
               temporaryValue = array[currentIndex];
               array[currentIndex] = array[randomIndex];
               array[randomIndex] = temporaryValue;
          }
          return array;
     }
     goToExplain1() {
          var ide = $('#button1').attr('data-user');
          if (ide < 6) {
               this.navCtrl.push('ExplainPage', {
                    juego: ide
               });
          }
     }
     goToExplain2() {
          var ide = $('#button2').attr('data-user');
          if (ide < 6) {
               this.navCtrl.push('ExplainPage', {
                    juego: ide
               });
          }
     }
     goToExplain3() {
          var ide = $('#button3').attr('data-user');
          if (ide < 6) {
               this.navCtrl.push('ExplainPage', {
                    juego: ide
               });
          }
     }
     goToExplain4() {
          var ide = $('#button4').attr('data-user');
          if (ide < 6) {
               this.navCtrl.push('ExplainPage', {
                    juego: ide
               });
          }
     }
     goToExplain5() {
          var ide = $('#button5').attr('data-user');
          if (ide < 6) {
               this.navCtrl.push('ExplainPage', {
                    juego: ide
               });
          }
     }
      goToExplain6() {
               this.navCtrl.push('HcdPage');

     }
}
