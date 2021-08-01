import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Grocery } from '../grocery';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  groceryItems : any = []

  constructor() { 

  }

  count : number = 0;
  //obj : {}

  ngOnInit(): void {

  }

  addItem(groceryForm : NgForm){
    if(groceryForm.value.groceryValue !== "" && groceryForm.value.unitValue !== 0 && groceryForm.value.pricePerUnitValue !== 0)
    {
        let obj = {
        id : ++this.count,
        grocery : groceryForm.value.groceryValue,
        unit : groceryForm.value.unitValue,
        unitRate : groceryForm.value.pricePerUnitValue,
        total : groceryForm.value.unitValue*groceryForm.value.pricePerUnitValue
      }
      this.groceryItems.push(obj)
      localStorage.setItem(`${this.count}`, JSON.stringify(obj))
      groceryForm.resetForm()
      //this.grandTotal += groceryForm.value.unitValue*groceryForm.value.pricePerUnitValue
    }
    else
    {
        alert("Add Something")
    }
    
  }

}
