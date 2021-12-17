import { Reducer, AnyAction } from 'redux';
import { Effect, Subscription, EffectsCommandMap, Model } from 'dva';
import { SubscriptionAPI } from 'dva';
import { RouterTypes } from 'umi';
import { Location } from 'history';

type customEffect = (action: customAction, effects: EffectsCommandMap) => void;

interface customAction extends AnyAction {
  callback?: (res?: any) => void;
}

export interface ModelState {
  [prop: string]: any;
}

export interface ModelType<T extends ModelState> extends Model {
  namespace: string;
  state: T;
  reducers: {
    [prop: string]: Reducer<T, AnyAction>;
  };
  effects: {
    [prop: string]: customEffect;
  };
  subscriptions?: { [prop: string]: Subscription };
}

export type UmiPageProps<T = {}> = SubscriptionAPI & RouterTypes<{}, T>;

export interface Loading {
  global: boolean;
  effects: {
    [key: string]: boolean | undefined;
  };
  models: {
    global?: boolean;
  };
}
export interface ConnectState {
  loading: Loading;
  global?: ModelType;
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
  dispatch?: Dispatch<AnyAction>;
}

export interface ILocation extends Location {
  query?: any;
}
