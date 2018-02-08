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
 * Generated class for the Juego_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class DeviceInfo2 {
    enun = [];
    res = [];
     numero=0;
     y :any;
     setInfo() {
          console.log("This is just a demo ...");
     }
}

let info = new DeviceInfo2();
// No more warning !


@IonicPage()
@Component({
     selector: 'page-juego-3',
     templateUrl: 'juego-3.html',
})
export class Juego_3Page {

     constructor(public navCtrl: NavController, public navParams: NavParams) {
info.numero = 0;


     }

     ionViewDidLoad() {


          info.enun = ["Toque el círculo rojo",
                       "Toque el cuadro verde",
                       "Toque el cuadro rojo",
                       "Toque el círculo amarillo",
                       "Toque el círculo azul",
                       "Toque el circulo verde",
                       "Toque el cuadro amarillo",
                       "Toque el circulo blanco",
                       "Toque el cuadro azul",
                       "Toque el cuadro blanco",
                       "Toque el círculo amarillo, pequeño",
                       "Toque el circulo verde, grande",
                       "Toque el circulo amarillo, grande",
                       "Toque el cuadro azul, grande",
                       "Toque el círculo verde, pequeño",
                       "Toque el círculo rojo, grande",
                       "Toque el cuadro blanco, grande",
                       "Toque el círculo azul, pequeño",
                       "Toque el cuadro verde, pequeño",
                       "Toque el circulo azul, grande"];
          $('#page-heading1').text(info.enun[0]);

          info.res = [["t15", "t17"],
                      ["t1", "t9"],
                      ["t3", "t7"],
                      ["t17","t8"],
                      ["t16","t18"],
                      ["t13","t20"],
                      ["t5","t8"],
                      ["t14","t16"],
                      ["t12","t19"],
                      ["t2","t6"],
                      ["t19"],
                      ["t1"]];

          $('#gridToken').on('click', '.tokenBot .figure', function () {
                var ide = $(this).attr('id');
          var len = info.res[info.numero].length;
                    for (var i = 0; i < len; i++) {
                         if (ide == info.res[info.numero][i]) {
                              info.numero++;
                               $('#page-heading1').text(info.enun[info.numero]);
                         }
                    }

          });

     }


}
