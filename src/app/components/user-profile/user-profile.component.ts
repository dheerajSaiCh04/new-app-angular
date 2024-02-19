import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  name = "ramesh"
  status = "single"
  salary = 40000
  isBtnDisabled = true
  inputVal = "test"
  
  users = [
    {name:"ramesh", isSingle: true, salary:10000},
    {name:"suresh", isSingle: false, salary:60000},
    {name:"nitesh", isSingle: true, salary:90000},
  ]
  // onChange(e:Event) {
  //   const value = (e.target as HTMLInputElement).value
  //   console.log(value)
  //   this.inputVal = value
  // This was helper function for one-way data binding
 //}
}
