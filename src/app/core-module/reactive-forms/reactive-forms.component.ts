import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'kushala-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  users!: User;
  name = new FormControl('Kushala');
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email:new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl(''),
    gender:new FormControl()
  })
  profileForm1 = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    email:[''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });
  formData!: string;
  constructor(private fb: FormBuilder, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }
  updateName() {
    this.name.setValue('India');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.formData = JSON.stringify(this.profileForm.value);
    this.authService.addUser(this.userData());
    alert('Registration Successfull');
    this.profileForm.reset();
  }

  userData(): User {
      return this.users = {
        email: this.email.value,
        password: this.password.value
      }
  }

  get email() {
      return this.profileForm.get('email') as FormControl;
  }

  get password() {
    return this.profileForm.get('password') as FormControl;
}
}
