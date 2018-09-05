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
    AlertController
} from 'ionic-angular';

import {
    PruebaProvider
} from '../../providers/prueba/prueba';
/**
 * Generated class for the Juego_4TrainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class DeviceInfo5 {
    enun = [];
    res = [];
    clasificacion = [];
    numero = 0;
    y = false;
    x: any;
    now = 0;
    bien = 0;
    mal = 0;
    total = 0;
    t: any;
    z = 0;
    x2: any;
    prueba: PruebaProvider;
    nav: NavController;
    juju() {
        info.prueba.enviarEntrenamiento({
            movTotales: info.x,
            duracionTotal: info.total,
            correctas: info.bien,
            errores: info.mal
        }, "wisconsin", info.z + "");
        if (info.x2 < 5) {
        info.bien=0;
        info.mal=0;
        info.total=0;} else {
            info.nav.pop();
        }
    }

}

let info = new DeviceInfo5();
@IonicPage()
@Component({
    selector: 'page-juego-4-train',
    templateUrl: 'juego-4-train.html',
})
export class Juego_4TrainPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider) {
info.bien=0;

        info.prueba = this.pruebaProvider;
        info.nav = this.navCtrl;
        info.numero = 0;
        info.y = false;
        info.x = [];
        info.bien=0;
        info.mal=0;
        info.total=0;
        info.x2 = 0;
    }

    ionViewDidLeave() {

        clearInterval(info.t);
    }
    ionViewDidLoad() {
        this.setTimer();
        $('#y').attr("style", "display:none");
        $('#x').attr("style", "display:none");
        info.enun = ["bluecircle1", "yellowstar1", "greenstar4", "bluecross3", "greentriangle2", "redcircle2"];
        info.clasificacion = ["FORMA", "COLOR", "CANTIDAD", "COLOR", "FORMA", "CANTIDAD"]

        info.res = ["color4", "color3", "color4", "color4", "color1", "color2"];
        $('#figuraTest').attr("src", 'assets/imgs/Wisconsin/' + info.enun[0] + '.gif');
        $('#clasificacion').text("Supongamos que la regla de clasificación es por " + info.clasificacion[info.numero]);
        $('#juego4').on('click', '.colors', function () {

            var ide = $(this).attr('id');

            if (ide == info.res[info.numero]) {
                info.x[info.numero] = ["1", info.now, info.clasificacion[info.numero]];
                info.x2++;
                info.bien++;
                $('#x').attr("style", "display:inline-flex");
                setTimeout(function () {
                    $('#x').attr("style", "display:none");
                    info.now = 0;
                }, 500);
            } else {
                info.x[info.numero] = ["0", info.now, info.clasificacion[info.numero]];

                info.mal++;
                $('#y').attr("style", "display:inline-flex");
                setTimeout(function () {
                    $('#y').attr("style", "display:none");
                    info.now = 0;
                }, 500);

            }
            info.numero++;
          $('#figuraTest').attr("src", 'assets/imgs/Wisconsin/' + info.enun[info.numero] + '.gif');
               $('#clasificacion').text("Supongamos que la regla de clasificación es por " + info.clasificacion[info.numero]);
            if (info.numero == 6) {
                info.z++;
                if (info.x2 < 5) {
                    swal({
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        title: 'Vuelve a intentarlo!',
                        type: 'warning',
                        confirmButtonColor: '#f67b18',
                        confirmButtonText: 'De nuevo'
                    }).then(info.juju);
                    info.x2 = 0;
                    info.numero = 0;
                    $('#figuraTest').attr("src", 'assets/imgs/Wisconsin/' + info.enun[0] + '.gif');
                    $('#clasificacion').text("Supongamos que la regla de clasificación es por " + info.clasificacion[info.numero]);
                } else {

                    swal({
                        allowEscapeKey: false,
                        allowOutsideClick: false,
                        title: 'Felicidades, completaste el entrenamiento!',
                        type: 'success',
                        confirmButtonColor: '#f67b18',
                        confirmButtonText: 'Empezar la prueba'
                    }).then(info.juju);
                }
            }
        });
    }
    setTimer() {
        info.now = 0;
        info.t = setInterval(function () {
            info.now = info.now + 100;
            info.total = info.total + 100;
        }, 100);
    };
}
