import { IMapFunction, ISubscribeFunction, mapSubscribePipe, pipeSubscribeFunction } from '@lifaon/rx-js-light';

export {
  mapSubscribePipe as map$$$,
} from '@lifaon/rx-js-light';

export function map$$<GIn, GOut>(
  subscribe: ISubscribeFunction<GIn>,
  mapFunction: IMapFunction<GIn, GOut>,
): ISubscribeFunction<GOut> {
  return pipeSubscribeFunction(subscribe, [
    mapSubscribePipe<GIn, GOut>(mapFunction),
  ]);
}
