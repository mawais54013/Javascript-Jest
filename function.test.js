test.each([[1,2,3], [3,4,7]])('sums correctly %i and %i', (a,b,expected) => {
    expect(a+b).toEqual(expected)
  })

// The test above makes sure that 1 + 2 = 3 
// and 3 + 4 = 7. Change values to make it fail
