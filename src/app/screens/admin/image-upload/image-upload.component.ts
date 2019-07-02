import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {Category} from '../../../_models/category';
import {CategoryService} from '../../../_services/category.service';

const URL = 'https://confetti-email-service.herokuapp.com/image/upload/';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  @ViewChild('fileUpload') fileElement: ElementRef;
  public option: number;
  public type: string;
  public categories: Category[];
  public types = ['BALLOON', 'GRAPHIC'];
  public uploader: FileUploader = new FileUploader({
    method: 'POST',
    headers: [
      {name: 'Authorization', value: 'Basic ' + btoa('elless:balloons123')}
    ],
    allowedFileType: ['image'],
    maxFileSize: 10 * 1024 * 1024,
  });
  public hasBaseDropZoneOver = false;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  public fetchCategories() {
    this.categoryService.getCategoryByType(this.type).subscribe(data => {
      this.categories = data;
    });
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public updateUrl() {
    console.log('update url');
    this.uploader.onBeforeUploadItem = (item) => {
      item.url = URL + this.option;
      item.withCredentials = false;
    };
  }

  fileUploadClick() {
    this.fileElement.nativeElement.click();
  }
}
