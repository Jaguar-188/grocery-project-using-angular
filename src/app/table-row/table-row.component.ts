import { GrandTotalService } from './../services/grand-total.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { GroceryItemsService } from '../services/grocery-items.service';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() grandTotal : number;

  constructor(private groceries : GroceryItemsService,private gTotal : GrandTotalService) { }

  groceryItems = new Array;
  grTotal : number;
  
  ngOnInit(): void {
    this.groceryItems = this.groceries.getData()
    
  }

  deleteItem(id:number){
    //console.log(this.groceryItems)
    const data = JSON.parse(localStorage.getItem(`${id}`))
    if(data.id === id)
    {
        localStorage.removeItem(`${id}`)
    }
    this.groceryItems = this.groceryItems.filter(item => item.id !== id)
    //console.log(this.groceryItems)
    this.grandTotal = 0
    for(let item of this.groceryItems)
    {
        this.grandTotal += item.unit*item.unitRate
    }
    console.log(this.grandTotal)
    this.grTotal = this.grandTotal
    //console.log("1"+this.grTotal)
    //console.log(this.grTotal)
    this.gTotal.setGrandTotal(this.grTotal)
    
  }

}
