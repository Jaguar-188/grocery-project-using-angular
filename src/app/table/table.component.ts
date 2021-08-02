import { Component, Input, OnInit } from '@angular/core';
import { Grocery } from '../grocery';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() groceryItems : Grocery[] = []

  constructor() { }

  ngOnInit(): void {
  }


  deleteItem(item){
    //this.groceryItems = this.groceryItems.filter(item => item.id !== item.id)
    var index = this.groceryItems.indexOf(item)
    this.groceryItems.splice(index,1)
    const data = JSON.parse(localStorage.getItem(`${item.id}`))
    if(data.id === item.id)
    {
        localStorage.removeItem(`${item.id}`)
    }
  }

  editItem(arr){
      //console.log(event)
      //console.log(arr[0])
      //console.log(arr[1])
      //console.log(arr[0].target.textContent)
      if(arr[0].target.textContent === "Edit")
      {
          //console.log("edit")
          arr[0].target.parentElement.parentElement.children[0].contentEditable = true
          arr[0].target.parentElement.parentElement.children[1].contentEditable = true
          arr[0].target.parentElement.parentElement.children[2].contentEditable = true
          arr[0].target.parentElement.parentElement.children[0].focus()
          arr[0].target.textContent = "Update"
      }
      else
      {
          arr[0].target.parentElement.parentElement.children[0].contentEditable = false
          arr[0].target.parentElement.parentElement.children[1].contentEditable = false
          arr[0].target.parentElement.parentElement.children[2].contentEditable = false
          arr[0].target.parentElement.parentElement.children[3].textContent = 
          arr[0].target.parentElement.parentElement.children[1].textContent*arr[0].target.parentElement.parentElement.children[2].textContent
          let itemIndex = this.groceryItems.indexOf(arr[1])
          this.groceryItems[itemIndex].unit = arr[0].target.parentElement.parentElement.children[1].textContent
          this.groceryItems[itemIndex].unitRate = arr[0].target.parentElement.parentElement.children[2].textContent
          const data = JSON.parse(localStorage.getItem(`${arr[1].id}`))
          //console.log(data)
          let obj = {
              id : arr[1].id,
              grocery : arr[0].target.parentElement.parentElement.children[0].textContent,
              unit : arr[0].target.parentElement.parentElement.children[1].textContent,
              unitRate :  arr[0].target.parentElement.parentElement.children[2].textContent,
              total : arr[0].target.parentElement.parentElement.children[1].textContent*arr[0].target.parentElement.parentElement.children[2].textContent
          }
          if(data.id === arr[1].id)
          {
              localStorage.setItem(`${arr[1].id}`,JSON.stringify(obj))
          }
          arr[0].target.textContent = "Edit"
      }
  }

  

}
