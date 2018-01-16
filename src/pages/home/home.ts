import {
    Component
} from '@angular/core';
import {
    NavController
} from 'ionic-angular';
import {
    AuthProvider
} from '../../providers/auth/auth';
import * as $ from 'jquery';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {


    constructor(public navCtrl: NavController, public authData: AuthProvider) {

    }
    logoutUsr(): void {
        this.authData.logoutUser().then(() => this.navCtrl.setRoot('WalkthroughPage'));
    }

    ionViewDidLoad() {
        var arr = [2, 1, 3, 4, 5];
        arr = this.shuffle(arr);

        $('#button1').attr('style', 'background:url(assets/imgs/bloom-' + arr[0] + '.jpg) no-repeat center;background-size:cover;');
        $('#button1').attr('data-user', arr[0] );
        $('#button2').attr('style', 'background:url(assets/imgs/bloom-' + arr[1] + '.jpg) no-repeat center;background-size:cover;');
        $('#button2').attr('data-user', arr[1] );
        $('#button3').attr('style', 'background:url(assets/imgs/bloom-' + arr[2] + '.jpg) no-repeat center;background-size:cover;');
        $('#button3').attr('data-user', arr[2] );
        $('#button4').attr('style', 'background:url(assets/imgs/bloom-' + arr[3] + '.jpg) no-repeat center;background-size:cover;');
        $('#button4').attr('data-user', arr[3] );
       $('#button5').attr('style', 'background:url(assets/imgs/bloom-' + arr[4] + '.jpg) no-repeat center;background-size:cover;');
        $('#button5').attr('data-user', arr[4] );
    }
    shuffle(array) {
        var currentIndex = array.length;
        var randomIndex, temporaryValue;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    goToExplain1(){
        var ide = $('#button1').attr('data-user');
        this.navCtrl.push('ExplainPage',{juego:ide});
        console.log(ide);
    }
    goToExplain2(){
        var ide = $('#button2').attr('data-user');
        this.navCtrl.push('ExplainPage',{juego:ide});
        console.log(ide);
    }
    goToExplain3(){
        var ide = $('#button3').attr('data-user');
        this.navCtrl.push('ExplainPage',{juego:ide});
        console.log(ide);
    }
    goToExplain4(){
        var ide = $('#button4').attr('data-user');
        this.navCtrl.push('ExplainPage',{juego:ide});
        console.log(ide);
    }
    goToExplain5(){
        var ide = $('#button5').attr('data-user');
        this.navCtrl.push('ExplainPage',{juego:ide});
        console.log(ide);
    }
}
