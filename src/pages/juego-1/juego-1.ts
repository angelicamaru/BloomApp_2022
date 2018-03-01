import {
     Component
} from '@angular/core';
import {
     IonicPage,
     NavController,
     NavParams
} from 'ionic-angular';
import * as $ from 'jquery';
import swal, {
     SweetAlertOptions
} from 'sweetalert2';

/**
 * Generated class for the Juego_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class DeviceInfo3 {
     arriba = [];
     abajo = [];
     res = [];
     numero = 0;
     y = 0;
     c = 0;
     /*  prueba: PruebaProvider;
       nav: NavController;
       juju() {
            info.prueba.enviarPuntaje({
                 estado: "completed",
                 movTotales: info.y
            }, "stroop");
            info.nav.setRoot(HomePage);
       }*/

}

let info = new DeviceInfo3();


@IonicPage()
@Component({
     selector: 'page-juego-1',
     templateUrl: 'juego-1.html',
})
export class Juego_1Page {

     constructor(public navCtrl: NavController, public navParams: NavParams) {
          info.numero = 0;
     }

     ionViewDidLoad() {
          info.arriba = [["rojo", "green"], ["verde", "blue"], ["rojo", "green"]];
          info.abajo = [["azul", "blue"], ["rojo", "green"], ["rojo", "red"]];
          info.res = ["nob", "nob", "sib"];
          $('#color1').text(info.arriba[0][0]);
          $('#color1').css("color", info.arriba[0][1]);
          $('#color2').text(info.abajo[0][0]);
          $('#color2').css("color", info.abajo[0][1]);

          $('#botones').on('click', '.botoncitos', function () {

               var ide = $(this).attr('id');
               console.log(ide);
               if (ide == info.res[info.numero]) {

               }else{

               }
               info.numero++;
                    $('#color1').text(info.arriba[info.numero][0]);
                    $('#color1').css("color", info.arriba[info.numero][1]);
                    $('#color2').text(info.abajo[info.numero][0]);
                    $('#color2').css("color", info.abajo[info.numero][1]);
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
