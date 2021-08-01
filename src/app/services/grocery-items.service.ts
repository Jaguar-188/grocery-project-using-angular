import { Injectable } from '@angular/core';
import { Grocery } from '../grocery';

@Injectable({
  providedIn: 'root'
})
export class GroceryItemsService {

  groceryItems : any = [];

  constructor() { }

  addData(data : Grocery){
    this.groceryItems.push(data)
  }

  getData() :Grocery[]{
    return this.groceryItems
  }
}
