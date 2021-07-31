import { IMapFilterMapFunction, ISubscribeFunction, mapFilterSubscribePipe, pipeSubscribeFunction } from '@lifaon/rx-js-light';

export {
  mapFilterSubscribePipe as mapFilter$$$,
} from '@lifaon/rx-js-light';

export function mapFilter$$<GIn, GOut>(
  subscribe: ISubscribeFunction<GIn>,
  mapFunction: IMapFilterMapFunction<GIn, GOut>,
): ISubscribeFunction<GOut> {
  return pipeSubscribeFunction(subscribe, [
    mapFilterSubscribePipe<GIn, GOut>(mapFunction),
  ]);
}
