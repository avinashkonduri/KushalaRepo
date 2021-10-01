import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiUser } from 'src/app/model/user';
import { DummyApiService } from 'src/app/services/dummy-api.service';

@Component({
  selector: 'kushala-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
@Input() fromParent!: any;

profileForm = new FormGroup({
  id: new FormControl(''),
  name: new FormControl(''),
  email:new FormControl(''),
  status: new FormControl(''),
  gender:new FormControl()
})
  users: any;
  constructor(public activeModal: NgbActiveModal, private userService: DummyApiService) { }

  ngOnInit(): void {
    console.log(this.fromParent);
    if(this.fromParent.action == 'new') {
      console.log(this.fromParent.action);
    }
    else {
      this.userService.getUserListById(this.fromParent.id).subscribe((resp: any) => {
        this.profileForm.controls['id'].setValue(resp.data.id);
        this.profileForm.controls['name'].setValue(resp.data.name);
        this.profileForm.controls['email'].setValue(resp.data.email);
        this.profileForm.controls['gender'].setValue(resp.data.gender);
        this.profileForm.controls['status'].setValue(resp.data.status);
      });
    }

    // this.profileForm.controls['id'].setValue(this.fromParent.id);
    // this.profileForm.controls['name'].setValue(this.fromParent.name);
    // this.profileForm.controls['email'].setValue(this.fromParent.email);
    // this.profileForm.controls['gender'].setValue(this.fromParent.gender);
    // this.profileForm.controls['status'].setValue(this.fromParent.status);
  }
  onSubmit(){
    console.warn(this.profileForm.value);
    if(this.fromParent.action == 'new') {
      this.userService.addApiUser(this.userData()).subscribe((resp: any) => {
        if(resp) {
          alert('Added User Successfully');
          this.profileForm.reset();
        }
        else {
          alert('User Not added');
        }
      })
    }
    else {
      this.userService.updateApi(this.userData()).subscribe((resp:any) =>{
        if(resp) {
          alert('Updated the User');
        }
        else {
          alert('Updated the not User');
        }
      })
    }

  }


  // Setting form details to USER Model
  userData(): ApiUser {
    return this.users = {
      id:this.id.value,
      name: this.name.value,
      email: this.email.value,
      gender: this.gender.value,
      status: this.status.value,
    }
  }

     // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get id() {
    return this.profileForm.get('id') as FormControl;
  }
  get name() {
    return this.profileForm.get('name') as FormControl;
  }
  get email() {
    return this.profileForm.get('email') as FormControl;
  }
  get gender() {
    return this.profileForm.get('gender') as FormControl;
  }
  get status() {
    return this.profileForm.get('status') as FormControl;
  }
  // ------------------------

}
