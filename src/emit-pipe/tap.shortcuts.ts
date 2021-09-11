import { composeEmitFunction, tapEmitPipe, IEmitFunction, ITabCallback } from '@lifaon/rx-js-light';

export {
  tapEmitPipe as $$$tap,
} from '@lifaon/rx-js-light';

export function $$tap<GValue>(
  emit: IEmitFunction<GValue>,
  callback: ITabCallback<GValue>
): IEmitFunction<GValue> {
  return composeEmitFunction([
    tapEmitPipe<GValue>(callback),
  ], emit);
}
