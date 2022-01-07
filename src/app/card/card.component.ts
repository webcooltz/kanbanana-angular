import { Component, Input, OnInit } from '@angular/core';
import { CardSchema } from "../CardSchema";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  todoList: string[];

  @Input() card: CardSchema;

  constructor() {
    this.todoList = [
      "wash car",
      "groceries",
      "mow lawn"
    ];
  }

  ngOnInit() {}
  
  dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

}
