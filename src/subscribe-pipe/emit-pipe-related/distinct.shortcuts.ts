import {
  createMulticastReplayLastSource,
  distinctSubscribePipe, IShareSubscribePipeGetMultiCastSource, ISubscribeFunction, ISubscribePipeFunction,
  pipeSubscribeFunction, pipeSubscribePipeFunctions, shareSubscribePipe
} from '@lifaon/rx-js-light';

export {
  distinctSubscribePipe as distinct$$$,
} from '@lifaon/rx-js-light';

export function distinct$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    distinctSubscribePipe<GValue>(),
  ]);
}


/*--*/

export function distinctShared$$$<GValue>(
  createSource?: IShareSubscribePipeGetMultiCastSource<GValue>,
): ISubscribePipeFunction<GValue, GValue> {
  return pipeSubscribePipeFunctions([
    distinctSubscribePipe<GValue>(),
    shareSubscribePipe<GValue>(createSource),
  ]);
}

export function distinctShared$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
  createSource?: IShareSubscribePipeGetMultiCastSource<GValue>,
): ISubscribeFunction<GValue> {
  return distinctShared$$$<GValue>(createSource)(subscribe);
}

/*--*/

export function distinctSharedR$$$<GValue>(
): ISubscribePipeFunction<GValue, GValue> {
  return pipeSubscribePipeFunctions([
    distinctSubscribePipe<GValue>(),
    shareSubscribePipe<GValue>(createMulticastReplayLastSource),
  ]);
}

export function distinctSharedR$$<GValue>(
  subscribe: ISubscribeFunction<GValue>
): ISubscribeFunction<GValue> {
  return distinctSharedR$$$<GValue>()(subscribe);
}
