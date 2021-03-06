import { ModelState, ModelType } from '@/models';
import { getInfo } from './service';

export type loginState = ModelState & {
  list: string[];
};

const initialState: loginState = {
  list: ['a', 'b'],
};

/**MARK dva */
const modelConfig: ModelType<loginState> = {
  namespace: 'login',
  state: initialState,
  reducers: {
    setList(state = initialState, { payload }) {},
  },
  effects: {
    *getInfo({ payload }, { put, call }) {
      const res = yield call(getInfo, payload);
      console.log(res.data);
      // console.log(res)
      // yield put({
      //     type: 'setList',
      //     payload: res,
      // });
    },
  },
};

export default modelConfig;
