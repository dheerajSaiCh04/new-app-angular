import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';

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
}
