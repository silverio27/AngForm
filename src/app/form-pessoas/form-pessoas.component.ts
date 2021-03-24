import { Component, OnInit } from "@angular/core";
import { PoTableAction, PoTableColumn } from "@po-ui/ng-components";
import { TrainingService } from "../training.service";

@Component({
  selector: "app-form-pessoas",
  templateUrl: "./form-pessoas.component.html",
  styleUrls: ["./form-pessoas.component.css"],
})
export class FormPessoasComponent implements OnInit {
  nome = "";
  endereco = "";
  pessoas: any[] = [];

  columns: PoTableColumn[] = [
    { property: "id" },
    { property: "nome" },
    { property: "endereco" },
  ];

  actions: PoTableAction[] = [
    { label: "Deletar", action: this.deletar.bind(this) },
  ];
  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.getPessoas();
  }

  create() {
    const pessoa = { nome: this.nome, endereco: this.endereco };

    this.trainingService.create(pessoa).subscribe(
      () => {
        this.getPessoas();
      },
      () => {
        alert("Deu errado!");
      }
    );
  }

  getPessoas() {
    this.trainingService.getPessoas().subscribe((x: any) => {
      this.pessoas = x;
    });
  }

  deletar(pessoa: any) {
    const id = { id: pessoa.id };
    this.trainingService.delete(id).subscribe(
      () => {
        this.getPessoas();
      },
      () => {
        alert("Não foi possível deletar");
      }
    );
  }
}
