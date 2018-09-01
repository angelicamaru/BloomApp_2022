import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
//import * as swal from 'sweetalert';
import swal, {
     SweetAlertOptions
} from 'sweetalert2';
import { AlertController } from 'ionic-angular';


import {
     PruebaProvider
} from '../../providers/prueba/prueba';
/**
 * Generated class for the Juego_5TrainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class DeviceInfo4 {
     enun = [];
     res = [];
     numero = 0;
     y = 0;
     t: any;
    total=0;
    bien=0;
    mal=0;
     x: any;
     prueba: PruebaProvider;
     nav: NavController;
     juju() {
          info.prueba.enviarEntrenamiento({
               movTotales: info.x,
              duracionTotal: info.total,
              correctas: info.bien,
              errores: info.mal
          }, "raven", info.y+"");
          info.nav.pop();
     }

}

let info = new DeviceInfo4();
@IonicPage()
@Component({
  selector: 'page-juego-5-train',
  templateUrl: 'juego-5-train.html',
})
export class Juego_5TrainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider) {
       info.prueba = this.pruebaProvider;
          info.nav = this.navCtrl;
          info.numero = 2;
          info.x = [];

  }
        ionViewDidLeave() {

        clearInterval(info.t);
    }

  ionViewDidLoad() {
this.setTimer();
          $('#juego5').attr("style", "display:none");


          $('#figuraTest1').attr("src", 'assets/imgs/Raven/' + info.numero + '-01.png');
          $('#figuraTest2').attr("src", 'assets/imgs/Raven/' + info.numero + '-02.png');
          $('#figuraTest3').attr("src", 'assets/imgs/Raven/' + info.numero + '-03.png');
          $('#figuraTest4').attr("src", 'assets/imgs/Raven/' + info.numero + '-04.png');
          $('#figuraTest5').attr("src", 'assets/imgs/Raven/' + info.numero + '-07.png');
          $('#figuraTest6').attr("src", 'assets/imgs/Raven/' + info.numero + '-06.png');
          $('#figuraTest7').attr("src", 'assets/imgs/Raven/' + info.numero + '-05.png');

          $('#juego4').on('click', '.colors', function () {

               var ide = $(this).attr('id');
               if (ide === "color5") {
                    info.x[0] = "1";
                   info.bien++;
               } else {
                    info.x[0] = "0";
                   info.mal++;
               }
               info.numero++;
                 if (info.numero == 3) {
                      info.y++;
                     swal({
                          allowEscapeKey: false,
                          allowOutsideClick: false,
                          title: 'Felicidades, completaste el entrenamiento!',
                          type: 'info',
                          confirmButtonColor: '#f67b18',
                          confirmButtonText: 'Acepto'
                     }).then(info.juju);
                }
          });
  }
       setTimer() {
        info.t = setInterval(function () {
            info.total= info.total+100;
        }, 100);
    };
}
