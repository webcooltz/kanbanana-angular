import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  todoList: string[];

  constructor() {
    this.todoList = [
      "wash car",
      "groceries",
      "mow lawn"
    ];
  }

  ngOnInit(): void {
  }

}
