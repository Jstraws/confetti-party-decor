import {Component, Inject, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, map, startWith} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  public isScreenSmall$: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    const checkScreenSize = () => this.document.body.offsetWidth < 1450;

    // Create observable from window resize event throttled so only fires every 500ms
    const screenSizeChanged$ = fromEvent(window, 'resize').pipe(debounceTime(500)).pipe(map(checkScreenSize));

    // Start off with the initial value use the isScreenSmall$ | async in the
    // view to get both the original value and the new value after resize.
    screenSizeChanged$.pipe(startWith(checkScreenSize())).subscribe(data => {
      this.isScreenSmall$ = data;
      console.log(this.isScreenSmall$);
    });
  }

}
