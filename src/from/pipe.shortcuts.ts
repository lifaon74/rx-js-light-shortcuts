import {
  debounceTimeSubscribePipe,
  distinctSubscribePipe, filterSubscribePipe, IFilterFunctionBasic, IFilterFunctionStrict, IMapFunction,
  IShareSubscribePipeGetMultiCastSource, ISubscribeFunction, mapSubscribePipe, mergeAllSubscribePipe,
  mergeMapSubscribePipe, pipeSubscribeFunction, shareSubscribePipe
} from '@lifaon/rx-js-light';

export {
  pipeSubscribeFunction as pipe$$,
} from '@lifaon/rx-js-light';

export function map$$<GIn, GOut>(
  subscribe: ISubscribeFunction<GIn>,
  mapFunction: IMapFunction<GIn, GOut>,
): ISubscribeFunction<GOut> {
  return pipeSubscribeFunction(subscribe, [
    mapSubscribePipe<GIn, GOut>(mapFunction),
  ]);
}

export function filter$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
  filterFunction: IFilterFunctionBasic<GValue>,
): ISubscribeFunction<GValue>;
export function filter$$<GIn, GOut extends GIn>(
  subscribe: ISubscribeFunction<GIn>,
  filterFunction: IFilterFunctionStrict<GIn, GOut>
): ISubscribeFunction<GOut>;
export function filter$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
  filterFunction: IFilterFunctionBasic<GValue>,
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    filterSubscribePipe<GValue>(filterFunction),
  ]);
}

export function distinct$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    distinctSubscribePipe<GValue>(),
  ]);
}


export function mergeAll$$<GValue>(
  subscribe: ISubscribeFunction<ISubscribeFunction<GValue>>,
  maxNumberOfSubscriptions?: number
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    mergeAllSubscribePipe<GValue>(maxNumberOfSubscriptions),
  ]);
}

export function mergeMap$$<GIn, GOut>(
  subscribe: ISubscribeFunction<GIn>,
  mapFunction: IMapFunction<GIn, ISubscribeFunction<GOut>>,
  maxNumberOfSubscriptions?: number,
): ISubscribeFunction<GOut> {
  return pipeSubscribeFunction(subscribe, [
    mergeMapSubscribePipe<GIn, GOut>(mapFunction, maxNumberOfSubscriptions),
  ]);
}

export function share$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
  createSource?: IShareSubscribePipeGetMultiCastSource<GValue>
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    shareSubscribePipe<GValue>(createSource),
  ]);
}


export function debounce$$<GValue>(
  subscribe: ISubscribeFunction<GValue>,
  duration: number,
): ISubscribeFunction<GValue> {
  return pipeSubscribeFunction(subscribe, [
    debounceTimeSubscribePipe<GValue>(duration),
  ]);
}

