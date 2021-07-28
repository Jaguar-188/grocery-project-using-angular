import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  

  constructor(){ }

  ngOnInit(): void {}

  groceryValue : string = "";
  unitValue : number = 0;
  pricePerUnitValue : number = 0;
  grandTotal : number = 0;
  //temp : number = 0;
  list = []
  obj = {}
  count : number = 0;
  //val : number = 0;

  addItem(){
    if(this.groceryValue !== "" && this.unitValue !== 0 && this.pricePerUnitValue !== 0)
    {
        this.obj = {
          id : ++this.count,
          grocery : this.groceryValue,
          unit : this.unitValue,
          price : this.pricePerUnitValue,
          total : this.unitValue*this.pricePerUnitValue
        }
        this.list.push(this.obj)
        localStorage.setItem(`${this.list.length}`, JSON.stringify(this.obj)); 

        this.grandTotal += this.unitValue*this.pricePerUnitValue

    }
    else
    {
        alert("Add something...")
    }
    this.groceryValue = ""
    this.unitValue = 0
    this.pricePerUnitValue = 0
  }

  deleteItem(id:number){
    const data = JSON.parse(localStorage.getItem(`${this.list.length}`))
    if(data.id === id)
    {
        localStorage.removeItem(`${this.list.length}`)
    }
    this.list = this.list.filter(item => item.id !== id)
    this.grandTotal = 0
  
    for(let val of this.list)
    {
        this.grandTotal += val.unit*val.price
    }
  }

  editItem(event,id:number){
      
      
      var temp = 0
      if(event.target.textContent === 'Edit')
      {
          event.target.parentElement.parentElement.children[0].contentEditable = true
          event.target.parentElement.parentElement.children[1].contentEditable = true
          event.target.parentElement.parentElement.children[2].contentEditable = true
          event.target.parentElement.parentElement.children[0].focus()
          
          event.target.textContent = 'Save'
          
      }
      else
      {
          temp = parseInt(event.target.parentElement.parentElement.children[3].textContent)
          event.target.parentElement.parentElement.children[0].contentEditable = false
          event.target.parentElement.parentElement.children[1].contentEditable = false
          event.target.parentElement.parentElement.children[2].contentEditable = false
          event.target.parentElement.parentElement.children[3].textContent = parseInt(event.target.parentElement.parentElement.children[1].textContent)*parseInt(event.target.parentElement.parentElement.children[2].textContent)
          //console.log(totalDuplicate)
          this.grandTotal += parseInt(event.target.parentElement.parentElement.children[3].textContent) - temp
          const data = JSON.parse(localStorage.getItem(`${this.list.length}`))
          this.obj = {
            id:this.list.length,
            grocery :event.target.parentElement.parentElement.children[0].textContent,
            unit : event.target.parentElement.parentElement.children[1].textContent,
            price : event.target.parentElement.parentElement.children[2].textContent,
            total : event.target.parentElement.parentElement.children[1].textContent*event.target.parentElement.parentElement.children[2].textContent

          }
          if(data.id === id)
          {
              localStorage.setItem(`${this.list.length}`,JSON.stringify(this.obj))
          }
          event.target.textContent = 'Edit'
      }

  }
}
