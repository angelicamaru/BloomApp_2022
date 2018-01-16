import {
    Component
} from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams
} from 'ionic-angular';

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
    constructor(public navCtrl: NavController, public navParams: NavParams) {



        this.ides = this.navParams.get('juego');
    }


    ionViewDidLoad() {
        var links = ["assets/imgs/juegos1.png","assets/imgs/juegos2.png","assets/imgs/juegos3.png","assets/imgs/juegos4.png","assets/imgs/juegos5.png"];
        var textos = [
                  "En este juego debe indicar si el color de la tinta de la palabra de abajo corresponde al nombre del color escrito arriba. \n En este caso la respuesta es sí. Ya que la palabra de arriba indica el color AMARILLO y la palabra de abajo está con tinta de color AMARILLO.",
                  "El objetivo de este juego es trasladar los discos del soporte de la izquierda al soporte de la derecha respetando estas dos reglas: 1. Solo se puede mover un disco a la vez. \n 2. No se puede colocar un disco sobre otro disco más pequeño. Se debe colocar sobre uno más grande.",
                  "Existe una regla para clasificar las cartas que aparecen en pantalla, usted debe descifrar cual es y seguirla. Aparecerá una carta y usted podrá indicar si sigue o no la regla, en cualquier caso se le indicara si su respuesta es correcta, así podrá determinar el patrón y descifrar la regla.","Presione la figura que se le indique","Seleccione la pieza faltante en la figura."];

        $('#textoPrueba').append('<p>'+textos[this.ides-1]+'</p>');
        console.log(this.ides);
        $('#imagenJuego').attr('src',links[this.ides-1]);


    }



}
