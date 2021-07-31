import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrandTotalService {

  constructor() { }

  grandTotal : number;

  setGrandTotal(data){
    //console.log("Service"+data)
    this.grandTotal = data
    //console.log("Service"+this.grandTotal)
  }

  getGrandTotal(){
    //console.log("in get"+this.grandTotal)
    return this.grandTotal
  }
}
