import { ISubscribeFunction, mergeAllSingleSubscribePipe, pipeSubscribeFunction } from '@lifaon/rx-js-light';

export {
  mergeAllSingleSubscribePipe as mergeAllS$$$,
} from '@lifaon/rx-js-light';

export function mergeAllS$$<GValue>(
  subscribe: ISubscribeFunction<ISubscribeFunction<GValue>>,
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    mergeAllSingleSubscribePipe<GValue>(),
  ]);
}
