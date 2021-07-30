import { GroceryItemsService } from './services/grocery-items.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { GrandtotalComponent } from './grandtotal/grandtotal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    TableComponent,
    TableRowComponent,
    GrandtotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GroceryItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
