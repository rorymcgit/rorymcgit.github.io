import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IncrementNumber, MultiplyNumberByTen, DecrementNumber } from 'src/app/shared/app.actions';

export interface AppStateModel {
  value: number;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    value: 0,
  }
})
export class AppState {

  @Action(IncrementNumber)
  incrementNumber(context: StateContext<AppStateModel>) {
    // More verbose way of doing patchState
    const state = context.getState();
    const incrementedNumber = state.value + 1;

    context.setState({
      ...state,
      value: incrementedNumber,
    });
  }

  @Action(MultiplyNumberByTen)
  multiplyNumberByTen(context: StateContext<AppStateModel>) {
    context.patchState({
      value: context.getState().value * 10,
    });
  }

  @Action(DecrementNumber)
  decrementNumber(context: StateContext<AppStateModel>) {
    context.patchState({
      value: context.getState().value - 1,
    });
  }

  // @Selector()
  // https://ngxs.gitbook.io/ngxs/concepts/select#joining-selectors
}
