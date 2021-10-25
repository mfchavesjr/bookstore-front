import { LivroService } from './../livro.service';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {
  livro: Livro = {
    titulo: "",
    autor: "",
    texto: "",
  };

  constructor(
    private service: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.livro.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe((response) => {
      this.livro.titulo = response.titulo;
      this.livro.autor = response.autor;
      this.livro.texto = response.texto;
    });
  }

  delete(): void {
    this.service.delete(this.livro.id!).subscribe(
      (response) => {
        this.router.navigate(["livros"]);
        this.service.mensagem("Livro excluido com sucesso!");
      },
      (err) => {
        this.service.mensagem(err.error.error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(["livros"]);
  }

}
