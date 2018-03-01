import {
     Component
} from '@angular/core';
import {
     IonicPage,
     NavController,
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
     PruebaProvider
} from '../../providers/prueba/prueba';

/**
 * Generated class for the Juego_5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class DeviceInfo4 {
     enun = [];
     res = [];
     numero = 0;
     y = 0;
     c = 0;
     prueba: PruebaProvider;
     nav: NavController;
     juju() {
          info.prueba.enviarPuntaje({
               estado: "completed",
               movTotales: info.y
          }, "raven");
          info.nav.setRoot(HomePage);
     }

}

let info = new DeviceInfo4();

@IonicPage()
@Component({
     selector: 'page-juego-5',
     templateUrl: 'juego-5.html',
})
export class Juego_5Page {

     constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider) {
          info.numero = 1;
     }

     ionViewDidLoad() {

          info.res = ["color1", "color1", "color1", "color1", "color4", "color4", "color3", "color1", "color4", "color4", "color1"];

          $('#figuraTest1').attr("src", 'assets/imgs/Raven/' + info.numero + '-01.png');
          $('#figuraTest2').attr("src", 'assets/imgs/Raven/' + info.numero + '-02.png');
          $('#figuraTest3').attr("src", 'assets/imgs/Raven/' + info.numero + '-03.png');
          $('#figuraTest4').attr("src", 'assets/imgs/Raven/' + info.numero + '-04.png');
          $('#figuraTest5').attr("src", 'assets/imgs/Raven/' + info.numero + '-05.png');
          $('#figuraTest6').attr("src", 'assets/imgs/Raven/' + info.numero + '-06.png');
          $('#figuraTest7').attr("src", 'assets/imgs/Raven/' + info.numero + '-07.png');

          $('#juego4').on('click', '.colors', function () {

               var ide = $(this).attr('id');
               console.log(ide);
               if (ide == info.res[info.numero]) {

               } else {

               }
               info.numero++;
               $('#figuraTest1').attr("src", 'assets/imgs/Raven/' + info.numero + '-01.png');
          $('#figuraTest2').attr("src", 'assets/imgs/Raven/' + info.numero + '-02.png');
          $('#figuraTest3').attr("src", 'assets/imgs/Raven/' + info.numero + '-03.png');
          $('#figuraTest4').attr("src", 'assets/imgs/Raven/' + info.numero + '-04.png');
          $('#figuraTest5').attr("src", 'assets/imgs/Raven/' + info.numero + '-05.png');
          $('#figuraTest6').attr("src", 'assets/imgs/Raven/' + info.numero + '-06.png');
          $('#figuraTest7').attr("src", 'assets/imgs/Raven/' + info.numero + '-07.png');




               /* if (info.numero == 20) {
                     swal({
                          allowEscapeKey: false,
                          allowOutsideClick: false,
                          title: 'Felicidades, completaste la prueba!',
                          type: 'success',
                          confirmButtonColor: '#f67b18',
                          confirmButtonText: 'Siguiente Prueba'
                     }).then(info.juju);
                }*/
          });
     }

}
