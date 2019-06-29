import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public submit() {
    if (this.form.value.username === environment.username && this.form.value.password === environment.password) {
      localStorage.setItem('currentUser', 'true');
      this.router.navigate(['/admin-upload']);
    } else {
      this.form.reset();
    }
  }
}
