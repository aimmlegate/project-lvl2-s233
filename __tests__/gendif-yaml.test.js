import fs from 'fs';
import gendif from '../src';

test('plain-yaml', () => {
  const expected = '__tests__/__fixtures__/result-plain.txt';
  const received = gendif('__tests__/__fixtures__/before-plain.yaml', '__tests__/__fixtures__/after-plain.yaml');
  expect(received).toBe(fs.readFileSync(expected, 'utf-8'));
});

test('yaml', () => {
  const expected = '__tests__/__fixtures__/result.txt';
  const received = gendif('__tests__/__fixtures__/before.yaml', '__tests__/__fixtures__/after.yaml');
  expect(received).toEqual(fs.readFileSync(expected, 'utf-8'));
});
