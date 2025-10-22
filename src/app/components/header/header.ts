import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  isLoggedIn = false;
  userRole: string | null = null;
  userName: string | null = null;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.actualizarEstado();
  }

  actualizarEstado() {
    const user = this.auth.getUser();
    this.isLoggedIn = !!user;
    this.userRole = user ? user.role : null;
    this.userName = user ? user.name : null;
  }

  logout() {
    this.auth.logout();
    this.actualizarEstado();
    this.router.navigate(['/login']);
  }
}

