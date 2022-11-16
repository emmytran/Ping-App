
import { Directive, HostListener, EventEmitter, Output } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';
import { takeUntil, tap, filter } from 'rxjs/operators';

@Directive({
  selector: '[appHoldable]'
})
export class HoldableDirective {

  //emit out to the parent component
  //this event will emit the num of millisecs that a user has held a button down
  @Output() holdTime: EventEmitter<number> = new EventEmitter();

  state: Subject<string> = new Subject();

  cancel: Observable<string>;

  constructor() {
    this.cancel = this.state.pipe(
      filter(v => v === 'cancel'),
      tap(v => {
        console.log('%c stopped hold', 'color: #ec6969; font-weight: bold');
        this.holdTime.emit(0); //restart
      })
    );
  }

  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onExit() { //user stop holding button
    this.state.next('cancel');
  }

  @HostListener('mousedown', ['$event'])
  onHold() {
    console.log('%c started hold', 'color: #5fba7d; font-weight: bold');
    this.state.next('start');

    const n = 100; //interval period 100 milliseconds
    interval(n).pipe(
      takeUntil(this.cancel), //stop emitting values when user stop holding
      tap(v => {
        this.holdTime.emit(v * n);
      }),
    )
    .subscribe();
  }
}