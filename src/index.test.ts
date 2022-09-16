import segmentSorter, {
  Comparator,
  SegSymbol,
} from './';

const ORIGIN = [
  'D',
  'A',
  '..',
  'BB',
  'c',
  'aA',
  'aa',
  '.',
  'Aa',
  'a',
  'AA',
  'B',
  '~',
  'BBB',
  'Ab',
  '_',
  'd',
  'ab',
  '中',
  'AB',
  'b',
  'aB',
  'C',
  'dd',
];

function sort(s: string[], comp: Comparator | undefined) {
  return [...s].sort(comp);
}

describe('segmentSorter', () => {
  describe('0', () => {
    const comp = segmentSorter(['_']);
    it('should be undefined', () => {
      expect(comp).toBeUndefined();
    });
    describe('0-1', () => {
      const comp = segmentSorter(['_', 'az']);
      it('should sort strings', () => {
        expect(comp).toBeDefined();
        expect(sort(ORIGIN, comp)).toMatchSnapshot();
      });
      describe('0-1-2', () => {
        const comp = segmentSorter(['_', 'az', 'AZ']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
    });
    describe('0-2', () => {
      const comp = segmentSorter(['_', 'AZ']);
      it('should sort strings', () => {
        expect(comp).toBeDefined();
        expect(sort(ORIGIN, comp)).toMatchSnapshot();
      });
      describe('0-2-1', () => {
        const comp = segmentSorter(['_', 'AZ', 'az']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
    });
    describe('0-12', () => {
      describe('aA', () => {
        const S: SegSymbol = 'aA';
        const comp = segmentSorter(['_', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
      describe('aZ', () => {
        const S: SegSymbol = 'aZ';
        const comp = segmentSorter(['_', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
    });
    describe('0-21', () => {
      describe('Aa', () => {
        const S: SegSymbol = 'Aa';
        const comp = segmentSorter(['_', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
      describe('Az', () => {
        const S: SegSymbol = 'Az';
        const comp = segmentSorter(['_', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
    });
  });
  describe('1', () => {
    const comp = segmentSorter(['az']);
    it('should be undefined', () => {
      expect(comp).toBeUndefined();
    });
    describe('1-0', () => {
      const comp = segmentSorter(['az', '_']);
      it('should sort strings', () => {
        expect(comp).toBeDefined();
        expect(sort(ORIGIN, comp)).toMatchSnapshot();
      });
      describe('1-0-2', () => {
        const comp = segmentSorter(['az', '_', 'AZ']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
    });
    describe('1-2', () => {
      const comp = segmentSorter(['az', 'AZ']);
      it('should sort strings', () => {
        expect(comp).toBeDefined();
        expect(sort(ORIGIN, comp)).toMatchSnapshot();
      });
      describe('1-2-0', () => {
        const comp = segmentSorter(['az', 'AZ', '_']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
    });
    describe('1-12', () => {
      describe('aA', () => {
        const S: SegSymbol = 'aA';
        const comp = segmentSorter(['az', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('1-12-0', () => {
          const comp = segmentSorter(['az', S, '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
      describe('aZ', () => {
        const S: SegSymbol = 'aZ';
        const comp = segmentSorter(['az', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('1-12-0', () => {
          const comp = segmentSorter(['az', S, '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
    });
    describe('1-21', () => {
      describe('Aa', () => {
        const S: SegSymbol = 'Aa';
        const comp = segmentSorter(['az', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('1-21-0', () => {
          const comp = segmentSorter(['az', S, '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
      describe('Az', () => {
        const S: SegSymbol = 'Az';
        const comp = segmentSorter(['az', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('1-21-0', () => {
          const comp = segmentSorter(['az', S, '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
    });
  });
  describe('2', () => {
    const comp = segmentSorter(['AZ']);
    it('should be undefined', () => {
      expect(comp).toBeUndefined();
    });
    describe('2-0', () => {
      const comp = segmentSorter(['AZ', '_']);
      it('should sort strings', () => {
        expect(comp).toBeDefined();
        expect(sort(ORIGIN, comp)).toMatchSnapshot();
      });
      describe('2-0-1', () => {
        const comp = segmentSorter(['AZ', '_', 'az']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
    });
    describe('2-1', () => {
      const comp = segmentSorter(['AZ', 'az']);
      it('should sort strings', () => {
        expect(comp).toBeDefined();
        expect(sort(ORIGIN, comp)).toMatchSnapshot();
      });
      describe('2-1-0', () => {
        const comp = segmentSorter(['AZ', 'az', '_']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
    });
    describe('2-12', () => {
      describe('aA', () => {
        const S: SegSymbol = 'aA';
        const comp = segmentSorter(['AZ', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('2-12-0', () => {
          const comp = segmentSorter(['AZ', S, '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
      describe('aZ', () => {
        const S: SegSymbol = 'aZ';
        const comp = segmentSorter(['AZ', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('2-12-0', () => {
          const comp = segmentSorter(['AZ', S, '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
    });
    describe('2-21', () => {
      describe('Aa', () => {
        const S: SegSymbol = 'Aa';
        const comp = segmentSorter(['AZ', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('2-21-0', () => {
          const comp = segmentSorter(['AZ', S, '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
      describe('Az', () => {
        const S: SegSymbol = 'Az';
        const comp = segmentSorter(['AZ', S]);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('2-21-0', () => {
          const comp = segmentSorter(['AZ', S, '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
    });
  });
  describe('12', () => {
    describe('aA', () => {
      const S: SegSymbol = 'aA';
      const comp = segmentSorter([S]);
      it('should sort strings', () => {
        expect(comp).toBeDefined();
        expect(sort(ORIGIN, comp)).toMatchSnapshot();
      });
      describe('12-0', () => {
        const comp = segmentSorter([S, '_']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
      describe('12-1', () => {
        const comp = segmentSorter([S, 'az']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('12-1-0', () => {
          const comp = segmentSorter([S, 'az', '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
      describe('12-2', () => {
        const comp = segmentSorter([S, 'AZ']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('12-2-0', () => {
          const comp = segmentSorter([S, 'AZ', '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
    });
    describe('aZ', () => {
      const S: SegSymbol = 'aZ';
      const comp = segmentSorter([S]);
      it('should sort strings', () => {
        expect(comp).toBeDefined();
        expect(sort(ORIGIN, comp)).toMatchSnapshot();
      });
      describe('12-0', () => {
        const comp = segmentSorter([S, '_']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
      describe('12-1', () => {
        const comp = segmentSorter([S, 'az']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('12-1-0', () => {
          const comp = segmentSorter([S, 'az', '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
      describe('12-2', () => {
        const comp = segmentSorter([S, 'AZ']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('12-2-0', () => {
          const comp = segmentSorter([S, 'AZ', '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
    });
  });
  describe('21', () => {
    describe('Aa', () => {
      const S: SegSymbol = 'Aa';
      const comp = segmentSorter([S]);
      it('should sort strings', () => {
        expect(comp).toBeDefined();
        expect(sort(ORIGIN, comp)).toMatchSnapshot();
      });
      describe('21-0', () => {
        const comp = segmentSorter([S, '_']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
      describe('21-1', () => {
        const comp = segmentSorter([S, 'az']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('21-1-0', () => {
          const comp = segmentSorter([S, 'az', '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
      describe('21-2', () => {
        const comp = segmentSorter([S, 'AZ']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('21-2-0', () => {
          const comp = segmentSorter([S, 'AZ', '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
    });
    describe('Az', () => {
      const S: SegSymbol = 'Az';
      const comp = segmentSorter([S]);
      it('should sort strings', () => {
        expect(comp).toBeDefined();
        expect(sort(ORIGIN, comp)).toMatchSnapshot();
      });
      describe('21-0', () => {
        const comp = segmentSorter([S, '_']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
      });
      describe('21-1', () => {
        const comp = segmentSorter([S, 'az']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('21-1-0', () => {
          const comp = segmentSorter([S, 'az', '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
      describe('21-2', () => {
        const comp = segmentSorter([S, 'AZ']);
        it('should sort strings', () => {
          expect(comp).toBeDefined();
          expect(sort(ORIGIN, comp)).toMatchSnapshot();
        });
        describe('21-2-0', () => {
          const comp = segmentSorter([S, 'AZ', '_']);
          it('should sort strings', () => {
            expect(comp).toBeDefined();
            expect(sort(ORIGIN, comp)).toMatchSnapshot();
          });
        });
      });
    });
  });
});
