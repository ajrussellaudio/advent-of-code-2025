import { parseRange } from "../parse-range";

type Range = { lower: number; upper: number };

class RangeSet {
  constructor(private set: Range[] = []) {}

  add(range: string) {
    this.set.push(parseRange(range));
    this._mergeIntersecting();
  }

  total() {
    return this.set.reduce((total, range) => {
      return total + range.upper - range.lower + 1;
    }, 0);
  }

  private _mergeIntersecting() {
    let didChange = false;
    this.set.forEach((range, i, self) => {
      self.forEach((rangeInSet) => {
        if (this._isIntersecting(range, rangeInSet)) {
          this.set[i] = {
            lower: Math.min(range.lower, rangeInSet.lower),
            upper: Math.max(range.upper, rangeInSet.upper),
          };
          didChange = true;
        }
      });
    });
    if (didChange) {
      this._mergeIntersecting();
    }
    this._removeDuplicates();
  }

  private _removeDuplicates() {
    this.set = [...new Set(this.set.map((r) => JSON.stringify(r)))].map((r) =>
      JSON.parse(r),
    );
  }

  private _isDuplicate(a: Range, b: Range) {
    return a.lower === b.lower && a.upper === b.upper;
  }

  private _isIntersecting(a: Range, b: Range) {
    if (this._isDuplicate(a, b)) {
      return false;
    }
    return (
      (a.lower >= b.lower && a.lower <= b.upper) ||
      (a.upper >= b.lower && a.upper <= b.upper)
    );
  }
}

export function countAllFreshIds(ranges: string[]) {
  const rangeSet = new RangeSet();
  ranges.forEach((range) => rangeSet.add(range));
  return rangeSet.total();
}
