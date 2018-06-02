import {
     Component
} from '@angular/core';
import {
     IonicPage,
     NavController,
     ViewController,
     NavParams
} from 'ionic-angular';
import * as $ from 'jquery';
//import * as swal from 'sweetalert';
import swal, {
     SweetAlertOptions
} from 'sweetalert2';
import {
     HomePage
} from '../home/home';
import {
     AlertController
} from 'ionic-angular';

import {
     PruebaProvider
} from '../../providers/prueba/prueba';
/**
 * Generated class for the Juego_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class DeviceInfo {
     name: boolean;
     navParent: any;
     movesR: number;
     movesW: number;
     prueba: PruebaProvider;
     y: any;
     x: any;
     stop() {
          clearInterval(info.x);
          info.x = null;
          console.log(info.x);
     }
     setInfo() {
          console.log("This is just a demo ...");

     }
}

let info = new DeviceInfo();
// No more warning !


@IonicPage()
@Component({
     selector: 'page-juego-2',
     templateUrl: 'juego-2.html',
})
export class Juego_2Page {
     private disksNum = 3; //se debe cambiar en la linea 129
     private $canves;
     private $tower;

     constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider, private view: ViewController, private alertCtrl: AlertController) {
          info.y = false;
          this.$canves = $('#canves');
          this.$tower = this.$canves.find('.tower');
          info.prueba = this.pruebaProvider;
          info.navParent = this.navCtrl;
          info.name = false;
          info.movesR = 0;
          info.movesW = 0;
     };
     ionViewCanLeave() {
          if (info.y) {
               return true;
          } else {
               let alert = this.alertCtrl.create({
                    title: 'Prueba en proceso',
                    subTitle: 'Por favor, termine la prueba',
                    buttons: ['Ok']
               });
               alert.present();

               return false;
          }
     }

     ionViewDidLeave() {

          clearInterval(info.x);
          info.x = null;
     }
     ionViewDidLoad() {
          this.holi();
     };
     ionViewWillEnter() {
          // Part 1:
          this.view.showBackButton(false);
     };

     holi() {

          this.initGame(1);
          this.setTimer();
          var moves = 0;
          var countW = 0;
          var holding = [];

          // Event Handlers
          $('#canves').on('click', '.tower', function () {
               var $topDisk = $(this).get(0).lastChild;
               var topDiskValue = $($topDisk).data('value');
               var $holdingDisk = $('#canves').find('.hold');
               if ($(this).children().length === 0 && $($holdingDisk).length === 0) {} else {
                    if ($($holdingDisk).length !== 0) {
                         if (topDiskValue === holding[0]) {
                              $($holdingDisk).removeClass('hold');
                         } else if (topDiskValue === undefined || topDiskValue > holding[0]) {
                              $($holdingDisk).remove();
                              $(this).append($('<li class="disk disk-' + holding[0] + '" data-value="' + holding[0] + '"></li>'));
                              moves++;
                         } else {
                              countW++;
                         }
                    } else if ($topDisk.length !== 0) {
                         $($topDisk).addClass('hold');
                         holding[0] = topDiskValue;
                    }
               }
               if (($('#tower-3')).children().length === 3) {
                    info.stop;
                    info.y = true;
                    swal({
                         allowEscapeKey: false,
                         allowOutsideClick: false,
                         title: 'Felicidades, completaste la prueba!',
                         type: 'success',
                         confirmButtonColor: '#f67b18',
                         confirmButtonText: 'Siguiente Prueba'
                    }).then(function (isConfirm) {
                         if (isConfirm) {
                              info.prueba.enviarPuntaje({
                                   estado: "completed",
                                   movFallidos: info.movesW,
                                   movTotales: info.movesR + info.movesW
                              }, "hanoi");
                              info.navParent.setRoot(HomePage);
                         }
                    });
               }

               info.movesR = moves;
               info.movesW = countW;
          });
     };



     setTimer() {

          //this.navCtrl.push(HomePage);
          var now5 = new Date();
          // Set the date we're counting down to
          now5.setSeconds(now5.getSeconds() + 120);
          var distance: number;
          // Update the count down every 1 second
          info.x = setInterval(function () {
               // Get todays date and time
               var now = new Date().getTime();
               // Find the distance between now an the count down date
               distance = now5.getTime() - now;
               // Time calculations for days, hours, minutes and seconds
               var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
               var seconds = Math.floor((distance % (1000 * 60)) / 1000);
               // Display the result in the element with id="demo"
               $('#demo').text(minutes + ":" + seconds);
               // If the count down is finished, write some text
               console.log(distance);
               if (distance < 0) {
                    info.y = true;
                    info.stop();
                    swal({
                         allowEscapeKey: false,
                         allowOutsideClick: false,
                         title: 'Se acabo el tiempo',
                         type: 'error',
                         confirmButtonColor: '#f67b18',
                         confirmButtonText: 'Siguiente Prueba'
                    }).then(function () {
                         info.prueba.enviarPuntaje({
                              estado: "completed",
                              movFallidos: info.movesW,
                              movTotales: info.movesR + info.movesW
                         }, "hanoi");

                         info.navParent.setRoot(HomePage);

                    });
               }
          }, 1000);
     };
     // Init Game
     initGame(tower) {
          this.$tower.html('');
          for (var i = 1; i <= this.disksNum; i++) {
               $("#tower-" + tower).prepend($('<li class="disk disk-' + i + '" data-value="' + i + '"></li>'));
          }
     };
}
