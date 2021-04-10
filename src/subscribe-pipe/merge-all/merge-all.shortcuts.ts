import { ISubscribeFunction, mergeAllSubscribePipe, pipeSubscribeFunction } from '@lifaon/rx-js-light';

export {
  mergeAllSubscribePipe as mergeAll$$$,
} from '@lifaon/rx-js-light';

export function mergeAll$$<GValue>(
  subscribe: ISubscribeFunction<ISubscribeFunction<GValue>>,
  maxNumberOfSubscriptions?: number
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    mergeAllSubscribePipe<GValue>(maxNumberOfSubscriptions),
  ]);
}
