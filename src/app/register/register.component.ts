import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  matchingFields = (field1, field2) => {
    return registerForm => {
        if (registerForm.controls[field1].value !== registerForm.controls[field2].value)  {
            return { mismatchFields: true };
        } else {
          return null;
        }
    };
  }

  emailValid = () => {
    return control => {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(control.value) ? null : { invalidEmail: true };
    };
  }

  registerForm = this.formBuilder.group({
    firstName: [""],
    lastName: [""],
    email: ["", [this.emailValid()]],
    password: [""],
    confirmPassword: [""]
  }, { validator: this.matchingFields("password", "confirmPassword")});

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.registerForm.value);
  }

}
