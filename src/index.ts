import Segment, { Params } from './Segment';
import { CompareRule } from './types';

type Comparator = (a: string | undefined, b: string | undefined) => number;
type InnerComparator = (a: string | undefined, b: string | undefined, c: boolean) => number;

export default function segmentSorter(rule: CompareRule) {
  const p = { map: new Map<number, Segment>() };
  rule.forEach((s, i) => new Segment(s, i, p));
  return !checkAndComplete(p, rule?.length ?? 0) ? undefined : comparatorFromP(p);
}

/**
 * Check and complete the rule if needed.
 *
 * @returns false - The rule is a no-op; true - The rule is completed.
 */
function checkAndComplete(p: Params, nextIndex: number) {
  const m = (p.mask ?? 0) & 0b111;
  // The rule is a no-op, e.g. [], ['az'].
  if (!m || !(m & (m - 1))) return false;
  // If the rule is incomplete, append the missing segment.
  switch (0b111 - m) {
    case 0b1:
      new Segment('az', nextIndex, p);
      break;
    case 0b10:
      new Segment('AZ', nextIndex, p);
      break;
    case 0b100:
      new Segment('_', nextIndex, p);
      break;
  }
  return true;
}

// Default comparator
const COMPARE_DEF: Comparator = (a, b) => {
  if (!a) return !b ? 0 : -1;
  if (!b) return 1;
  return a < b ? -1 : a > b ? 1 : 0;
};

function comparatorFromP(p: Params): Comparator {
  const { map, sensitive } = p;
  const c = comparatorFromMap(map);
  if (sensitive) return (a, b) => c(a, b, true);
  return (a, b) => c(a, b, false) || c(a, b, true);
}

function comparatorFromMap(map: Map<number, Segment>): InnerComparator {
  return (a, b, c) => {
    if (!a) return !b ? 0 : -1;
    if (!b) return 1;
    let i = 0;
    for (; i < a.length && i < b.length; ++i) {
      const n1 = a.charCodeAt(i);
      const n2 = b.charCodeAt(i);
      if (n1 === n2) continue;
      const s1 = map.get(n1);
      const s2 = map.get(n2);
      if (!s1 || !s2) return COMPARE_DEF(a.charAt(i), b.charAt(i));
      if (s1 !== s2) return s1.rank - s2.rank;
      const r = s1.compare(n1, n2, c);
      if (r) return r;
    }
    return i < a.length ? 1 : i < b.length ? -1 : 0;
  };
}
