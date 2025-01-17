import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor (
    private userService: UserService,
    private router: Router
  ) {}

  signOut() {
    console.log('User signed out');
    this.router.navigate(['/signin']);
  }

  
}
