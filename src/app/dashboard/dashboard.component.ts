import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
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
fooditem:any;
getFood():Observable<any>{
  return this.http.get<any>("http://localhost:3000/food");
}
getOrder():Observable<any>{
  return this.http.get<any>("http://localhost:3000/orders");
}
patchFoodOrder(id:any,data:any):Observable<any>{
  return this.http.put<any>("http://localhost:3000/orders/"+id,data);
}
@ViewChild("addwalaclose") addwalaclose:ElementRef;
addtotable(id:any){
  let orders:any[];
  let order:any[]=[];
  this.getOrder().subscribe((x)=> {orders = x;
   order = orders.find(x=>x.id==id)?.items;
   order.push(this.fooditem)
   let data = {'items':order}
   this.patchFoodOrder(id,data).subscribe(x=>{

     alert("Order Updated"+this.fooditem)
  });

});


  this.fooditem=undefined;
  this.addwalaclose.nativeElement.click();
}
}
