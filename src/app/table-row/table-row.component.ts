import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() item : any;
  @Output() delete = new EventEmitter
  @Output() edit = new EventEmitter

  constructor() { 

  }

  // groceryItems = new Array;
  // grTotal : number;
  
  ngOnInit(): void {
    //this.groceryItems = this.groceries.getData()
    
  }

  deleteItem(obj:object){

    this.delete.emit(obj)
  }

  editItem(event:any,item:object){
    let arr = [event,item]
    this.edit.emit(arr)
    //console.log(event.target.textContent)
  }

}
