import { debounceFrameSubscribePipe, ISubscribeFunction, pipeSubscribeFunction } from '@lifaon/rx-js-light';

export {
  debounceFrameSubscribePipe as frame$$$,
} from '@lifaon/rx-js-light';


export function debounceFrame$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    debounceFrameSubscribePipe<GValue>(),
  ]);
}

