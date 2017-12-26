import {
     Component
} from '@angular/core';
import {
     Alert,
     AlertController,
     Loading,
     LoadingController,
     IonicPage,
     NavController,
     NavParams
} from 'ionic-angular';
import {
     FormBuilder,
     FormGroup,
     Validators
} from '@angular/forms';
import {
     EmailValidator
} from '../../validators/email';
import {
     AuthProvider
} from '../../providers/auth/auth';
import {
     HomePage
} from '../home/home';
/**

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
     selector: 'page-signup',
     templateUrl: 'signup.html',
})
export class SignupPage {
     public signupForm: FormGroup;
     public loading: Loading;

     constructor(public navCtrl: NavController, public navParams: NavParams,
          public loadingCtrl: LoadingController,
          public alertCtrl: AlertController,
          public authProvider: AuthProvider,
          formBuilder: FormBuilder) {
          this.signupForm = formBuilder.group({
               cargo:[""],
               fecha:[""],
               nombre:[""],
               apellido:[""],
               email: [""],
               tipo: [""],
               nivel:[""]
          });
     }

     ionViewDidLoad() {
          console.log('ionViewDidLoad SignupPage');
     }


     signupUser(): void {
          if (!this.signupForm.valid) {
               console.log(`Complete el campo: ${this.signupForm.value}`);
          } else {
               const email: string = this.signupForm.value.email;
               const tipo: string = this.signupForm.value.tipo;
               const cargo: string = this.signupForm.value.cargo;
               const fecha: string = this.signupForm.value.fecha;
               const nombre: string = this.signupForm.value.nombre + " "+this.signupForm.value.apellido;
               const nivel: string = this.signupForm.value.nivel;

               this.authProvider.signupUser(email, tipo, cargo, fecha, nombre, nivel).then(user => {
                         this.loading.dismiss().then(() => {
                              this.navCtrl.setRoot(HomePage);
                         });
                    },
                    error => {
                         this.loading.dismiss().then(() => {
                              const alert: Alert = this.alertCtrl.create({
                                   message: error.message,
                                   buttons: [{
                                        text: "Ok",
                                        role: "cancel"
                                   }]
                              });
                              alert.present();
                         });
                    }
               );
               this.loading = this.loadingCtrl.create();
               this.loading.present();
          }
     }

}
