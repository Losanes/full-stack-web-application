import { HttpClient } from "@angular/common/http";

export class Handler {
    personale:{nome:string, cognome:string, email:string, telefono:string, idacquario:number}[] = [];

    constructor(private http:HttpClient){}

    readPersonale() {
        this.http.get("http://127.0.0.1:8080/personale").subscribe(
            res => {
                
            },
            err => {
                console.log(err);
            }
        );
    }
}