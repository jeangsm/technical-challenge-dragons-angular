import {
  trigger,
  animate,
  transition,
  style,
  query,
} from '@angular/animations';

const slideAnimation = trigger('slideInOut', [
  transition(':enter', [
    style({transform: 'translateY(-100%)'}),
    animate('500ms ease-in', style({transform: 'translateX(0%)'}))
  ]),
  transition(':leave', [
    animate('500ms ease-in', style({transform: 'translateX(-100%)'}))
  ])
]);

export default slideAnimation;
