import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Injectable()
export class AuthService {
  private token: string;

  constructor(private router: Router) { }

  registrarUsuario(email: string, senha: string) {
    firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .catch(erro => console.log(erro));
  }

  logarUsuario(email: string, senha: string) {
    firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .then(response => {
        firebase.auth()
          .currentUser.getIdToken()
          .then(token => {
            this.token = token;
          });

        this.router.navigate(["/"]);
      })
      .catch(erro => console.log(erro));
  }

  obterToken() {
    firebase.auth()
      .currentUser.getIdToken()
      .then(token => this.token = token);

    return this.token;
  }

  estaAutenticado() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
