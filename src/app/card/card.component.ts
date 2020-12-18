import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() task: any;
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClicked() {
    this.delete.emit(this.task);
  }

}
