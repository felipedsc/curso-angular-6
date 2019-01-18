import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("form") usuarioForm: NgForm;
  usuario: Usuario = new Usuario();

  generos = [{ valor: "M", descricao: "Masculino" },
  { valor: "F", descricao: "Feminino" },
  { valor: "N", descricao: "Não informado" }];

  enviado = false;

  tipoDefault = "comum";
  // enviar(form: NgForm) {
  //   console.log(form);
  // }

  ngOnInit() {
    //setValue primeiro
    //necessário informar todos valores
    // setTimeout(() => {
    //   this.usuarioForm.setValue({
    //     dadosBasicos: {
    //       login: "teste",
    //       email: "felipe@email.com"
    //     },
    //     genero: "M",
    //     tipo: "administrador"
    //   });
    // }, 2000);

    setTimeout(() => {
      this.usuarioForm.form.patchValue({
        dadosBasicos: {
          login: "patch",
          email: "patch@email.com"
        }
      });
    }, 2000);
  }

  enviar() {
    console.log(this.usuarioForm);
    this.enviado = true;
    // this.usuario.login = this.form.value.login;
    this.usuario.login = this.usuarioForm.value.dadosBasicos.login;
    // this.usuario.email = this.form.value.email;
    this.usuario.email = this.usuarioForm.value.dadosBasicos.email;
    this.usuario.genero = this.usuarioForm.value.genero;
    this.usuario.tipo = this.usuarioForm.value.tipo;

    //deixar por ultimo
    this.usuarioForm.reset();
  }
}
