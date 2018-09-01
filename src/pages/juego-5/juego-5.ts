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
    AlertController
} from 'ionic-angular';


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
    t: any;
    total = 0;
    bien = 0;
    mal = 0;
    x: any;
    prueba: PruebaProvider;
    nav: NavController;
    juju() {
        info.prueba.enviarPuntaje({
            estado: "completed",
            movTotales: info.x,
            duracionTotal: info.total,
            correctas: info.bien,
            errores: info.mal
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

    constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider, private alertCtrl: AlertController) {
        info.prueba = this.pruebaProvider;
        info.nav = this.navCtrl;
        info.numero = 1;
        info.mal = 0;
        info.bien = 0;
        info.x = [];
    }

    ionViewCanLeave() {
        if (info.numero == 61) {
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

        clearInterval(info.t);
    }

    ionViewDidLoad() {
        swal({
            text: "¿Había realizado esta prueba/ejercicio antes?",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, ya la he realizado',
            cancelButtonText: 'No, no la he realizado'
        }).then((result) => {
            if (result.value) {
                info.prueba.enviarAnteriormente("raven", "si");
            } else {
                info.prueba.enviarAnteriormente("raven", "no");
            }
        })
        this.setTimer();
        $('#juego5').attr("style", "display:none");

        info.res = ["color4", "color5", "color1", "color2", "color6", "color3", "color6", "color2", "color1", "color3", "color5", "color4",

                    "color2", "color6", "color1", "color2", "color1", "color3", "color5", "color6", "color4", "color3", "color4", "color5",

                      "color8", "color2", "color3", "color8", "color7", "color4", "color5", "color1", "color7", "color6", "color1", "color2",

                      "color3", "color4", "color3", "color7", "color8", "color6", "color5", "color4", "color1", "color2", "color5", "color6",

                      "color7", "color6", "color8", "color2", "color1", "color5", "color2", "color4", "color1", "color6", "color3", "color5"];

        $('#figuraTest1').attr("src", 'assets/imgs/Raven/' + info.numero + '-01.png');
        $('#figuraTest2').attr("src", 'assets/imgs/Raven/' + info.numero + '-02.png');
        $('#figuraTest3').attr("src", 'assets/imgs/Raven/' + info.numero + '-03.png');
        $('#figuraTest4').attr("src", 'assets/imgs/Raven/' + info.numero + '-04.png');
        $('#figuraTest5').attr("src", 'assets/imgs/Raven/' + info.numero + '-07.png');
        $('#figuraTest6').attr("src", 'assets/imgs/Raven/' + info.numero + '-06.png');
        $('#figuraTest7').attr("src", 'assets/imgs/Raven/' + info.numero + '-05.png');


        $('#juego5').on('click', '.colors3', function () {

            var ide = $(this).attr('id');
            if (ide == info.res[info.numero - 1]) {
                info.x[info.numero - 1] = "1";
                info.bien++;
            } else {
                info.x[info.numero - 1] = "0";
                info.mal++;
            }
            info.numero++;
            if (info.numero == 61) {
                swal({
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    title: 'Felicidades, completaste la prueba!',
                    type: 'warning',
                    confirmButtonColor: '#f67b18',
                    confirmButtonText: 'Siguiente Prueba'
                }).then(info.juju);
            }
            $('#figuraTest1').attr("src", 'assets/imgs/Raven/' + info.numero + '-01.png');
            $('#figuraTest8').attr("src", 'assets/imgs/Raven/' + info.numero + '-02.png');
            $('#figuraTest9').attr("src", 'assets/imgs/Raven/' + info.numero + '-03.png');
            $('#figuraTest10').attr("src", 'assets/imgs/Raven/' + info.numero + '-04.png');
            $('#figuraTest11').attr("src", 'assets/imgs/Raven/' + info.numero + '-05.png');
            $('#figuraTest12').attr("src", 'assets/imgs/Raven/' + info.numero + '-09.png');
            $('#figuraTest13').attr("src", 'assets/imgs/Raven/' + info.numero + '-08.png');
            $('#figuraTest14').attr("src", 'assets/imgs/Raven/' + info.numero + '-07.png');
            $('#figuraTest15').attr("src", 'assets/imgs/Raven/' + info.numero + '-06.png');


        });


        $('#juego4').on('click', '.colors', function () {

            var ide = $(this).attr('id');
            if (ide == info.res[info.numero - 1]) {
                info.x[info.numero - 1] = "1";
                info.bien++;
            } else {
                info.x[info.numero - 1] = "0";
                info.mal++;
            }
            info.numero++;
            $('#figuraTest1').attr("src", 'assets/imgs/Raven/' + info.numero + '-01.png');
            $('#figuraTest2').attr("src", 'assets/imgs/Raven/' + info.numero + '-02.png');
            $('#figuraTest3').attr("src", 'assets/imgs/Raven/' + info.numero + '-03.png');
            $('#figuraTest4').attr("src", 'assets/imgs/Raven/' + info.numero + '-04.png');
            $('#figuraTest5').attr("src", 'assets/imgs/Raven/' + info.numero + '-07.png');
            $('#figuraTest6').attr("src", 'assets/imgs/Raven/' + info.numero + '-06.png');
            $('#figuraTest7').attr("src", 'assets/imgs/Raven/' + info.numero + '-05.png');
            if (info.numero >= 25) {
                $('#juego4').attr("style", "display:none");
                $('#juego5').attr("style", "display:inline-flex");
                $('#figuraTest1').attr("src", 'assets/imgs/Raven/' + info.numero + '-01.png');
                $('#figuraTest8').attr("src", 'assets/imgs/Raven/' + info.numero + '-02.png');
                $('#figuraTest9').attr("src", 'assets/imgs/Raven/' + info.numero + '-03.png');
                $('#figuraTest10').attr("src", 'assets/imgs/Raven/' + info.numero + '-04.png');
                $('#figuraTest11').attr("src", 'assets/imgs/Raven/' + info.numero + '-05.png');
                $('#figuraTest12').attr("src", 'assets/imgs/Raven/' + info.numero + '-09.png');
                $('#figuraTest13').attr("src", 'assets/imgs/Raven/' + info.numero + '-08.png');
                $('#figuraTest14').attr("src", 'assets/imgs/Raven/' + info.numero + '-07.png');
                $('#figuraTest15').attr("src", 'assets/imgs/Raven/' + info.numero + '-06.png');
            }
        });


    }



    setTimer() {
        info.t = setInterval(function () {
            info.total = info.total + 100;
        }, 100);
    };
}
