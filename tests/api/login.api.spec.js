import { test, expect } from '@playwright/test';

test('get user', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

  console.log('STATUS:', response.status());
  console.log('BODY:', await response.text());

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.id).toBe(1);
});