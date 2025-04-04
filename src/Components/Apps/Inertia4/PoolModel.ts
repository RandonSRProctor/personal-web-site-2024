import { Action } from './Action.ts';
import { VirtualSquare } from './VirtualSquare.ts';

class VirtualPool {
  state: VirtualSquare[] = [];
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  constructor(domSquaresArray: any[]) {
    for (let i = 0; i < domSquaresArray.length; i++) {
      this.state.push(new VirtualSquare(i));
    }
  }
  applyActions(providedArrayOfAllActions: Action[]) {
    const newState: VirtualSquare[] = [...this.state];
    for (const action of providedArrayOfAllActions) {
      switch (action.type) {
        case 'DEDUCT':
          newState[action.index].forceMovingLeft -= action.forceMovingLeft;
          newState[action.index].forceMovingRight -= action.forceMovingRight;
          break;

        case 'INCREMENT':
          if (action.forceMovingLeft) {
            newState[action.index].forceMovingLeft += action.forceMovingLeft;
          }
          if (action.forceMovingRight) {
            newState[action.index].forceMovingRight += action.forceMovingRight;
          }
          break;
      }
    }
    this.state = [...newState];
  }
}

export { VirtualPool };
