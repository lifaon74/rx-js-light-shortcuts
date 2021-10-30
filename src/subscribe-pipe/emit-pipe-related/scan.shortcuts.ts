import { IScanFunction, ISubscribeFunction, scanSubscribePipe, pipeSubscribeFunction } from '@lifaon/rx-js-light';

export {
  scanSubscribePipe as scan$$$,
} from '@lifaon/rx-js-light';

export function scan$$<GIn, GOut>(
  subscribe: ISubscribeFunction<GIn>,
  scanFunction: IScanFunction<GIn, GOut>,
  initialValue: GOut,
): ISubscribeFunction<GOut> {
  return pipeSubscribeFunction(subscribe, [
    scanSubscribePipe<GIn, GOut>(scanFunction, initialValue),
  ]);
}
