import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BalloonGalleryComponent} from './balloon-gallery.component';

describe('BalloonGalleryComponent', () => {
  let component: BalloonGalleryComponent;
  let fixture: ComponentFixture<BalloonGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BalloonGalleryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
