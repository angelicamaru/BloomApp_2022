import {
    Component, NgModule, NgModuleFactory
} from '@angular/core';
import {
    IonicPage,
    NavController,
    ViewController,
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
 * Generated class for the Juego_2_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class DeviceInfoH {
    name: boolean;
    navParent: any;
    movesR: number;
    movesW: number;
    prueba: PruebaProvider;
    y: any;
    x: any;
    t: any;
    now = 0;
    total = 0;
    resultados: any;

    stop() {
        clearInterval(info.t);

    }
}

let info = new DeviceInfoH();

@IonicPage()
@Component({
    selector: 'page-juego-2-2',
    templateUrl: 'juego-2-2.html',
})
export class Juego_2_2Page {

    private disksNum = 4; //se debe cambiar en la linea 131
    private $canves;
    private $tower;

    constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider, private view: ViewController, private alertCtrl: AlertController) {
        info.resultados = [];
        info.y = false;
        info.total=0;
        info.prueba = this.pruebaProvider;
        info.navParent = this.navCtrl;
        info.name = false;
        info.movesR = 0;
        info.movesW = 0;

    }

    ionViewCanLeave() {
        if (info.y) {
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
        info.x = null;
    }
    ionViewDidLoad() {
        this.holi();
    }
    ionViewWillEnter() {
        // Part 1:
        this.view.showBackButton(false);
    };

    holi() {

        this.initGame(1);
        this.setTimer();
        var moves = 0;
        var countW = 0;
        var holding = [];

        // Event Handlers
        $('#canves').on('click', '.tower', function () {
            var $topDisk = $(this).get(0).lastChild;
            var topDiskValue = $($topDisk).data('value');
            var $holdingDisk = $('#canves').find('.hold');
            if ($(this).children().length === 0 && $($holdingDisk).length === 0) {

            } else {
                if ($($holdingDisk).length !== 0) {
                    if (topDiskValue === holding[0]) {
                        $($holdingDisk).removeClass('hold');
                    } else if (topDiskValue === undefined || topDiskValue > holding[0]) {
                        $($holdingDisk).remove();
                        $(this).append($('<li class="disk disk-' + holding[0] + '" data-value="' + holding[0] + '"></li>'));

                        moves++;
                        info.resultados[moves + countW] = ["1", info.now];
                        info.now = 0;
                    } else {

                        countW++;
                        info.resultados[moves + countW] = ["0", info.now];
                        info.now = 0;
                    }
                } else if ($topDisk.length !== 0) {
                    $($topDisk).addClass('hold');
                    holding[0] = topDiskValue;
                }
            }

            info.movesR = moves;
            info.movesW = countW;

            if (($('#tower-3')).children().length === 4) {
                clearInterval(info.t);
                info.stop;
                info.y = true;
                swal({
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    title: 'Felicidades, completaste la prueba!',
                    type: 'success',
                    confirmButtonColor: '#f67b18',
                    confirmButtonText: 'Siguiente Prueba'
                }).then(function (isConfirm) {
                    if (isConfirm) {
                        info.prueba.enviarPuntaje({
                            estado: "completed2",
                            movFallidos: info.movesW,
                            movAcertados: info.movesR,
                            duracionTotal: info.total,
                            movTotales: info.resultados
                        }, "hanoi2");
                        info.navParent.setRoot(HomePage);
                    }
                });
            }

        });
    };
    setTimer() {
        info.now = 0;
        info.total = 0;
        info.t = setInterval(function () {
            info.now = info.now + 100;
            info.total = info.total + 100;
        }, 100);
    };

    // Init Game
    initGame(tower) {
        this.$canves = $('#canves');
        this.$tower = this.$canves.find('.tower');
        this.$tower.html('');
        for (var i = 1; i <= 4; i++) {
            $("#tower-" + tower).prepend($('<li class="disk disk-' + i + '" data-value="' + i + '"></li>'));
        }
    };

}
