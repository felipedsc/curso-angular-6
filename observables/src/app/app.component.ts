import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  usuario1Ativado = false;
  usuario2Ativado = false;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.usuarioAtivado.subscribe(
      (id: number) => {
        if (id === 1) {
          this.usuario1Ativado = true;
          this.usuario2Ativado = false;
        } else if (id === 2) {
          this.usuario1Ativado = false;
          this.usuario2Ativado = true;
        }
      }
    )
  }
}
