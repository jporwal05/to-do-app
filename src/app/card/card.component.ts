import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() task: any;
  @Output() delete = new EventEmitter();
  originalTask: any;
  readOnly = true;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClicked() {
    this.delete.emit(this.task);
  }

  onEditClicked() {
    this.readOnly = false;
    this.originalTask = Object.assign({}, this.task);
  }

  onCancelClicked() {
    this.task.title = this.originalTask.title;
    this.task.content = this.originalTask.content;
    this.readOnly = true;
  }

  onSubmit(editForm: any) {
    this.task.title = editForm.title;
    this.task.content = editForm.content;
    this.readOnly = true;
  }

}
