import {
  trigger,
  animate,
  transition,
  style,
  query,
} from '@angular/animations';

const fadeAnimation = trigger('fadeAnimation', [
  // transition('* => *', [
  //   query(
  //     ':enter',
  //     [style({ opacity: 0 })],
  //     { optional: true }
  //   ),
  //   query(
  //     ':leave',
  //      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
  //     { optional: true }
  //   ),
  //   query(
  //     ':enter',
  //     [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
  //     { optional: true }
  //   )
  // ])
  transition('* => *', [
    query(':enter', [style({ opacity: 0, position: 'absolute' })], {
      optional: true,
    }),
    query(
      ':leave',
      [
        style({ opacity: 1 }),
        animate('0.75s', style({ opacity: 0, position: 'absolute' })),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('0.75s', style({ opacity: 1, position: 'relative' })),
      ],
      { optional: true }
    ),
  ]),
]);

export default fadeAnimation;
