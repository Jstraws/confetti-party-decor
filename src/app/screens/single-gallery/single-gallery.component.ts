import {Component, OnInit} from '@angular/core';
import {Image} from '../../_models/image';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';
import {ImageService} from '../../_services/image.service';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html',
  styleUrls: ['./single-gallery.component.css']
})
export class SingleGalleryComponent implements OnInit {

  public images: Image[];
  public header: string;
  public cdnUrl: string;
  public defaultImage = '../../assets/img/loading.gif';
  public type: string;
  private albums = [];

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private lightBox: Lightbox) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.type = params.get('type');
      this.cdnUrl = `${environment.cdnUrl}/${this.type}`;
      this.images = [];

      this.imageService.getImageByFolder(this.type).subscribe(data => {
        this.images = data;
        this.albums = [];
        for (const image of this.images) {
          const album = {
            src: `${this.cdnUrl}/${image.filename}`,
          };

          this.albums.push(album);
        }
      });
    });
  }

  public open(index: number): void {
    this.lightBox.open(this.albums, index, {
      centerVertically: true,
      disableScrolling: true
    });
  }
}
