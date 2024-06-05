// src/app/password-recovery/password-recovery.component.ts
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent {
  email!: string;
  constructor(private _location: Location) { }


  onSubmit() {
    // Implement your password recovery logic here
    console.log(`Recovery email sent to ${this.email}`);
  }
  goBack(){
    this._location.back()
  }
}
