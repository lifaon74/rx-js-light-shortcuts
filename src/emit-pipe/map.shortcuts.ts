import { composeEmitFunction, IEmitFunction, IMapFunction, mapEmitPipe } from '@lifaon/rx-js-light';

export {
  mapEmitPipe as $$$map,
} from '@lifaon/rx-js-light';

export function $$map<GIn, GOut>(
  emit: IEmitFunction<GOut>,
  mapFunction: IMapFunction<GIn, GOut>,
): IEmitFunction<GIn> {
  return composeEmitFunction([
    mapEmitPipe<GIn, GOut>(mapFunction),
  ], emit);
}
