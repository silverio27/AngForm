import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Pessoa } from "../../interface/pessoa";

@Component({
  selector: "app-card-pessoa",
  templateUrl: "./card-pessoa.component.html",
  styleUrls: ["./card-pessoa.component.css"],
})
export class CardPessoaComponent implements OnInit {
  @Input() pessoa = {} as Pessoa;
  @Output() deletar = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  internalDelete(pessoa: Pessoa) {
    this.deletar.emit(pessoa);
  }
}
