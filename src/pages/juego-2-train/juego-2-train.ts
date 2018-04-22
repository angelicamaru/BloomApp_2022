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
import { AlertController } from 'ionic-angular';

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
     stop(){
    clearInterval(info.x);
          info.x=null;
          console.log(info.x);
     }
}

let info = new DeviceInfo();
// No more warning !

@IonicPage()
@Component({
  selector: 'page-juego-2-train',
  templateUrl: 'juego-2-train.html',
})
export class Juego_2TrainPage {
// Variables
     private moves = 0;
     private countW = 0;
     private disksNum = 2; //se debe cambiar en la linea 116
     private minMoves = 127;
     private $canves;
     private $tower;

     constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider, private view: ViewController, private alertCtrl: AlertController) {
          info.y=false;
          this.$canves = $('#canves');
          this.$tower = this.$canves.find('.tower');
          info.prueba = this.pruebaProvider;
          info.navParent = this.navCtrl;
     };
ionViewDidLeave(){

    clearInterval(info.x);
          info.x=null;
}
     ionViewDidLoad() {
          $('#y').attr("style", "display:none");
          this.holi();
     };
     holi() {

          this.initGame(1);
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

                         } else {
                               $('#y').attr("style", "display:inline-flex");
                    setTimeout(function () {
                         $('#y').attr("style", "display:none");
                    }, 500);

                         }
                    } else if ($topDisk.length !== 0) {
                         $($topDisk).addClass('hold');
                         holding[0] = topDiskValue;
                    }
               }
               if (($('#tower-3')).children().length === 2) {
                            info.stop;
                    info.y=true;
                    swal({
                         allowEscapeKey: false,
                         allowOutsideClick: false,
                         title: 'Felicidades, completaste el entrenamiento!',
                         type: 'success',
                         confirmButtonColor: '#f67b18',
                         confirmButtonText: 'Realizar prueba'
                    }).then(function (isConfirm) {
                         if (isConfirm) {
                              info.navParent.pop();
                         }
                    });
               }

          });
     };




     // Init Game
     initGame(tower) {
          this.$tower.html('');
          for (var i = 1; i <= this.disksNum; i++) {
               $("#tower-" + tower).prepend($('<li class="disk disk-' + i + '" data-value="' + i + '"></li>'));
          }
     };
}
