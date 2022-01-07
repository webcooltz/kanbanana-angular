import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    ColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
