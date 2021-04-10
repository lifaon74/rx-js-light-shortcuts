import {
  IDefaultNotificationsUnion, IInferEmitPipeToSubscribePipeEmitPipeInValue, IMapFunction, ISubscribeFunction,
  mergeMapSubscribePipeWithNotifications, pipeSubscribeFunction
} from '@lifaon/rx-js-light';

export {
  mergeMapSubscribePipeWithNotifications as mergeMapN$$$,
} from '@lifaon/rx-js-light';

export function mergeMapN$$<GIn, GMapValueOut>(
  subscribe: ISubscribeFunction<GIn>,
  mapFunction: IMapFunction<IInferEmitPipeToSubscribePipeEmitPipeInValue<GIn>, ISubscribeFunction<IDefaultNotificationsUnion<GMapValueOut>>>,
  maxNumberOfSubscriptions?: number,
): ISubscribeFunction<IDefaultNotificationsUnion<GMapValueOut>> {
  return pipeSubscribeFunction(subscribe, [
    mergeMapSubscribePipeWithNotifications<GIn, GMapValueOut>(mapFunction, maxNumberOfSubscriptions),
  ]);
}
