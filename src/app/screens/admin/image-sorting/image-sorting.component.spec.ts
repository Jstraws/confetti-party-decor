import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSortingComponent } from './image-sorting.component';

describe('ImageSortingComponent', () => {
  let component: ImageSortingComponent;
  let fixture: ComponentFixture<ImageSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
