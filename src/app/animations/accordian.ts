import { transition, style, animate, trigger } from "@angular/animations";

export const AccordianAnimation = trigger('accordian', [
  transition('void => *', [
    style({
      height: 0,
      opacity: 0,
    }),
    animate('100ms ease-in', style({
      height: "*",
    })),
    animate('100ms 10ms ease-in', style({
      opacity: 1
    }))
  ]),
  transition('* => void', [
    style({
      height: "*",
      opacity: 1,
    }),
    animate('20ms ease-in', style({
      opacity: 0
    })),
    animate('100ms 20ms ease-in', style({
      height: 0,
    })),
  ])
]) 

