import pseudolocalizeObject from 'dummy/utils/pseudolocalize-object';
import { module, test } from 'qunit';

module('Unit | Utility | pseudolocalize object');

test('it works', (assert) => {
  const result = pseudolocalizeObject({
    aString: 'a string',
    anObject: {
      bString: 'b string',
      nestedObject: {
        cString: 'c string',
      },
    },
  });
  assert.deepEqual({
    aString: '[!!ą śŧřįňĝ!!]',
    anObject: {
      bString: '[!!ƃ śŧřįňĝ!!]',
      nestedObject: {
        cString: '[!!ć śŧřįňĝ!!]',
      },
    },
  }, result, 'Correctly pseudolocalizes an object.');
});
