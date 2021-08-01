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
    this.groceryItems = this.groceryItems.filter(item => item.id !== item.id)
  }

  

}
