const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const sEqual = require('../strictEqual')

describe('StrictEqual', () => {
	describe('sEqual', () => {
		it('returns true when given two parameters of the same type and value', () => {
			const answer = sEqual(1, 1)
			expect(answer).to.equal(true)
		})

		it('returns false when given two parameters of the different type and same value', () => {
			const answer = sEqual(1, '1')
			expect(answer).to.equal(false)
		})

		it('returns false when given two parameters of the same type and different values', () => {
			const answer = sEqual(1, 3)
			expect(answer).to.equal(false)
		})

		it('returns false when given two parameters of different types and diffeent values', () => {
			const answer = sEqual('a', 3)
			expect(answer).to.equal(false)
		})
	})
})