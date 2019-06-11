import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // icons
  faTwitter = faTwitter;
  user = new User();
  signinButton = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.router.navigate(['timeline']);
    }
  }

  saveUserSession() {
    this.authService.login(this.user);
  }

  saveUserSessionWithEnter(e) {
    this.enableSigninButton();
    if (this.user.name.length > 0 && this.user.userName.length > 0) {
      if (e.key === 'Enter') {
        this.authService.login(this.user);
      }
    }
  }

  enableSigninButton() {
    if (this.user.name.length < 1 || this.user.userName.length < 1) {
      this.signinButton = false;
    } else {
      this.signinButton = true;
    }
  }
}
