import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(createForm: Form) {
    console.log(createForm);
  }

}
