import configurePseudoloc from 'dummy/utils/configure-pseudoloc';
import { module, test } from 'qunit';

module('Unit | Utility | configure pseudoloc');

test('it works', (assert) => {
  const pseudoloc = configurePseudoloc({
    prepend: '**~~',
    append: '~~**',
  });
  assert.equal(
    pseudoloc.str('a {{ token }} string'),
    '**~~ą {{ token }} śŧřĩňĝ~~**',
  );
});
