import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  animation: Animation;

  @ViewChild('logo', {static: false}) logo: ElementRef;
  constructor(private animationController: AnimationController) {}

  ngAfterViewInit() {
    this.animation = this.animationController.create()
                     .addElement(this.logo.nativeElement)
                     .duration(4000)
                     .easing('ease-out')
                     .fromTo('transform', 'scale(1)', 'scale(5)')
                     .fromTo('opacity', 1, 0);
  }

  toggleAnimation() {
    this.animation.play();
  }
}
