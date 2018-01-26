import {
     HttpClient
} from '@angular/common/http';
import {
     Injectable
} from '@angular/core';
import firebase from 'firebase';


/*
  Generated class for the PruebaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PruebaProvider {

     constructor(public http: HttpClient) {
          console.log('Hello PruebaProvider Provider');
     }
     enviarPuntaje(puntaje: any, prueba: string): Promise < any > {
          var uid = firebase.auth().currentUser.uid;
          return firebase.database().ref(`/usuarios/${uid}/${prueba}`).set(puntaje);
     }
     ponerEstado(prueba: string): Promise < any > {
          var uid = firebase.auth().currentUser.uid;
          return firebase.database().ref(`/usuarios/${uid}/${prueba}/estado`).set("undone");
     }
     cambiarEstado(estado: string, prueba: number): Promise < any > {
          var arr = ["stroop", "hanoi", "token", "wisconsin", "raven"];
          var prueba2 = arr[prueba - 1];
          var uid = firebase.auth().currentUser.uid;
          return firebase.database().ref(`/usuarios/${uid}/${prueba2}`).update({
               estado: estado
          });
     }
     isUndone(prueba: number): Promise < String > {
          var arr = ["stroop", "hanoi", "token", "wisconsin", "raven"];
          var prueba2 = arr[prueba - 1];
          var uid = firebase.auth().currentUser.uid;
          var estado;
          return firebase.database().ref(`/usuarios/${uid}/${prueba2}`).once("value", function (snapshot) {
               estado = snapshot.val().estado;
          }).then((response) => {
               return estado;
          });
     }

}
