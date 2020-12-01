import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, AfterViewInit {

  animation1: Animation;
  animation2: Animation;
  animation3: Animation;

  constructor(private animationController: AnimationController) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.animation1 = this.animationController.create()
                     .addElement(document.querySelector('#anim1'))
                     .duration(200)
                     .easing('ease-out')
                     .fromTo('transform', 'scale(1)', 'scale(0.9)')
                     .fromTo('transform', 'scale(0.9)', 'scale(1)')
                     .iterations(3);

    this.animation2 = this.animationController.create()
                     .addElement(document.querySelector('#anim2'))
                     .duration(200)
                     .easing('ease-out')
                     .fromTo('transform', 'scale(1)', 'scale(0.9)')
                     .fromTo('transform', 'scale(0.9)', 'scale(1)')
                     .iterations(3);

    this.animation3 = this.animationController.create()
                     .addElement(document.querySelector('#anim3'))
                     .duration(200)
                     .easing('ease-out')
                     .fromTo('transform', 'scale(1)', 'scale(0.9)')
                     .fromTo('transform', 'scale(0.9)', 'scale(1)')
                     .iterations(3);
  }

  toggleAnimation1() {
    this.animation1.play();
  }

  toggleAnimation2() {
    this.animation2.play();
  }

  toggleAnimation3() {
    this.animation3.play();
  }

}
