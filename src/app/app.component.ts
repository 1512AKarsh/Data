import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, RouterOutlet, SignupComponent,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 handleEvent(event:MouseEvent){
  // console.log("Function Called", event.type);
  // console.log("function called",(event.target as Element).classList);
 // console.log("function called",event.target.name);
  console.log("function called",event.target);
 }
handleInputEvent(event:Event){
  
console.log("function called", event.type);
console.log("function called", (event.target as HTMLInputElement).value);

}
}