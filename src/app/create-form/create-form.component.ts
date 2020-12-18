import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  tasks: { title: string, task: string }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(createForm: any) {
    this.tasks.push({
      title: createForm.title,
      task: createForm.task
    })
    console.log(this.tasks);
  }

}
