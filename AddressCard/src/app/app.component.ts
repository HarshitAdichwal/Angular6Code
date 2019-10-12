import { Component } from '@angular/core';
import { User } from './card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AddressCard';
  user : User;
  constructor() {
    this.user  = new User();
    this.user.name = "Harpal";
    this.user.designation = "President";
    this.user.city = "London";
    this.user.phone = [
      "123456789",
      "987654321"

    ];
  }
}
