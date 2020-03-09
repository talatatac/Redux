import {reducer} from './store-helpers';
import get from 'lodash/get';
import * as actions from './actions';

export const routeConfig = reducer({}, {
    [actions.INCREMENT]: (state, action) => get(action, 'payload', {})
});
