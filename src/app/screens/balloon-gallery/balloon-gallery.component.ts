import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-balloon-gallery',
  templateUrl: './balloon-gallery.component.html',
  styleUrls: ['./balloon-gallery.component.css']
})
export class BalloonGalleryComponent implements OnInit {
  public cdnUrl = environment.cdnUrl + '/thumbnails';

  constructor() {
  }

  ngOnInit() {
  }

}
