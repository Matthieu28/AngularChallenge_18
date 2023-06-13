import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public role = ""

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.role = this.userService.getRole();
  }

  onClick1(): any {
    this.userService.setRole("ANONYMOUS");
    this.role = this.userService.getRole();
  }

  onClick2(): any {
    this.userService.setRole("USER");
    this.role = this.userService.getRole();
  }

  onClick3(): any {
    this.userService.setRole("ADMIN");
    this.role = this.userService.getRole();
  }
}
