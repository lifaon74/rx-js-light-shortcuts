import { IMapFunction, ISubscribeFunction, mergeMapSubscribePipe, pipeSubscribeFunction } from '@lifaon/rx-js-light';

export {
  mergeMapSubscribePipe as mergeMap$$$,
} from '@lifaon/rx-js-light';

export function mergeMap$$<GIn, GOut>(
  subscribe: ISubscribeFunction<GIn>,
  mapFunction: IMapFunction<GIn, ISubscribeFunction<GOut>>,
  maxNumberOfSubscriptions?: number,
): ISubscribeFunction<GOut> {
  return pipeSubscribeFunction(subscribe, [
    mergeMapSubscribePipe<GIn, GOut>(mapFunction, maxNumberOfSubscriptions),
  ]);
}
