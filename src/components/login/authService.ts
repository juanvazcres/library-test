import { Injectable } from '@angular/core';
import { Credentials } from './vo/credentials';
import { Respuesta } from './vo/respuesta';
import { Http, Response,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthServiceDummy implements IAuth {

  public URL_SINGUP: string;
  constructor(public http: Http) {
    this.URL_SINGUP = 'http://localhost:3002/auth';
  }

  login(user: string, pass: string): Observable<any> {
    console.log(`username=${user}&password=${pass}`);
    var body = "username=" + user + "&password=" + pass;
    var headers = new Headers();
    console.log("Loggin in..");
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return    this.http.post(this.URL_SINGUP, body,{headers:headers}).map(res => res.json());
  
  }

  refreshToken(): Promise<any> {
    let miPromesa: Promise<any> = new Promise(
      (resolvedor, reject) => {
        const res: boolean = false;
        reject("no hay gambas");
      }
    );
    return miPromesa;
  }

  logout(): Promise<any> {
    let miPromesa: Promise<Respuesta> = new Promise(
      (resolve, reject) => {
        var respuesta = new Respuesta(1, "");
        resolve(respuesta);
      }
    );
    return miPromesa;
  }

  signup(credentials: Credentials): Promise<Respuesta> {
    var body = "user=" + credentials.username + "&pass=" + credentials.password;
    let miPromesa: Promise<Respuesta> = new Promise(
      (resolve, reject) => {
        this.http.post(this.URL_SINGUP, body).map(res => res.json()).subscribe(
          (result) => {
            resolve(new Respuesta(Respuesta.RESULT.OK, Respuesta.MESSAGE.OK));
          }
        );
      }
    );
    return miPromesa;
  }
}

export interface IAuth {
  login(user: string, pass: string): Observable<any>;
  refreshToken(): Promise<any>;
  logout(): Promise<any>;
  signup(credentials: Credentials): Promise<any>;
}