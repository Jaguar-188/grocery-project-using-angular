import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceryItemsService {

  groceryItems = new Array;

  constructor() { }

  setData(data : any[]){
    this.groceryItems = data
  }

  getData() {
    return this.groceryItems
  }
}
