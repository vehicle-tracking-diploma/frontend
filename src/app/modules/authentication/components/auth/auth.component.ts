import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  // @ts-ignore
  @ViewChild('authForm') authform:NgForm;
  onSubmit() {
    console.log(this.authform)
  }
}

