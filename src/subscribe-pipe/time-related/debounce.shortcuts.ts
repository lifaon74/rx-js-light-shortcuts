import { debounceTimeSubscribePipe, ISubscribeFunction, pipeSubscribeFunction } from '@lifaon/rx-js-light';

export {
  debounceTimeSubscribePipe as debounce$$$,
} from '@lifaon/rx-js-light';


export function debounce$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
  duration: number,
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    debounceTimeSubscribePipe<GValue>(duration),
  ]);
}

