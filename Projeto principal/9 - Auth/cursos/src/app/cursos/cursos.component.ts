import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  constructor(private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() { }

  novo() {
    this.router.navigate(['novo'], { relativeTo: this.route });
  }
}
