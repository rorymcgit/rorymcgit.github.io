import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { AppState, AppStateModel } from 'src/app/shared/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-value',
  templateUrl: './show-value.component.html',
  styleUrls: ['./show-value.component.css']
})
export class ShowValueComponent implements OnInit {

  @Select(AppState) app$: Observable<AppStateModel>;

  currentValue: number;

  ngOnInit() {
    this.app$.subscribe((appState: AppStateModel) => {
      this.currentValue = appState.value;
    });
  }

}
