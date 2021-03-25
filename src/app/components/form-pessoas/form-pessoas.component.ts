import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-pessoas",
  templateUrl: "./form-pessoas.component.html",
  styleUrls: ["./form-pessoas.component.css"],
})
export class FormPessoasComponent implements OnInit {
  nome = "";
  endereco = "";

  ngOnInit(): void {}
}
