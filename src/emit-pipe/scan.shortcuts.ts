import { composeEmitFunction, IEmitFunction, IScanFunction, scanEmitPipe } from '@lifaon/rx-js-light';

export {
  scanEmitPipe as $$$scan,
} from '@lifaon/rx-js-light';

export function $$scan<GIn, GOut>(
  emit: IEmitFunction<GOut>,
  scanFunction: IScanFunction<GIn, GOut>,
  initialValue: GOut,
): IEmitFunction<GIn> {
  return composeEmitFunction([
    scanEmitPipe<GIn, GOut>(scanFunction, initialValue),
  ], emit);
}
