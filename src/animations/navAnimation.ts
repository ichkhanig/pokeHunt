import { AnimationController, Animation } from '@ionic/angular';

export const homeToMenu = (baseEl: HTMLElement, opts?: any): Animation => {

  const DURATION = 700;
  const animationController = new AnimationController();

  //console.log('baseEl: ', baseEl);
  //console.log('opts: ', opts);

  if (opts.direction === 'forward') {
    const enterAnimation = animationController.create()
                          .addElement(opts.enteringEl)
                          .duration(DURATION)
                          .easing('ease-in')
                          .fromTo('opacity', 0, 1);

    const leaveAnimation = animationController.create()
                          .addElement(opts.leavingEl)
                          .duration(DURATION)
                          .easing('ease-out')
                          .fromTo('opacity', 1, 0);

    return animationController.create().addAnimation([enterAnimation, leaveAnimation]);
  } else {
    return null;
  }
}