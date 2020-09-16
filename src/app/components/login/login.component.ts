import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel()
  remember = false;

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) { }

  ngOnInit() {

    if(localStorage.getItem('email')){
      this.usuario.email = localStorage.getItem('email');
      this.remember = true;
    }
  }

  login(form: NgForm){
    if(form.invalid){return;}

    this._auth.login(this.usuario).subscribe(
      response => {
        console.log(response);

        if(this.remember) {
          localStorage.setItem('email', this.usuario.email);
        }
        this._router.navigateByUrl('/navbar');
      },
      err => {
        console.log(err);
      }
    )
  }
}
