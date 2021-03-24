import { Component, OnInit } from "@angular/core";
import { TrainingService } from "../training.service";

@Component({
  selector: "app-list-pessoas",
  templateUrl: "./list-pessoas.component.html",
  styleUrls: ["./list-pessoas.component.css"],
})
export class ListPessoasComponent implements OnInit {
  lista: any[] = [];
  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas() {
    this.trainingService.getPessoas().subscribe((x) => {
      this.lista = x;
    });
  }

  deletar(pessoa: any) {
    this.trainingService.delete({ id: pessoa.id }).subscribe(() => {
      this.getPessoas();
    });
  }
}
