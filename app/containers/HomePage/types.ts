import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
interface HomePageState {
    readonly bitcoinPrices: any;
    readonly error: any;
}

/* --- ACTIONS --- */
type HomePageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = HomePageState;
type ContainerActions = HomePageActions;

export { ContainerState, ContainerActions };
