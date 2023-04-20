import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  isClickedMap: boolean = true;
  isClickedReport: boolean = false;
  isClickedAdmin: boolean = false;

  onIsClicked(value: string) {
    if (value === 'map') {
      this.isClickedMap = !this.isClickedMap;
    }
    if (value === 'report') {
      this.isClickedReport = !this.isClickedReport;
    }
    if (value === 'admin') {
      this.isClickedAdmin = !this.isClickedAdmin;
    }
  }

  logout() {

  }
}

