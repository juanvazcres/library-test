import {Component} from '@angular/core';

@Component({
  selector: 'login',
  template: require('./login.html')
})
export class LoginComponent {
  public text: string;
public user : User = new User();
  constructor() {
    this.text = 'My brand new component!';
    this.user.name="juanito";
    this.user.password="juanito";
  }

  login(username:string ,password:string ):void{
    console.log(`login pressed:    ${username}:${password} `);
  }
}

export class User {
  public name:string;
  public password : string;
  constructor(){}
}