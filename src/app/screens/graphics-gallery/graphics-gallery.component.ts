import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Image} from '../../_models/image';
import {ImageService} from '../../_services/image.service';
import {environment} from '../../../environments/environment';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'app-graphics-gallery',
  templateUrl: './graphics-gallery.component.html',
  styleUrls: ['./graphics-gallery.component.css']
})
export class GraphicsGalleryComponent implements OnInit {
  public images: Image[];
  public header: string;
  public cdnUrl: string;
  public defaultImage = '../../assets/img/loading.gif';
  private type: string;
  private albums = [];

  constructor(private route: ActivatedRoute,
              private imageService: ImageService,
              private lightBox: Lightbox) {
  }

  ngOnInit() {
    // this.type = this.route.snapshot.paramMap.get('type');
    this.route.paramMap.subscribe(params => {
      this.type = params.get('type');
      this.cdnUrl = `${environment.cdnUrl}/${this.type}`;
      this.images = [];
      if (this.type === 'candle_boards') {
        this.header = 'Candle Boards';
      } else if (this.type === 'invitations') {
        this.header = 'Invitations';
      } else if (this.type === 'seating_sign_in_boards') {
        this.header = 'Seating & Sign-In Boards';
      } else if (this.type === 'logos') {
        this.header = 'Logos';
      }

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
