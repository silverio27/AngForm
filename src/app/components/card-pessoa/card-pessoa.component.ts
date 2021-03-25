import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-card-pessoa",
  templateUrl: "./card-pessoa.component.html",
  styleUrls: ["./card-pessoa.component.css"],
})
export class CardPessoaComponent implements OnInit {
  @Input() item: any;
  @Output() deletar = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  internalDelete(pessoa: any) {
    this.deletar.emit(pessoa);
  }
}
