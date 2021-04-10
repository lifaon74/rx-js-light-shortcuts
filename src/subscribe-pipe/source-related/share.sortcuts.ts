import {
  createMulticastReplayLastSource,
  IShareSubscribePipeGetMultiCastSource, ISubscribeFunction, ISubscribePipeFunction, pipeSubscribeFunction,
  shareSubscribePipe
} from '@lifaon/rx-js-light';

export {
  shareSubscribePipe as share$$$,
} from '@lifaon/rx-js-light';

export function share$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
  createSource?: IShareSubscribePipeGetMultiCastSource<GValue>
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    shareSubscribePipe<GValue>(createSource),
  ]);
}

/*---*/

export function shareR$$$<GValue>(): ISubscribePipeFunction<GValue, GValue> {
  return shareSubscribePipe<GValue>(createMulticastReplayLastSource);
}

export function shareR$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    shareSubscribePipe<GValue>(createMulticastReplayLastSource),
  ]);
}
