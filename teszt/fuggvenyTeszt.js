QUnit.module('fizzBuzz', function() {
    QUnit.test('Létezik-E?', assert => {
      assert.ok('fizzBuzz' === true);
    });

    QUnit.test('Függvény-e?', assert => {
        assert.ok(typeof(("fizzBuzz") === "function"));
    });

    QUnit.test('Szám: 15', assert => {
        assert.equal(fizzBuzz(15), "fizzBuzz");
    });
});