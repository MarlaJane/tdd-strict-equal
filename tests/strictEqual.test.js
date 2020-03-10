const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const sEqual = require('../strictEqual')

describe('StrictEqual', () => {
    describe('sEqual', () => {
        it('returns true if both parameters are equal integers', () => {
            // create test data
            const val1 = 1
            const val2 = 1
            //call the function with the test data
            const answer = sEqual

            //make assertions about what should be true
            expect(answer); (true)
        })
        it('returns true if both parameters are equal strings', () => {
            // create test data
            const val1 = 'a'
            const val2 = 'a'
            //call the function with the test data
            const answer = sEqual

            //make assertions about what should be true
            expect(answer); (true)
        })
        it('returns false if both parameters are not equal integers', () => {
            // create test data
            const val1 = 1
            const val2 = 3
            //call the function with the test data
            const answer = sEqual

            //make assertions about what should be true
            expect(answer); (false)
        })
        it('returns false if both parameters are not equal integers', () => {
            // create test data
            const val1 = 'a'
            const val2 = 'b'
            //call the function with the test data
            const answer = sEqual

            //make assertions about what should be true
            expect(answer); (false)

        })
        it('returns false if both parameters are not the same dataype', () => {
            // create test data
            const val1 = 1
            const val2 = 'a'
            //call the function with the test data
            const answer = sEqual

            //make assertions about what should be true
            expect(answer); (false)
        })
    })
})