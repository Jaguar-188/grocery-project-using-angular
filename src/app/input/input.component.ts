import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GroceryItemsService } from '../services/grocery-items.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private groceries : GroceryItemsService) { 

  }
  
  groceryItems = new Array;
  grandTotal : number = 0;
  count : number = 0;
  obj : {}

  ngOnInit(): void {
    this.groceries.setData(this.groceryItems)
  }

  addItem(groceryForm : NgForm){
    if(groceryForm.value.groceryValue !== "" && groceryForm.value.unitValue !== 0 && groceryForm.value.pricePerUnitValue !== 0)
    {
      this.obj = {
        id : ++this.count,
        grocery : groceryForm.value.groceryValue,
        unit : groceryForm.value.unitValue,
        unitRate : groceryForm.value.pricePerUnitValue,
        total : groceryForm.value.unitValue*groceryForm.value.pricePerUnitValue
      }
      this.groceryItems.push(this.obj)
      localStorage.setItem(`${this.count}`, JSON.stringify(this.obj))
      this.grandTotal += groceryForm.value.unitValue*groceryForm.value.pricePerUnitValue
    }
    else
    {
        alert("Add Something")
    }
    groceryForm.resetForm()
    
  }

}
