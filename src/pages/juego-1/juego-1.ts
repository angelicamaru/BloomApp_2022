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
import { AlertController } from 'ionic-angular';
import {
     HomePage
} from '../home/home';

import {
     PruebaProvider
} from '../../providers/prueba/prueba';
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
     x :any;
      prueba: PruebaProvider;
       nav: NavController;
       juju() {
            info.prueba.enviarPuntaje({
                 estado: "completed",
                 movTotales: info.x
            }, "stroop");
            info.nav.setRoot(HomePage);
       }

}

let info = new DeviceInfo3();


@IonicPage()
@Component({
     selector: 'page-juego-1',
     templateUrl: 'juego-1.html',
})
export class Juego_1Page {

     constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider, private alertCtrl: AlertController) {
          info.prueba = this.pruebaProvider;
          info.nav = this.navCtrl;
          info.numero = 0;
          info.x =[];
     }

       ionViewCanLeave() {
          if (info.numero == 30) {
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

     ionViewDidLoad() {
          $('#y').attr("style", "display:none");
          $('#x').attr("style", "display:none");
          info.arriba = [["caballo", "green"], ["vaca", "blue"], ["correa", "green"], ["esfero", "green"], ["conejo", "yellow"], ["libro", "green"], ["nariz", "blue"], ["silla", "red"], ["cama", "green"], ["agua", "red"],

                        ["hoja", "yellow"], ["círculo", "red"], ["gato", "blue"], ["ocho", "yellow"],
                         ["mango", "green"], ["jugo", "red"], ["amigo", "blue"], ["auto", "green"],
                         ["lupa", "yellow"], ["música", "green"],

                         ["azul", "red"], ["rojo", "blue"], ["verde", "yellow"], ["rojo", "red"],
                         ["verde", "blue"], ["rojo", "green"], ["azul", "red"], ["amarillo", "green"],
                         ["verde", "yellow"], ["azul", "red"]
                        ];

          info.abajo = [["verde", "green"], ["rojo", "red"], ["rojo", "red"], ["verde", "green"],
                        ["azul", "blue"], ["amarillo", "yellow"], ["azul", "blue"], ["amarillo", "yellow"],
                        ["verde", "green"], ["rojo", "red"],

                       ["verde", "red"], ["azul", "yellow"], ["azul", "green"], ["amarillo", "blue"],
                        ["azul", "red"], ["rojo", "yellow"], ["azul", "red"], ["amarillo", "green"],
                        ["amarillo", "red"], ["verde", "blue"],

                        ["rojo", "yellow"], ["amarillo", "red"], ["azul", "green"], ["verde", "blue"],
                        ["azul", "red"], ["azul", "yellow"], ["rojo", "green"], ["verde", "blue"],
                        ["amarillo", "green"], ["azul", "red"]
                       ];

          info.res = ["sib", "nob", "nob", "sib",
                      "nob", "nob", "sib", "nob",
                      "sib", "sib",

                      "nob", "nob", "sib", "sib",
                      "nob", "sib", "sib", "nob",
                      "sib", "sib",

                      "sib", "nob", "nob", "nob",
                      "sib", "nob", "sib", "sib",
                      "sib", "nob"

                     ];
          $('#color1').text(info.arriba[0][0]);
          $('#color1').css("color", info.arriba[0][1]);
          $('#color2').text(info.abajo[0][0]);
          $('#color2').css("color", info.abajo[0][1]);

          $('#botones').on('click', '.botoncitos', function () {

               var ide = $(this).attr('id');
               console.log(ide);
               if (ide == info.res[info.numero]) {
                    info.x[info.numero]="1";
                    $('#x').attr("style", "display:inline-flex");
                    setTimeout(function () {
                         $('#x').attr("style", "display:none");
                    }, 500);
               } else {
                    info.x[info.numero]="0";
                    $('#y').attr("style", "display:inline-flex");
                    setTimeout(function () {
                         $('#y').attr("style", "display:none");
                    }, 500);
               }
               info.numero++;
                if (info.numero == 30) {
                    swal({
                         allowEscapeKey: false,
                         allowOutsideClick: false,
                         title: 'Felicidades, completaste la prueba!',
                         type: 'success',
                         confirmButtonColor: '#f67b18',
                         confirmButtonText: 'Siguiente Prueba'
                    }).then(info.juju);
               }else{
               $('#color1').text(info.arriba[info.numero][0]);
               $('#color1').css("color", info.arriba[info.numero][1]);
               $('#color2').text(info.abajo[info.numero][0]);
               $('#color2').css("color", info.abajo[info.numero][1]);}

          });

     }

}
