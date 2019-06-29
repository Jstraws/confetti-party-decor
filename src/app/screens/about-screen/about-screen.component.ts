import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-screen',
  templateUrl: './about-screen.component.html',
  styleUrls: ['./about-screen.component.css']
})
export class AboutScreenComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate(['/admin-upload']);
  }
}
