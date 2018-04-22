import {
    Component
} from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams
} from 'ionic-angular';

import {
     PruebaProvider
} from '../../providers/prueba/prueba';

import * as $ from 'jquery';

/**
 * Generated class for the ExplainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-explain',
    templateUrl: 'explain.html',
})
export class ExplainPage {

private ides: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public pruebaProvider: PruebaProvider) {

        this.ides = this.navParams.get('juego');
    }
    ionViewDidLoad() {
        var links = ["assets/imgs/juegos1.jpg","assets/imgs/juegos2.png","assets/imgs/juegos3.png","assets/imgs/juegos4.jpg","assets/imgs/juegos5.jpg"];
        var textos = [
                  "En este juego debe indicar si el color de la tinta de la palabra de arriba corresponde al nombre del color escrito abajo. \n En este caso la respuesta es no. Ya que la palabra de abajo dice AZUL y la palabra de arriba está con tinta de color VERDE.",
                  "El objetivo de este juego es trasladar los discos del soporte de la izquierda al soporte de la derecha respetando estas dos reglas: 1. Solo se puede mover un disco a la vez. \n 2. No se puede colocar un disco sobre otro disco más pequeño. Se debe colocar sobre uno más grande.","Presione la figura que se le indique",
                  "Hay cuatro cartas de clasificación ubicadas en la parte inferior de la pantalla, usted debe descifrar a cuál de esas pilas de cartas pertenece la carta de arriba, puede ser por color, número de elementos o forma. Se le indicará si su selección fue correcta o incorrecta, el objetivo es clasificar correctamente el mayor número de cartas","Seleccione la pieza faltante en la figura."];
        $('#textoPrueba').append('<p>'+textos[this.ides-1]+'</p>');
        $('#imagenJuego').attr('src',links[this.ides-1]);
    }
     goToJuego(){
          this.pruebaProvider.cambiarEstado("onProgress", this.ides);
          this.navCtrl.push('Juego_'+this.ides+'Page');
     }
     goToTrain(){
           this.navCtrl.push('Juego_'+this.ides+'TrainPage');
     }

}
