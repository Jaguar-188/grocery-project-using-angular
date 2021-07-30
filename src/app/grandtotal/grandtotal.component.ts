import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-grandtotal',
  templateUrl: './grandtotal.component.html',
  styleUrls: ['./grandtotal.component.css']
})
export class GrandtotalComponent implements OnInit {

  @Input() grandTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges(changes : SimpleChange) {
  //   if(changes.previousValue === this.grandTotal)
  //   {

  //   }
  // }

}
