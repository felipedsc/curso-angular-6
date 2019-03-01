import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  generos = [{ valor: "M", descricao: "Masculino" },
  { valor: "F", descricao: "Feminino" },
  { valor: "N", descricao: "Não informado" }];

  enviado = false;

  usuarioForm: FormGroup;

  ngOnInit() {
    // criar telefones depois
    this.usuarioForm = new FormGroup({
      "dadosBasicos": new FormGroup({
        "login": new FormControl("teste", [Validators.required, this.loginsProibidos]),
        "email": new FormControl(null, [Validators.required, Validators.email], this.emailsProibidos),
      }),
      "genero": new FormControl("M"),
      "tipo": new FormControl("comum"),
      "telefones": new FormArray([])
    });

    // this.usuarioForm.valueChanges.subscribe(
    //   (valor) => console.log(valor)
    // );

    // this.usuarioForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );

    this.usuarioForm.patchValue({
      "dadosBasicos": {
        "email": "teste@email.com"
      }
    })
  }

  enviar() {
    console.log(this.usuarioForm);
  }

  get emailInvalido() {
    return !this.usuarioForm.get('dadosBasicos.email').valid
      && this.usuarioForm.get('dadosBasicos.email').touched;
  }

  adicionarTelefone() {
    const control = new FormControl(null, [Validators.required, Validators.minLength(8)]);
    (<FormArray>this.usuarioForm.get("telefones")).push(control);
  }

  get telefones() {
    return (<FormArray>this.usuarioForm.get("telefones")).controls;
  }

  loginsProibidos(control: FormControl): { [s: string]: boolean } {
    if (control.value === "teste") {
      return { 'loginProibido': true };
    } else {
      return null;
    }
  }

  emailsProibidos(control): Observable<{ [s: string]: boolean }> | Promise<{ [s: string]: boolean }> {
    return new Promise<{ [s: string]: boolean }>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == "teste@teste.com") {
          resolve({ "emailProibido": true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
