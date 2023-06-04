import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Handler {
    personale:{id:number, nome:string, cognome:string, email:string, telefono:string, idacquario:number}[] = [];
    acquario:{id:number, nome:string}[] = [];
    sale:{id:number, idacquario:number, tema:string}[] = [];

    constructor(private http:HttpClient){
        this.readPersonale();
        this.readAcquario();
        this.readSale();
    }

    readPersonale() {
        this.http.get<any[]>("http://127.0.0.1:8080/Personale").subscribe(
            res => {
                this.personale = [];
                res.forEach(elemento => {
                    this.personale.push({
                        id:elemento["ID"],
                        nome:elemento["Nome"],
                        cognome:elemento["Cognome"],
                        email:elemento["Email"],
                        telefono:elemento["Telefono"],
                        idacquario:elemento["IDAcquario"]
                    });
                });
            },
            err => {
                console.log(err);
            }
        );
    }

    writePersonale(nome, cognome, email, telefono, idacquario) {
        this.http.post("http://127.0.0.1:8080", {"insert": "Personale", "nome":nome, "cognome":cognome, "email":email, "telefono":telefono, "idacquario":idacquario}).subscribe(
            res => {
                this.readPersonale();
            },
            err => {
                console.log(err);
            }     
        )
    }

    readAcquario() {
        this.http.get<any[]>("http://127.0.0.1:8080/Acquario").subscribe(
            res => {
                this.acquario = [];
                res.forEach(elemento => {
                    this.acquario.push({
                        id:elemento["ID"],
                        nome:elemento["Nome"]
                    });
                });
            },
            err => {
                console.log(err);
            }
        );
    }

    writeAcquario(nome) {
        this.http.post("http://127.0.0.1:8080", {"insert": "Acquario", "nome":nome}).subscribe(
            res => {
                this.readAcquario();
            },
            err => {
                console.log(err);
            }     
        )
    }

    readSale() {
        this.http.get<any[]>("http://127.0.0.1:8080/Sale").subscribe(
            res => {
                this.sale = [];
                res.forEach(elemento => {
                    this.sale.push({
                        id:elemento["ID"],
                        idacquario:elemento["IDAcquario"],
                        tema:elemento["Tema"]
                    });
                });
            },
            err => {
                console.log(err);
            }
        );
    }

    writeSale(idacquario, tema) {
        this.http.post("http://127.0.0.1:8080", {"insert": "Sale", "idacquario":idacquario, "tema":tema}).subscribe(
            res => {
                this.readSale();
            },
            err => {
                console.log(err);
            }     
        )
    }
}