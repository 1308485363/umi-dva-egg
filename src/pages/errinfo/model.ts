import { ModelState, ModelType } from '@/models';
import { getInfo } from './service';

export type errinfoState = ModelState & {
  list: string[];
};

const initialState: errinfoState = {
  list: ['a', 'b'],
};

/**MARK dva */
const modelConfig: ModelType<errinfoState> = {
  namespace: 'errinfo',
  state: initialState,
  reducers: {
    setList(state = initialState, { payload }) {},
  },
  effects: {
    *getInfo({ payload, callBack }, { put, call }) {
      const res = yield call(getInfo, payload);
      if (callBack) {
        callBack(res.list);
      }
      // console.log(res)
      // yield put({
      //     type: 'setList',
      //     payload: res,
      // });
    },
  },
};

export default modelConfig;
