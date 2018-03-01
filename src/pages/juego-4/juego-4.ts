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
 * Generated class for the Juego_4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class DeviceInfo5 {
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
          }, "winsonsin");
          info.nav.setRoot(HomePage);
     }

}

let info = new DeviceInfo5();

@IonicPage()
@Component({
     selector: 'page-juego-4',
     templateUrl: 'juego-4.html',
})
export class Juego_4Page {

     constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider) {
          info.numero = 0;
     }

     ionViewDidLoad() {
          info.enun = ["redcross3", "redcross1", "redtriangle2", "redcross4", "bluetriangle1", "bluecross1", "yellowcross3", "redstar3", "bluecross3", "bluecircle1", "redcircle3",

                      "redcircle1","bluecross4","bluecircle4","greentriangle3","yellowcross2","greenstar3","yellowstar3","yellowstar1","bluetriangle3","yellowstar2","bluestar2",

                      ];
          info.res = ["color1", "color1", "color1", "color1", "color4", "color4", "color3", "color1", "color4", "color4", "color1",

                     "color4","color3","color4","color1","color3","color2","color2","color2","color1","color2","color2",

                     ];

          $('#figuraTest').attr("src", 'assets/imgs/Wisconsin/' + info.enun[0] + '.gif');
          $('#juego4').on('click', '.colors', function () {

               var ide = $(this).attr('id');

               if (ide == info.res[info.numero]) {

               } else {

               }
               info.numero++;
               $('#figuraTest').attr("src", 'assets/imgs/Wisconsin/' + info.enun[info.numero] + '.gif');



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
