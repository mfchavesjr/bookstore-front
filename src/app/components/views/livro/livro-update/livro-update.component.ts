import { LivroService } from "./../livro.service";
import { Livro } from "./../livro.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-livro-update",
  templateUrl: "./livro-update.component.html",
  styleUrls: ["./livro-update.component.css"],
})
export class LivroUpdateComponent implements OnInit {
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

  update(): void {
    this.service.update(this.livro).subscribe(
      (resposta) => {
        this.router.navigate(["livros"]);
        this.service.mensagem("Livro alterado com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem(err.error.errors[i].message);
        }
      }
    );
  }

  cancel(): void {
    this.router.navigate(["livros"]);
  }
}
