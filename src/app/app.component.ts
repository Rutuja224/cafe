import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafe_management';
  item:any={};
  items:any[]=[]

  pushitem(){
    this.items.push(this.item);
    this.item={}
  }
  otp:any;
  otpverify(){
    alert("Working")
  }
}
