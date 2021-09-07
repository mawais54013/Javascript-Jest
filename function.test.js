test.each([[1,2,3], [3,4,7]])('sums correctly %i and %i', (a,b,expected) => {
    expect(a+b).toEqual(expected)
  })