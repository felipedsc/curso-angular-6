import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params["id"];
      });
  }

  ativar() {
    this.usuariosService.usuarioAtivado.next(this.id);
  }
}
