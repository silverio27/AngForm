import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TrainingService {
  constructor(private http: HttpClient) {}

  create(pessoa: any): Observable<any> {
    const url = environment.endpoint;
    return this.http.post(url, pessoa);
  }

  getPessoas(): Observable<any> {
    const url = environment.endpoint;
    return this.http.get(url);
  }

  delete(id: any) {
    const url = `${environment.endpoint}/${id.id}`;
    return this.http.delete(url, id);
  }
}
