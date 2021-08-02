import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Grocery } from '../grocery';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  groceryItems : any[] = []
  //groceryItems : Grocery[] = []

  constructor() { 

  }

  count : number = 0;
  flag : number = 0;
  obj = {}

  ngOnInit(): void {
    if(localStorage.length > 0)
    {
      for(var i = 0; i < localStorage.length; i++)
      {
          const data = localStorage.getItem(localStorage.key(i))
          const item = JSON.parse(data)
          this.groceryItems.push(item)
      }
      //const item = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length)))
      //this.count = 1 + parseInt(item.id)
      //console.log(localStorage.length)
    }
  }

  addItem(groceryForm : NgForm){
    
    if(groceryForm.value.groceryValue !== ""  &&  groceryForm.value.unitValue !== ""  &&  groceryForm.value.pricePerUnitValue !== "")
    {
        //console.log(localStorage)
        this.obj = {
        id : ++this.count,
        grocery : groceryForm.value.groceryValue,
        unit : groceryForm.value.unitValue,
        unitRate : groceryForm.value.pricePerUnitValue,
        total : groceryForm.value.unitValue*groceryForm.value.pricePerUnitValue
      }
      this.groceryItems.push(this.obj)
      groceryForm.resetForm()
      //this.flag = 1
      localStorage.setItem(`${this.count}`, JSON.stringify(this.obj))
      // if(this.flag === 1)
      // {
          //alert("Data Inserted")
          
          //console.log(this.boolValue) 
      //}
      
      //this.grandTotal += groceryForm.value.unitValue*groceryForm.value.pricePerUnitValue
    }
    else
    {
        alert("Add Something")  
    }
    
    
  }

}
