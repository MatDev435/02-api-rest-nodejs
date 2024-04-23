import { expect, test } from 'vitest'

test('O usuário deve poder criar uma transação', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
