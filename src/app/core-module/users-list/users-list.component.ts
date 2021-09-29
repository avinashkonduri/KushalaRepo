import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DummyApiService } from 'src/app/services/dummy-api.service';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'kushala-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usersList: any;

  constructor(private userService: DummyApiService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(){
    this.userService.getUsersList().subscribe((resp:any) => {
      this.usersList = resp.data;
    });
  }

  editUser(user: any){
    console.log(user);
    const modalRef = this.modalService.open(UserDetailsComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });
      let data = {
        id:user.id,name:user.name,gender:user.gender,email:user.email,status:user.status,
      }

      modalRef.componentInstance.fromParent = data;
      modalRef.result.then((result) => {
        console.log(result);
      }, (reason) => {
      });
  }
}
