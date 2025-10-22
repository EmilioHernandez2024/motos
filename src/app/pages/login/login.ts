import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

email = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  iniciarSesion() {
    if (this.auth.login(this.email, this.password)) {
      const role = this.auth.getUserRole();
      Swal.fire({
        title: 'Bienvenido',
        text: `Inicio de sesión exitoso`,
        icon: 'success',
        confirmButtonColor: '#3085d6'
      });
      if (role === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Credenciales incorrectas',
        icon: 'error',
        confirmButtonColor: '#d33'
      });
    }
  }
}