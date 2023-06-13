import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private role: string = "ADMIN";
  // 'ANONYMOUS', 'USER' ou 'ADMIN'

  constructor() { }

  getRole(): string {
    return this.role;
  }

  setRole(role: string): any {
    this.role = role;
  }
}
