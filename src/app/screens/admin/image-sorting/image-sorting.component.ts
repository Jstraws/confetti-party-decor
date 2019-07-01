import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../../_services/image.service';
import {Category} from '../../../_models/category';
import {CategoryService} from '../../../_services/category.service';
import {Image} from '../../../_models/image';
import {environment} from '../../../../environments/environment';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-image-sorting',
  templateUrl: './image-sorting.component.html',
  styleUrls: ['./image-sorting.component.css']
})
export class ImageSortingComponent implements OnInit {
  public option: string;
  public type: string;
  public categories: Category[];
  public types = ['BALLOON', 'GRAPHIC'];
  public images: Image[];
  public cdnUrl: string;
  public defaultImage = '../../assets/img/loading.gif';

  constructor(
    private imageService: ImageService,
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
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

  drop(event: CdkDragDrop<{ title: string, poster: string }[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }
}
