import {
  filterSubscribePipe, IFilterFunctionBasic, IFilterFunctionStrict, ISubscribeFunction, pipeSubscribeFunction
} from '@lifaon/rx-js-light';

export {
  filterSubscribePipe as filter$$$,
} from '@lifaon/rx-js-light';

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
