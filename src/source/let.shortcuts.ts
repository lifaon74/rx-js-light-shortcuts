import { createMulticastReplayLastSource, IMulticastReplayLastSource } from '@lifaon/rx-js-light';

export function let$$(): IMulticastReplayLastSource<undefined>;
export function let$$<GValue>(
  initialValue: GValue,
): IMulticastReplayLastSource<GValue>;
export function let$$<GValue>(
  initialValue?: GValue,
): IMulticastReplayLastSource<GValue> {
  return createMulticastReplayLastSource<GValue>({ initialValue });
}

// export function let$$<GValue>(
//   initialValue?: GValue
// ): IMulticastReplayLastSource<GValue> {
//   return createMulticastReplayLastSource<GValue>((arguments.length === 0) ? {} : { initialValue });
// }
