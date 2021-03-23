import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TrainingService {
  constructor(private http: HttpClient) {}

  create(pessoa: any): Observable<any> {
    const url =
      "https://prod-15.brazilsouth.logic.azure.com:443/workflows/f0e57636cfd7491cb60ce52f67a3d042/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OHAXg7FTiruYOEQTWNx-7KkUsrAf5WPqqq3X6p3_Cwk";
    return this.http.post(url, pessoa);
  }

  getPessoas(): Observable<any> {
    const url =
      "https://prod-30.brazilsouth.logic.azure.com:443/workflows/77a2e0f7508e45e4a11582056d46f9b5/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=y33h6BEbSf3K3n-b7OQZbjI1jy7FBlkCQXLH3vA-AGs";
    return this.http.get(url);
  }

  delete(id: any) {
    const url =
      "https://prod-10.brazilsouth.logic.azure.com:443/workflows/c7bde88d0d4943a4bfa4fd123e097136/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rInrSS6qoJDG5_pVwMnyK7HCJUTR0IBtK9oPcrpVlcE";
    return this.http.post(url, id);
  }
}
