import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PoTableAction, PoTableColumn } from "@po-ui/ng-components";
import { Pessoa } from "../../interface/pessoa";

@Component({
  selector: "app-table-pessoa",
  templateUrl: "./table-pessoa.component.html",
  styleUrls: ["./table-pessoa.component.css"],
})
export class TablePessoaComponent implements OnInit {
  @Input() pessoas: Pessoa[] = [];
  @Output() deletar = new EventEmitter();

  columns: PoTableColumn[] = [
    { property: "id" },
    { property: "nome" },
    { property: "endereco" },
  ];

  tableActions: PoTableAction[] = [
    {
      label: "Deletar",
      action: 
        this.internalDelete.bind(this)
 
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  private internalDelete(pessoa: Pessoa) {
    this.deletar.emit(pessoa);
  }
}
