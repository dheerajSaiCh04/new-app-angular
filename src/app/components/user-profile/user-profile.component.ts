import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';

function formatName(value:string) {
  return "Hi " + value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  // name = "ramesh"
  // status = "single"
  // salary = 40000
  // isBtnDisabled = true
  // inputVal = "test"
  
  // users = [
  //   {name:"ramesh", isSingle: true, salary:10000},
  //   {name:"suresh", isSingle: false, salary:60000},
  //   {name:"nitesh", isSingle: true, salary:90000},
  // ]
  // onChange(e:Event) {
  //   const value = (e.target as HTMLInputElement).value
  //   console.log(value)
  //   this.inputVal = value
  // This was helper function for one-way data binding
 //}
  @Input({alias:"userName"}) name = "";
  @Input({transform:booleanAttribute}) isSingle!: boolean;
  @Input({transform:numberAttribute}) salary!: number;

  @Output() myEvent = new EventEmitter<User>()
  sendData() {
    this.myEvent.emit({name:this.name, newSalary:25000})
  }
}
