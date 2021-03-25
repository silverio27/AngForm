import { Component, OnInit, ViewChild } from "@angular/core";
import {
  PoButtonGroupItem,
  PoModalAction,
  PoModalComponent,
  PoPageAction,
  PoTableAction,
  PoTableColumn,
} from "@po-ui/ng-components";
import { FormPessoasComponent } from "src/app/components/form-pessoas/form-pessoas.component";
import { TrainingService } from "src/app/training.service";

@Component({
  selector: "app-cadastro-de-pessoas",
  templateUrl: "./cadastro-de-pessoas.component.html",
  styleUrls: ["./cadastro-de-pessoas.component.css"],
})
export class CadastroDePessoasComponent implements OnInit {
  @ViewChild("modal", { static: true }) modal!: PoModalComponent;
  @ViewChild("form", { static: true }) form!: FormPessoasComponent;

  pessoas: any[] = [];

  pageActions: PoPageAction[] = [
    { label: "Novo", action: () => this.modal.open() },
  ];

  close: PoModalAction = {
    action: () => {
      this.modal.close();
    },
    label: "Fechar",
    danger: true,
  };

  confirm: PoModalAction = {
    action: () => {
      this.create();
    },
    label: "Criar",
  };

  buttons: Array<PoButtonGroupItem> = [
    {
      label: "Tabela",
      action: () => {
        this.showInTable = true;
      },
    },
    {
      label: "Lista",
      action: () => {
        this.showInTable = false;
      },
    },
  ];

  showInTable: boolean = true;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.getPessoas();
  }

  create() {
    const pessoa = { nome: this.form.nome, endereco: this.form.endereco };

    this.trainingService.create(pessoa).subscribe(
      () => {
        this.modal.close();
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
