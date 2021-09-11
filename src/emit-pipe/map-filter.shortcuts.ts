import { composeEmitFunction, IEmitFunction, IMapFilterMapFunction, mapFilterEmitPipe } from '@lifaon/rx-js-light';

export {
  mapFilterEmitPipe as $$$mapFilter,
} from '@lifaon/rx-js-light';

export function $$mapFilter<GIn, GOut>(
  emit: IEmitFunction<GOut>,
  mapFunction: IMapFilterMapFunction<GIn, GOut>,
): IEmitFunction<GIn> {
  return composeEmitFunction([
    mapFilterEmitPipe<GIn, GOut>(mapFunction),
  ], emit);
}
