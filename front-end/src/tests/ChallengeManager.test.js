const chai = require('chai');
const expect = chai.expect; 
const path = require('path');
const os = require('os');

require('mocha-sinon');
Object.assign(global, require(path.join(__dirname, '../src/hoffy.js')));

// use to test console output while still allowing console.log
// to _actually_ output to screen
// source: http://stackoverflow.com/a/30626035
function mockConsoleOutput() {
    const log = console.log;
    this.sinon.stub(console, 'log').callsFake(function(...args) {
        return log(...args);
    });
}
describe('hoffy', function() {

    describe('sum', function() {
        it('returns the sum of all arguments passed in', function() {
            expect(sum(1, 2, 3)).to.equal(6);
            expect(sum(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).to.equal(10);
            expect(sum(1)).to.equal(1);
        });
        it('returns 0 if there are no arguments passed in', function() {
            expect(sum()).to.equal(0);
        });
    });
});