const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44);
  // if (res !== 44) {
  //   throw new Error(`Expected 44, but got ${res}.`)
  // }
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  })
})

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9);
  // if (res !== 9) {
  //   throw new Error(`Expected 9, but got ${res}.`);
  // }
});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (sq) => {
    expect(sq).toBe(25);
    done();
  })
})

it('should verify first and last names are set', () => {
  var res = utils.setName({}, 'Evan Jason');

  expect(res).toInclude({firstName: 'Evan', lastName: 'Jason'})
})
