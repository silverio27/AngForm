import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PoTableAction, PoTableColumn } from "@po-ui/ng-components";

@Component({
  selector: "app-table-pessoa",
  templateUrl: "./table-pessoa.component.html",
  styleUrls: ["./table-pessoa.component.css"],
})
export class TablePessoaComponent implements OnInit {
  @Input() pessoas: any[] = [];
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

  private internalDelete(pessoa: any) {
    this.deletar.emit(pessoa);
  }
}
