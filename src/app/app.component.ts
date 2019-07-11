import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { IncrementNumber, MultiplyNumberByTen, DecrementNumber } from 'src/app/shared/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: Store) {}

  incrementValueClick() {
    this.store.dispatch(new IncrementNumber());
  }

  multiplyValueClick() {
    this.store.dispatch(new MultiplyNumberByTen());
  }

  decrementValueClick() {
    this.store.dispatch(new DecrementNumber());
  }

}
