import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Pessoa } from "../interface/pessoa";

@Injectable({
  providedIn: "root",
})
export class PessoaService {
  constructor(private http: HttpClient) {}

  create(pessoa: Pessoa): Observable<Pessoa> {
    const url = environment.endpoint;
    return this.http.post<Pessoa>(url, pessoa);
  }

  getPessoas(): Observable<Pessoa[]> {
    const url = environment.endpoint;
    return this.http.get<Pessoa[]>(url);
  }

  delete(id: number) {
    const url = `${environment.endpoint}/${id}`;
    return this.http.delete(url);
  }
}
