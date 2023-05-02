import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  signIn(){
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
          Swal.fire({
            icon: 'success',
            title: 'Ingreso exitoso',
            text: 'Bienvenido!',
            confirmButtonText: 'Aceptar'
          });
        },
        err => console.log(err)
      )
  }
}
