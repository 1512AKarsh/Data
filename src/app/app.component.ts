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
  // title = 'Akarsh Singh';
  //    x = 10;
  //    y = 20;
  //   user1 = 'Akarsh Singh';
  //   user2 = 'Aman Singh'
  // Education = 'B.Tech in Computer Science and Engineering';
  // hello(){
  //   let x = 20;
  // }

  handleClickEvent(){
    console.log("Button Clicked");
    this.otherFunction();

  }
  otherFunction(){
    console.log("Other Function Called");
  }

  name:string ="Akarsh Singh";
  data:number | string= 10;
  other:any = true;
  updateName(){
    this.name = "Ayush Pal";
  this.data = 20;
  this.data = "Akarsh Singh";
  this.other = false;
  console.log(this.name);
}
updateVar(){
  let x:number | boolean = 30;
  console.log(x);
  this.sum(10,40);
}

sum(a:number,b:number){
  console.log(a + b) ;
}


count:number = 0;
// incrementCount(){
// this.count++;
// }
// decrementCount(){
//   this.count--;}
// resetCount(){
// this.count = 0;
// }


handleCounter(val:string){
  if(val == 'plus'){
    this.count++;
  }else if(val == 'minus'){
    if(this.count > 0)
    this.count--;
  }else if(val === 'reset'){
    this.count =0;
  }
}
}