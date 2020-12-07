import { AfterViewInit, Directive, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSwipe]'
})
export class SwipeDirective implements AfterViewInit {

  xDown = null;
  yDown = null;
  time = 0;
  @Output() swipeLeft: EventEmitter<any>;
  @Output() swipeRight: EventEmitter<any>;
  @Output() swipeUp: EventEmitter<any>;
  @Output() swipeDown: EventEmitter<any>;

  constructor(private renderer: Renderer2,
              private elRef: ElementRef) {
    this.swipeLeft = new EventEmitter<any>();
    this.swipeRight = new EventEmitter<any>();
    this.swipeUp = new EventEmitter<any>();
    this.swipeDown = new EventEmitter<any>();
  }

  ngAfterViewInit() {
    this.renderer.listen(this.elRef.nativeElement, 'touchstart', (event: TouchEvent) => {
      this.handleTouchStart(event);
    });
    this.renderer.listen(this.elRef.nativeElement, 'touchend', (event: TouchEvent) => {
      this.handleTouchMove(event);
    });
  }

  handleTouchStart(event: TouchEvent) {
    this.xDown = event.touches[0].pageX;
    this.yDown = event.touches[0].pageY;
    this.time = event.timeStamp;
  }

  handleTouchMove(event: TouchEvent) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    const touch = event.touches[0] || event.changedTouches[0];
    const xUp = touch.pageX;
    const yUp = touch.pageY;
    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;
    const timeDiff = event.timeStamp - this.time;

    if (timeDiff < 500) {
      if (Math.abs(xDiff) > 80) {
        if (xDiff > 0) {
          this.swipeRight.emit(event);
        } else {
          this.swipeLeft.emit(event);
        }
      }

    }

    if (Math.abs(yDiff) > 80) {
      if (yDiff > 0) {
        this.swipeDown.emit(event);
      } else {
        this.swipeUp.emit(event);
      }
    }

    this.xDown = null;
    this.yDown = null;
  }

}
