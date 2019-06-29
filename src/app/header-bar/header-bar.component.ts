import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  @Input() text: string;
  @Input() imageUrl: string;

  constructor() {
  }

  ngOnInit() {
  }

}
