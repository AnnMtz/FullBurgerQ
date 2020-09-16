import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  remember = false;

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) { }

  ngOnInit() {
   }

   onSubmit(form: NgForm) {
     if(form.invalid) {return;}

     this._auth.nuevoUsuario(this.usuario).subscribe(
       response => {
         console.log(response);

         if(this.remember){
           localStorage.setItem('email', this.usuario.email);
         }
         this._router.navigateByUrl('/login');
       }, err => {
         console.log(err.error.error.message);
       }
     )   
   }

}
