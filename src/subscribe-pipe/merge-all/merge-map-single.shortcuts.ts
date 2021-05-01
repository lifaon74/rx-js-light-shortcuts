import { IMapFunction, ISubscribeFunction, mergeMapSingleSubscribePipe, pipeSubscribeFunction } from '@lifaon/rx-js-light';

export {
  mergeMapSingleSubscribePipe as mergeMapS$$$,
} from '@lifaon/rx-js-light';

export function mergeMapS$$<GIn, GOut>(
  subscribe: ISubscribeFunction<GIn>,
  mapFunction: IMapFunction<GIn, ISubscribeFunction<GOut>>,
): ISubscribeFunction<GOut> {
  return pipeSubscribeFunction(subscribe, [
    mergeMapSingleSubscribePipe<GIn, GOut>(mapFunction),
  ]);
}
