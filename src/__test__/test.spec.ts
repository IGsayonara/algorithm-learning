import file from '../file';

test('My test', () => {
  expect(file.testFunction('kek')).toBe('Your input: kek');
});
