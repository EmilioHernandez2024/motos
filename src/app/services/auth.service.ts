import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly USER_KEY = 'userData';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    //  Simulación local
    // Aquí podrías cambiarlo luego para conectar con Supabase
    if (email === 'admin@tienda.com' && password === '1234') {
      const user = { email, role: 'admin', name: 'Administrador' };
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.USER_KEY);
    this.router.navigate(['/login']);
  }

  getUser() {
    const data = localStorage.getItem(this.USER_KEY);
    return data ? JSON.parse(data) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  getUserRole(): string | null {
    const user = this.getUser();
    return user ? user.role : null;
  }
}
