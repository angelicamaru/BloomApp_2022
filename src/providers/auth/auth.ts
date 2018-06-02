import {
     HttpClient
} from '@angular/common/http';
import {
     Injectable
} from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

     constructor() {}

     loginUser(email: string, password: string): Promise < any > {
          return firebase.auth().signInWithEmailAndPassword(email + "@bloom.com", "123456");
     }

     signupUser(email: string, tipo: string, cargo: string, fecha: string, nombre: string, nivel: string, genero: string): Promise < any > {
          return firebase.auth()
               .createUserWithEmailAndPassword(email + "@bloom.com", "123456").then(newUser => {

                    var pr;
                    //trae el "numero" de la ultima prueba y se lo agrega al usuario
                    firebase.database().ref("pruebas").limitToLast(1).once("child_added", function (snapshot) {
                         pr = snapshot.val().numero;
                         firebase.database().ref(`/usuarios/${newUser.uid}/prueba`)
                              .set(pr);
                    });
                    //trae el email del auth y lo agrega al ususario
                    firebase.database().ref(`/usuarios/${newUser.uid}`)
                         .set({
                              identificacion: {
                                   numero: email,
                                   tipo: tipo
                              },
                              genero: genero,
                              cargo: cargo,
                              fecha: fecha,
                              nombre: nombre,
                              nivel: nivel
                         });

               }).catch(error => {
                    console.error(error);
                    throw new Error(error);
               });
     }

     logoutUser(): Promise < void > {
          const userId: string = firebase.auth().currentUser.uid;
          firebase.database().ref(`/usuarios/${userId}`).off();
          return firebase.auth().signOut();
     }

}
