import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kushala-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  name = new FormControl('Kushala');
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email:new FormControl('',[Validators.email,Validators.required]),
  address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  updateName() {
    this.name.setValue('India');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm1.value);
    this.formData = JSON.stringify(this.profileForm1.value);
  }
}
