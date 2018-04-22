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
import {
     AlertController
} from 'ionic-angular';

/**
 * Generated class for the Juego_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class DeviceInfo2 {
     enun = [];
     res = [];
     numero = 0;
     y: any;
     c = 0;
     cero = 0;
     ya = false;
     prueba: PruebaProvider;
     nav: NavController;
     juju() {
          info.prueba.enviarPuntaje({
               estado: "completed",
               movTotales: info.y
          }, "token");
          info.nav.setRoot(HomePage);
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

     constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider, private alertCtrl: AlertController) {
          info.numero = 0;
          info.prueba = this.pruebaProvider;
          info.nav = this.navCtrl;
          info.y = [];
          info.c = 0;

     }

     ionViewCanLeave() {
          if (info.numero == 36) {
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

          info.enun = ["Toque un círculo",
                       "Toque un cuadrado",
                       "Toque una ficha amarilla",
                       "Toque una roja",
                       "Toque una azul",
                       "Toque una verde",
                       "Toque una blanca",

                       "Toque el cuadrado amarillo",
                       "Toque el círculo verde",
                       "Toque el circulo azul",
                       "Toque el cuadrado blanco",

                       "Toque el círculo blanco pequeño",
                       "Toque el cuadrado amarillo grande",
                       "Toque el cuadrado verde grande",
                       "Toque el círculo azul pequeño",

                       "Toque el círculo rojo y luego el cuadrado verde",
                       "Toque el cuadrado amarillo y luego el cuadrado azul",
                       "Toque el cuadrado blanco, luego el círculo verde",
                       "Toque el circulo blanco y luego círculo rojo",

                       "Toque el círculo blanco grande y luego el cuadrado verde pequeño",
                       "Toque el círculo azul pequeño, luego el cuadrado amarillo grande",
                       "Toque el cuadrado verde grande y luego el cuadrado rojo grande",
                       "Toque el cuadrado blanco grande y luego el círculo verde pequeño",

                       "Toque el círculo rojo y luego el cuadrado verde",
                       "Toque el círculo azul, luego el cuadrado rojo",
                       "Toque el círculo rojo, luego el cuadrado azul",
                       "Toque el cuadrado verde, luego el cuadrado amarillo",
                       "Además de tocar el círculo amarillo, toque el círculo azul",
                       "Toque el círculo azul o el cuadrado rojo",
                       "Si hay un círculo azul, toque el cuadrado rojo",
                       "Toque la figura que está a la derecha del círculo rojo",
                       "Toque la figura que está a la izquierda del cuadrado verde",
                       "Toque la figura entre el cuadrado azul y el cuadrado blanco",
                       "Toque la segunda figura después del circulo azul",
                       "Toque el círculo rojo, ¡No!, el cuadrado blanco",
                       "En lugar del cuadrado blanco, toque el círculo amarillo"
                      ];
          $('#page-heading1').text(info.enun[info.numero]);

          info.res = [["t15", "t17", "t11", "t12", "t14", "t13", "t16", "t18", "t19", "t20"],
                      ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10"],
                      ["t13", "t5", "t18", "t6"],
                      ["t11", "t2", "t19", "t8"],
                      ["t1", "t12", "t17", "t9"],
                      ["t7", "t20", "t15", "t4"],
                      ["t14", "t3", "t16", "t10"],
                      ["t5"],
                      ["t15"],
                      ["t12"],
                      ["t3"],
                      ["t16"],
                      ["t5"],
                      ["t4"],
                      ["t17"],
                      ["t11", "t4"],
                      ["t5", "t1"],
                      ["t3", "t15"],
                      ["t14", "t11"],

                      ["t14", "t7"],
                      ["t17", "t5"],
                      ["t4", "t2"],
                      ["t3", "t20"],

                      ["t11", "t4"],
                      ["t12", "t2"],
                      ["t11", "t1"],
                      ["t4", "t5"],
                      ["t13", "t12"],
                      ["t12", "t2"],
                      ["t2"],
                      ["t12"],
                      ["t3"],
                      ["t2"],
                      ["t14"],
                      ["t3"],
                      ["t13"]
                     ];

          $('#gridToken').on('click', '.tokenBot .figure', function () {

               var ide = $(this).attr('id');
               var len = info.res[info.numero].length;
               var si = false;

               if (info.numero > 27) {
                    console.log("27.0.......");
                    for (var i = 0; i < len; i++) {
                         if (ide == info.res[info.numero][i]) {
                              info.y[info.numero] = "1";
                              console.log("uno");
                         } else {
                              console.log("cero");
                              info.y[info.numero] = "0";
                         }
                    }
                    info.numero++;
                    $('#page-heading1').text(info.enun[info.numero]);
               }

               if (info.numero >= 19 && info.numero < 28) {
                    console.log("28.0.......");
                    if (ide == info.res[info.numero][info.c]) {
                         si = true;
                         info.c++;
                         console.log(info.c);
                    } else {
                         info.y[info.numero] = "0";
                         console.log("cero");
                         info.c = 0;
                         info.numero++;
                         $('#page-heading1').text(info.enun[info.numero]);
                    }
                    if (info.c == 2) {
                         info.c = 0;
                         info.y[info.numero] = "1";
                         console.log("uno");
                         info.numero++;
                         $('#page-heading1').text(info.enun[info.numero]);
                    }

                    if (info.numero < 23) {
                         $('.containTokenPeque').attr("style", "display:absolute");
                    } else {
                         $('.containTokenPeque').attr("style", "display:none");
                    }
               }


               if (info.numero > 14 && info.numero < 19) {

                    if (ide == info.res[info.numero][info.c]) {
                         si = true;
                         info.c++;
                         console.log(info.c + " bien");
                    } else {
                         info.cero++;
                         console.log("mal" + info.cero);

                    }

                    if (info.c == 2) {

                         info.c = 0;
                         if (info.cero == 0) {

                              info.y[info.numero] = "1";
                              console.log("uno");
                         } else if (info.cero == 1) {
                              info.cero = 0;
                              info.y[info.numero] = "0.5";
                              console.log("0.5");
                         } else {
                              info.cero = 0;
                              info.y[info.numero] = "0";
                              console.log("cero");
                         }
                         info.numero++;
                         $('#page-heading1').text(info.enun[info.numero]);
                    }
                    if (info.numero == 19) {
                         $('.containTokenPeque').attr("style", "display:absolute");
                    }

               }
               if (info.numero <= 14) {

                    for (var i = 0; i < len; i++) {
                         if (ide == info.res[info.numero][i]) {
                              si = true;
                         }
                    }
                    if (!si) {
                         info.c++;
                    } else {
                         if (info.c == 0) {
                              console.log("uno");
                              info.y[info.numero] = "1";

                              info.numero++;
                              $('#page-heading1').text(info.enun[info.numero]);
                         } else {
                              if (info.c == 1) {
                                   info.y[info.numero] = "0.5";
                                   console.log("0.5");
                                   info.numero++;
                                   $('#page-heading1').text(info.enun[info.numero]);
                                   info.c = 0;
                              } else {
                                   info.y[info.numero] = "0";
                                   info.c = 0;
                                   console.log("cero");
                                   info.numero++;
                                   $('#page-heading1').text(info.enun[info.numero]);
                              }
                         }
                    }
                    if (info.numero < 7 || info.numero > 10) {

                         $('.containTokenPeque').attr("style", "display:absolute");

                    } else {

                         $('.containTokenPeque').attr("style", "display:none");
                    }
                    if (info.numero == 15) {
                         $('.containTokenPeque').attr("style", "display:none");
                    }
               }

               console.log(info.numero);
               if (info.numero == 36) {
                    swal({
                         allowEscapeKey: false,
                         allowOutsideClick: false,
                         title: 'Felicidades, completaste la prueba!',
                         type: 'success',
                         confirmButtonColor: '#f67b18',
                         confirmButtonText: 'Siguiente Prueba'
                    }).then(info.juju);
               }
          });

     }



}
