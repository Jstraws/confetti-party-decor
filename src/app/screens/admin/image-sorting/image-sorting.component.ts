import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../../_services/image.service';
import {Category} from '../../../_models/category';
import {CategoryService} from '../../../_services/category.service';
import {Image} from '../../../_models/image';
import {environment} from '../../../../environments/environment';
import {AlertService} from '../../../_services/alert.service';
import {ConfirmationModalService} from '../../../_services/confirmation-modal.service';

@Component({
  selector: 'app-image-sorting',
  templateUrl: './image-sorting.component.html',
  styleUrls: ['./image-sorting.component.css']
})
export class ImageSortingComponent implements OnInit {
  public alertMessage: string;
  public option: string;
  public type: string;
  public categories: Category[];
  public types = ['BALLOON', 'GRAPHIC'];
  public images: Image[];
  public cdnUrl: string;
  public defaultImage = '../../assets/img/loading.gif';

  constructor(
    private imageService: ImageService,
    private categoryService: CategoryService,
    private alertService: AlertService,
    private confirm: ConfirmationModalService
  ) {
  }

  ngOnInit() {
    this.alertService.alertMessage.subscribe(message => {
      this.alertMessage = message;
    });
  }

  public fetchCategories() {
    this.categoryService.getCategoryByType(this.type).subscribe(data => {
      this.categories = data;
    });
  }

  public fetchImages() {
    this.imageService.getImageByFolder(this.option).subscribe(data => {
      this.images = data;
      this.cdnUrl = `${environment.cdnUrl}/${this.option}`;
    });
  }

  public saveImage(image: Image) {
    this.sortAndRenumber();
    this.imageService.saveImage(image).subscribe(data => {
      image = data;
      this.images.sort((a, b) => a.imageOrder - b.imageOrder);
      this.alertService.setErrorMessage('Image saved!');
    });
  }

  saveAllImages() {
    this.sortAndRenumber();
    this.imageService.saveImageList(this.images).subscribe(data => {
      this.images = data;
      this.images.sort((a, b) => a.imageOrder - b.imageOrder);
      this.alertService.setErrorMessage('Images saved!');
    });
  }

  private sortAndRenumber() {
    this.images.sort((a, b) => a.imageOrder - b.imageOrder);
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].imageOrder = i + 1;
    }
  }

  public deleteImage(imageId: number) {
    this.confirm.showConfirm('Delete Image', 'Are you sure you want to delete this image?')
      .content.onClose.subscribe(isConfirmed => {
      if (isConfirmed) {
        this.imageService.deleteImage(imageId).subscribe(data => {
          this.images = this.images.filter(image => image.imageId !== imageId);
          this.saveAllImages();
        });
      }
    });
  }

  public closeAlert() {
    this.alertMessage = '';
    this.alertService.setErrorMessage('');
  }
}
