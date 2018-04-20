import {
     Component
} from '@angular/core';
import {
     IonicPage,
     NavController,
     NavParams
} from 'ionic-angular';
import * as $ from 'jquery';
import {
     AlertController
} from 'ionic-angular';
import swal, {
     SweetAlertOptions
} from 'sweetalert2';

import {
     PruebaProvider
} from '../../providers/prueba/prueba';

/**
 * Generated class for the Juego_1TrainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {
     HomePage
} from '../home/home';

class DeviceInfo6 {
     arriba = [];
     abajo = [];
     res = [];
     numero = 0;
     x: any;
     prueba: PruebaProvider;
     nav: NavController;
     juju() {
          info.nav.pop();
     }


}

let info = new DeviceInfo6();

@IonicPage()
@Component({
     selector: 'page-juego-1-train',
     templateUrl: 'juego-1-train.html',
})
export class Juego_1TrainPage {

     constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider, public alertCtrl: AlertController) {
          info.prueba = this.pruebaProvider;
          info.nav = this.navCtrl;
          info.numero = 0;
          info.x = 0;
     }

     ionViewDidLoad() {

          // swal("¿El color de la palabra de arriba coincide con el nombre del color escrito abajo?");
          $('#y').attr("style", "display:none");
          $('#x').attr("style", "display:none");
          info.arriba = [["círculo", "red"], ["gato", "blue"], ["ocho", "yellow"],
                         ["azul", "red"], ["rojo", "blue"]];

          info.abajo = [["azul", "yellow"], ["azul", "green"], ["amarillo", "blue"],
                        ["rojo", "yellow"], ["amarillo", "red"]];

          info.res = ["nob", "sib", "sib",
                      "sib", "nob"];

          $('#color1').text(info.arriba[0][0]);
          $('#color1').css("color", info.arriba[0][1]);
          $('#color2').text(info.abajo[0][0]);
          $('#color2').css("color", info.abajo[0][1]);
          var texto = "¿La palabra de arriba: '" + info.arriba[info.numero][0] + "' está escrita con el nombre del color escrito abajo: '" + info.abajo[info.numero][0] + "' ?";
          $('#texto').text(texto);

          $('#botones').on('click', '.botoncitos', function () {

               var ide = $(this).attr('id');
               console.log(ide);
               if (ide == info.res[info.numero]) {
                    info.x++;
                    $('#x').attr("style", "display:inline-flex");
                    setTimeout(function () {
                         $('#x').attr("style", "display:none");
                    }, 500);
               } else {
                    $('#y').attr("style", "display:inline-flex");
                    setTimeout(function () {
                         $('#y').attr("style", "display:none");
                    }, 500);
               }
               info.numero++;
               if (info.numero == 5) {
                    if (info.x < 4) {
                         swal({
                              allowEscapeKey: false,
                              allowOutsideClick: false,
                              title: 'Vuelve a intentarlo!',
                              type: 'warning',
                              confirmButtonColor: '#f67b18',
                              confirmButtonText: 'De nuevo'
                         });
                         info.x = 0;
                         info.numero = 0;
                         $('#color1').text(info.arriba[0][0]);
                         $('#color1').css("color", info.arriba[0][1]);
                         $('#color2').text(info.abajo[0][0]);
                         $('#color2').css("color", info.abajo[0][1]);
                         var texto = "¿La palabra de arriba: '" + info.arriba[info.numero][0] + "' está escrita con el nombre del color escrito abajo: '" + info.abajo[info.numero][0] + "' ?";
                         $('#texto').text(texto);
                    } else {
                         swal({
                              allowEscapeKey: false,
                              allowOutsideClick: false,
                              title: 'Felicidades, completaste el entrenamiento!',
                              type: 'success',
                              confirmButtonColor: '#f67b18',
                              confirmButtonText: 'Realizar Prueba'
                         }).then(info.juju);
                    }

               } else {
                    var texto2 = "¿La palabra de arriba: '" + info.arriba[info.numero][0] + "' está escrita con el nombre del color escrito abajo: '" + info.abajo[info.numero][0] + "' ?";
                    $('#texto').text(texto2);

                    $('#color1').text(info.arriba[info.numero][0]);
                    $('#color1').css("color", info.arriba[info.numero][1]);
                    $('#color2').text(info.abajo[info.numero][0]);
                    $('#color2').css("color", info.abajo[info.numero][1]);
               }

          });
     }

}
