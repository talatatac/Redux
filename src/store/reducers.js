import {reducer} from './store-helpers';
import get from 'lodash/get';
import * as actions from './actions';


export const sliceReducer = reducer({'Slice' : 1},
    {[actions.INCREMENT] : (state, action) => action.payload}
)
export const sliceReducer2 = reducer({'Slice' : 2},
    {[actions.DECREMENT] : (state, action) => action.payload}
)
