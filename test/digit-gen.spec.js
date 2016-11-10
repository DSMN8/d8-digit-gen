'use strict';
const DigitGen = require('../index');
const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

lab.experiment('Generate digit code', () => {
    lab.test('can create a 6 digit code', (done) => {
        const code = DigitGen.generate(6);
        Code.expect(code).to.not.be.undefined();
        Code.expect(code.length).to.equal(6);

        let num = parseInt(code);
        Code.expect(typeof num).to.be.equal('number');
        Code.expect(num).to.not.equal(0);
        done();
    });

    lab.test('can create a 8 digit code by default', (done) => {
        const code = DigitGen.generate();

        Code.expect(code).to.not.be.undefined();
        Code.expect(code.length).to.equal(8);
        done();
    });

    lab.test('can create 2 different numbers', (done) => {
        const code1 = DigitGen.generate(8);
        const code2 = DigitGen.generate(8);

        Code.expect(code1).to.not.equal(code2);
        done();
    });

    lab.test('let 34567891 equals 3456 7891', (done)=>{
        const code = '34567891';
        const result = DigitGen.format('#### ####', code);
        Code.expect(result).to.equal('3456 7891');
        done();
    });
});

lab.experiment('Generate alpha digit code', () => {
    lab.test('can create an alpha digit code', (done) => {
        const code = DigitGen.generateCode();
        Code.expect(code).to.not.be.undefined();
        Code.expect(code.length).to.equal(8);

        let num = parseInt(code);
        Code.expect(typeof num).to.be.equal('number');
        Code.expect(num).to.not.equal(0);
        done();
    });

    lab.test('can create a 8 digit code by default', (done) => {
        const code = DigitGen.generateCode();

        Code.expect(code).to.not.be.undefined();
        Code.expect(code.length).to.equal(8);
        done();
    });

    lab.test('can create 2 different numbers', (done) => {
        const code1 = DigitGen.generateCode(8);
        const code2 = DigitGen.generateCode(8);

        Code.expect(code1).to.not.equal(code2);
        done();
    });

    lab.test('let 34567891 equals 3456 7891', (done)=>{
        const code = '34567891A9';
        const result = DigitGen.format('##### #####', code);
        Code.expect(result).to.equal('34567 891A9');
        done();
    });
});