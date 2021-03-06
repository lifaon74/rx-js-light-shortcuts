import {
  IDefaultNotificationsUnion, IInferEmitPipeToSubscribePipeEmitPipeInValue, IMapFunction, ISubscribeFunction,
  mergeMapSingleSubscribePipeWithNotifications, pipeSubscribeFunction
} from '@lifaon/rx-js-light';

export {
  mergeMapSingleSubscribePipeWithNotifications as mergeMapSN$$$,
} from '@lifaon/rx-js-light';

export function mergeMapSN$$<GIn, GMapValueOut>(
  subscribe: ISubscribeFunction<GIn>,
  mapFunction: IMapFunction<IInferEmitPipeToSubscribePipeEmitPipeInValue<GIn>, ISubscribeFunction<IDefaultNotificationsUnion<GMapValueOut>>>,
): ISubscribeFunction<IDefaultNotificationsUnion<GMapValueOut>> {
  return pipeSubscribeFunction(subscribe, [
    mergeMapSingleSubscribePipeWithNotifications<GIn, GMapValueOut>(mapFunction),
  ]);
}
