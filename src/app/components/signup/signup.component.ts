import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user = {
    username: '',
    email: '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() { }

  showSuccessMessage() {
    Swal.fire({
      icon: 'success',
      title: 'Cuenta creada exitosamente',
      showConfirmButton: false,
      timer: 1500
    });
  }

  signUp() {
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this.showSuccessMessage();
          this.router.navigate(['/home']);

        },
        err => {
          console.log(err);
          if (err.error.message) {
            Swal.fire('Error', err.error.message, 'error');
            Swal.fire({
              title: 'Error!',
              text: 'Usuario ya existe',
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          }
        }
      )
  }
}
