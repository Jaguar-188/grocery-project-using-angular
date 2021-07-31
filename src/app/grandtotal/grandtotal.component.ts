import { GroceryItemsService } from './../services/grocery-items.service';
import { GrandTotalService } from './../services/grand-total.service';
import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-grandtotal',
  templateUrl: './grandtotal.component.html',
  styleUrls: ['./grandtotal.component.css']
})
export class GrandtotalComponent implements OnInit {

  @Input() grandTotal: number;

  constructor(private gTotal : GrandTotalService,private groceries : GroceryItemsService) { }

  // grTotal : number ;
  groceryItems = new Array;

  ngOnInit(): void {
    //this.grandTotalCalculate()
    //this.grTotal = this.gTotal.getGrandTotal()
    // console.log("in grandtotal"+this.grTotal)
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
