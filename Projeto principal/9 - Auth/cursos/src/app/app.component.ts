import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sessaoAtual: string = '';

  constructor(private localeService: BsLocaleService) {
    this.localeService.use("pt-br");
  }

  ngOnInit() {
    var config = {
      apiKey: "AIzaSyAxfbebs7ORmuE2bdpYsKuMyxTeG1c8aoo",
      authDomain: "fdsc-itix.firebaseapp.com",
      databaseURL: "https://fdsc-itix.firebaseio.com",
      projectId: "fdsc-itix",
      storageBucket: "fdsc-itix.appspot.com",
      messagingSenderId: "1023788095095"
    };

    firebase.initializeApp(config);
  }
}
