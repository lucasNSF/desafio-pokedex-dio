import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const fadeDrop = trigger('fadeDrop', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [animate(400)]),
  transition(':leave', [
    animate(200, style({ transform: 'translateY(-50px)' })),
    animate(700, style({ transform: 'translateY(1000px)' })),
  ]),
]);

export { fadeDrop };
