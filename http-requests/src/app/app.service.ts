import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Hotel } from "./hotel.model";

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }

    getTitulo() {
        return this.http.get("titulo.json")
            .pipe(
                map((resultado: any) => {
                    return resultado.titulo;
                })
            );
    }

    obterHoteis() {
        // const params = new HttpParams().set("auth", "123456");

        return this.http.get<Hotel[]>("https://fdsc-itix.firebaseio.com/hoteis.json", {
            observe: 'body',
            responseType: 'json',
            // params: params,
        }).pipe(
            map((hoteis: Hotel[]) => {
                for (const hotel of hoteis) {
                    hotel.nome = "*** " + hotel.nome;
                }

                return hoteis;
            }),
            catchError((error: any) => {
                return throwError("Ocorreu algum erro ao obter hotéis.");
            })
        );

        //fazer depois
        // const req = new HttpRequest("GET", "https://fdsc-itix.firebaseio.com/hoteis.json", { reportProgress: true});

        // return this.http.request(req);
    }

    salvarHoteis(hoteis: any[]) {
        // headers não necessarios pra esse caso
        // const headers = new HttpHeaders({ "Content-Type": "application/json" });
        const headers = new HttpHeaders().set("Authorization", "Bearer 12312321");

        // return this.http.post("https://fdsc-itix.firebaseio.com/hoteis.json",
        //     hoteis, {
        //         headers: headers
        //     });

        return this.http.put("https://fdsc-itix.firebaseio.com/hoteis.json",
            hoteis, {
                headers: headers
            });
    }
}