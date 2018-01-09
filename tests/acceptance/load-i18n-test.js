import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | load i18n');

test('visiting /load-i18n', function(assert) {
  visit('/load-i18n');

  andThen(function() {
    assert.equal(currentURL(), '/load-i18n');
  });
});
