import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kushala-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  arrayData = [1,2,3,5];
  arrayDataString?: string[];
  arrayDataObj?: any[];
  constructor(){

  }

  ngOnInit() {
    this.arrayDataString = ["Kushala", "Yamuna", "Hari","pooja"];
    this.arrayDataObj = [
      {
        name: "Kushala",
        role: "Developer",
        location: "Hyderabad"
      },
      {
        name: "Yamuna",
        role: "Backend Developer",
        location: "Warangal"
      },
      {
        name: "Hari",
        role: "Manager",
        location: "Canada"
      },
      {
        name: "pooja",
        role: "HR",
        location: "Hyderabad"
      }
    ]
  }

}
