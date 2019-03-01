import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  selected="battery"

  constructor(private router: Router) { }

  ngOnInit() {}

  setTab(val){
    this.selected = val;
  }

  assessment(){
    this.router.navigate(['tabs/assessment/create']);
  }

}
