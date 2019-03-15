import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email: string;
  senha: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registrar() {
    this.authService.registrarUsuario(this.email, this.senha);
  }
}
