import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../store/counter/counter.actions';
import { CommonModule } from '@angular/common';
import { CounterState } from '../store/counter/counter.state';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  count$: Observable<number>;

  constructor(private store: Store<{counter: CounterState}>) {

    this.count$ = this.store.select(state => state.counter.count);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
