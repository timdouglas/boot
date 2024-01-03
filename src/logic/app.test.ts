import { hello } from './app';
import { describe, test, expect } from '@jest/globals';

describe('app', () => {
  test('verify jest', () => {
    expect(hello()).toBe('hello, world');
  });
});
