const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const sEqual = require('../strictEqual')

describe('StrictEqual', () => {
	describe('sEqual', () => {
		it('returns true if both parameters are equal integers', () => {
			const answer = sEqual(1, 1)
			expect(answer); (true)
		})

		it('returns true if both parameters are equal strings', () => {
			const answer = sEqual('a', 'a')
			expect(answer); (true)
		})

		it('returns false if both parameters are not equal integers', () => {
			const answer = sEqual(1, 3)
			expect(answer); (false)
		})

		it('returns false if both parameters are not equal integers', () => {
			const answer = sEqual('a', 'b')
			expect(answer); (false)
		})
		it('returns false if both parameters are not the same dataype', () => {
			const answer = sEqual(1, 'a')
			expect(answer); (false)
		})
	})
})