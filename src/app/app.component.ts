import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ UserProfileComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    users = [
    {name:"ramesh", isSingle: true, salary:10000},
    {name:"suresh", isSingle: false, salary:60000},
    {name:"nitesh", isSingle: true, salary:90000},
  ]
  receivedData(e:User) {
    console.log(e)
    const userIndex = this.users.findIndex(user => user.name == e.name)
    this.users[userIndex].salary = e.newSalary
  }
}
