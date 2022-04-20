import {
  trigger,
  animate,
  transition,
  style,
  query,
} from '@angular/animations';

const fadeInAnimation = trigger('fadeInAnimation', [
  transition(':enter', [
    style({ opacity: 0}),
    animate('.75s', style({opacity: 1}))
  ]),
  transition(':leave', [
    style({ opacity: 1}),
    animate('.75s', style({opacity: 0}))
  ]),

]);

export default fadeInAnimation;
