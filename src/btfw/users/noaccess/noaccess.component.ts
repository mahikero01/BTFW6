import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApi } from '../user-api';

@Component({
  selector: 'btfw-noaccess',
  templateUrl: './noaccess.component.html',
  styleUrls: ['./noaccess.component.css']
})
export class NoaccessComponent implements OnInit {

  constructor(private userApi: UserApi, private router: Router) { }

  ngOnInit() {
    
  }

  enterNow() {
    this.userApi.signIn("sarmife", "admin")
    .subscribe(() => {this.router.navigate(['admin-access'])});
  }

}
