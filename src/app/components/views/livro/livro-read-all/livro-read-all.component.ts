import { LivroService } from "./../livro.service";
import { Livro } from "./../livro.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-livro-read-all",
  templateUrl: "./livro-read-all.component.html",
  styleUrls: ["./livro-read-all.component.css"],
})
export class LivroReadAllComponent implements OnInit {
  displayedColumns: string[] = ["id", "titulo", "autor", "texto", "acoes"];

  livros: Livro[] = [];

  constructor(private service: LivroService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      this.livros = resposta;
    });
  }

  navegarParaLivroCreate() {
    this.router.navigate(["livros/create"]);
  }
}
