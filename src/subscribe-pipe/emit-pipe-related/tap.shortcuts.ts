import { ISubscribeFunction, ITabCallback, pipeSubscribeFunction, tapSubscribePipe } from '@lifaon/rx-js-light';

export {
  tapSubscribePipe as tap$$$,
} from '@lifaon/rx-js-light';

export function tap$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
  callback: ITabCallback<GValue>,
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    tapSubscribePipe<GValue>(callback),
  ]);
}
