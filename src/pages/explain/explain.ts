import {
     Component
} from '@angular/core';
import {
     IonicPage,
     NavController,
     NavParams
} from 'ionic-angular';
import swal, {
     SweetAlertOptions
} from 'sweetalert2';
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
          var links = ["./assets/imgs/juegos-1.png", "./assets/imgs/juegos-2.png", "./assets/imgs/juegos-3.png", "./assets/imgs/juegos-4.png", "./assets/imgs/juegos-5.png"];
          var textos = [
                  "En este juego debe indicar si el color de la tinta de la palabra de arriba corresponde al nombre del color escrito abajo. \n En este caso la respuesta es no. Ya que la palabra de abajo dice AZUL y la palabra de arriba está con tinta de color VERDE.",
                  "El objetivo de este juego es trasladar los discos del soporte 'a' al soporte 'c' con la menor cantidad de movimientos posibles respetando las siguientes reglas: 1. Solo se puede mover un disco a la vez. \n 2. No se puede colocar un disco grande sobre otro disco más pequeño. Se debe colocar sobre uno más grande.", "Presione la figura que se le indique",
                  "Hay cuatro cartas distintas ubicadas en la parte inferior de la pantalla, su trabajo es seleccionar cuál carta se relaciona mejor con la carta de la parte superior según una clasificacion, puede ser por color, forma o número de elementos. Existirá una regla para clasificar las cartas y usted debe adivinar dicha regla, tenga en cuenta que esta puede variar sin aviso, por lo que tendrá que descifrar de nuevo la regla secreta. Se le indicará si su selección fue correcta o incorrecta, el objetivo es clasificar correctamente el mayor número de cartas", "Seleccione la pieza faltante en la figura."];
          $('#textoPrueba').append('<p>' + textos[this.ides - 1] + '</p>');
          $('#imagenJuego').attr('src', links[this.ides - 1]);
     }
     goToJuego() {
          var un = "entrenamiento";
          var res = "";
          this.pruebaProvider.isUndone(this.ides).then(result => {
               res = result.toString();
               if (res === un) {
                    this.pruebaProvider.cambiarEstado("onProgress", this.ides);
                   this.navCtrl.push('Juego_' + this.ides + 'Page');
               } else {
                    swal({
                         allowEscapeKey: false,
                         allowOutsideClick: false,
                         title: 'Debes completar el entrenamiento!',
                         type: 'warning',
                         confirmButtonColor: '#f67b18',
                         confirmButtonText: 'Entrenar'
                    });
               }
          });
     }
     goToTrain() {
          this.pruebaProvider.cambiarEstado("entrenamiento", this.ides);
          this.navCtrl.push('Juego_' + this.ides + 'TrainPage');
     }
}
