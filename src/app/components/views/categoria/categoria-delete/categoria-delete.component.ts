import { Categoria } from "./../categoria.module";
import { CategoriaService } from "./../categoria.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-categoria-delete",
  templateUrl: "./categoria-delete.component.html",
  styleUrls: ["./categoria-delete.component.css"],
})
export class CategoriaDeleteComponent implements OnInit {
  categoria: Categoria = {
    id: "",
    nome: "",
    descricao: "",
  };

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((response) => {
      this.categoria.nome = response.nome;
      this.categoria.descricao = response.descricao;
    });
  }

  delete(): void {
    this.service.delete(this.categoria.id!).subscribe(
      (response) => {
        this.router.navigate(["categorias"]);
        this.service.mensagem("Categoria excluida com sucesso!");
      },
      (err) => {
        this.service.mensagem(err.error.error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(["categorias"]);
  }
}
