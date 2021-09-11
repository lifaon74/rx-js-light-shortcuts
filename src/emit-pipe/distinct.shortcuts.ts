import { composeEmitFunction, distinctEmitPipe, IEmitFunction } from '@lifaon/rx-js-light';

export {
  distinctEmitPipe as $$$distinct,
} from '@lifaon/rx-js-light';

export function $$distinct<GValue>(
  emit: IEmitFunction<GValue>,
): IEmitFunction<GValue> {
  return composeEmitFunction([
    distinctEmitPipe<GValue>(),
  ], emit);
}
