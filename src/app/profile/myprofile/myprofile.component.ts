import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  user: User;


  constructor(
    private authService: AuthService;
  ) { }

  ngOnInit() {
    this.authService.getCurrentUser.subscribe(user =>
      this.user = user
    );
  }

}
