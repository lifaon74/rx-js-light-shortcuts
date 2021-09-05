import { composeEmitFunction, filterEmitPipe, IEmitFunction, IFilterFunctionBasic, IFilterFunctionStrict } from '@lifaon/rx-js-light';

export {
  filterEmitPipe as $$$filter,
} from '@lifaon/rx-js-light';

export function $$filter<GValue>(
  emit: IEmitFunction<GValue>,
  filterFunction: IFilterFunctionBasic<GValue>,
): IEmitFunction<GValue>;
export function $$filter<GIn, GOut extends GIn>(
  emit: IEmitFunction<GOut>,
  filterFunction: IFilterFunctionStrict<GIn, GOut>,
): IEmitFunction<GIn>;
export function $$filter<GValue>(
  emit: IEmitFunction<GValue>,
  filterFunction: IFilterFunctionBasic<GValue>,
): IEmitFunction<GValue> {
  return composeEmitFunction([
    filterEmitPipe<GValue>(filterFunction),
  ], emit);
}
