import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GraphicsGalleryComponent} from './graphics-gallery.component';

describe('GraphicsGalleryComponent', () => {
  let component: GraphicsGalleryComponent;
  let fixture: ComponentFixture<GraphicsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicsGalleryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
