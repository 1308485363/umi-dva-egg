import { Effect, Subscription, EffectsCommandMap, Model } from 'dva';
import { getInfo } from './service';


const initialState = {
    list: ['a', 'b']
}

/**MARK dva */
const modelConfig = {
    namespace: 'login',
    state: initialState,
    reducers: {
        setList(state = initialState, { payload }) {
            
        },
    },
    effects: {
        *getInfo({ payload }, {put, call}) {
            const res = yield call(getInfo, payload);
            console.log(res)
            // yield put({
            //     type: 'setList',
            //     payload: res,
            // });
        },
    }
}

export default modelConfig;