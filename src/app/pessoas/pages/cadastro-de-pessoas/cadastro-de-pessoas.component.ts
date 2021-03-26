import { Component, OnInit, ViewChild } from "@angular/core";
import {
  PoButtonGroupItem,
  PoModalAction,
  PoModalComponent,
  PoPageAction,
  PoTableAction,
  PoTableColumn,
} from "@po-ui/ng-components";
import { FormPessoasComponent } from "src/app/pessoas/components/form-pessoas/form-pessoas.component";
import { PessoaService } from "src/app/pessoas/services/pessoa.service";
import { Pessoa } from "../../interface/pessoa";

@Component({
  selector: "app-cadastro-de-pessoas",
  templateUrl: "./cadastro-de-pessoas.component.html",
  styleUrls: ["./cadastro-de-pessoas.component.css"],
})
export class CadastroDePessoasComponent implements OnInit {
  @ViewChild("modal", { static: true }) modal!: PoModalComponent;
  @ViewChild("form", { static: true }) form!: FormPessoasComponent;

  pessoas: Pessoa[] = [];

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

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.getPessoas();
  }

  create() {
    const pessoa = {
      nome: this.form.nome,
      endereco: this.form.endereco,
    } as Pessoa;

    this.pessoaService.create(pessoa).subscribe(
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
    this.pessoaService.getPessoas().subscribe((x: Pessoa[]) => {
      this.pessoas = x;
    });
  }

  deletar(pessoa: Pessoa) {
    this.pessoaService.delete(pessoa.id).subscribe(
      () => {
        this.getPessoas();
      },
      () => {
        alert("Não foi possível deletar");
      }
    );
  }
}
