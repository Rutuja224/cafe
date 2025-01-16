import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
tableid:any;
foods:any[]=[];
constructor(private http:HttpClient){
  this.getFood().subscribe(x=> this.foods =x)
}

getFood():Observable<any>{
  return this.http.get<any>("http://localhost:3000/food");

}
}
