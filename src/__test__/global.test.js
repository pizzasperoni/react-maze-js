const text = 'hola mundo'

test('debe contener un text', () => {
  expect(text).toMatch(/hola mundo/) 
})