import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Grocery } from '../grocery';

@Component({
  selector: 'app-grandtotal',
  templateUrl: './grandtotal.component.html',
  styleUrls: ['./grandtotal.component.css']
})
export class GrandtotalComponent implements OnInit {

  @Input() groceryItems: any = [];

  constructor() { 

  }

  // grTotal : number ;
  //groceryItems = new Array;
  grandTotal = 0;

  ngOnInit(): void {
    //this.grandTotalCalculate()
    //this.grTotal = this.gTotal.getGrandTotal()
    // console.log("in grandtotal"+this.grTotal)
  }

  GrandTotal(){
    //console.log(this.grandTotal)
    //this.groceryItems = this.groceries.getData()
    // console.log("1")
    // console.log(this.groceryItems)
    this.grandTotal = 0
    for(let item of this.groceryItems)
    {
        this.grandTotal += item.unit*item.unitRate
    }
    //console.log(this.grandTotal)

    return this.grandTotal
  }


  // grandTotalCalculate(){
  //   this.grTotal = this.gTotal.getGrandTotal()
  // }

  // ngOnChanges(changes : SimpleChange) {
  //   if(changes.previousValue === this.grandTotal)
  //   {

  //   }
  // }



}
