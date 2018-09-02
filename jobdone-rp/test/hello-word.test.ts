import { sayHello } from './../src/hello-world';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('My jobdone-rp library', () => {

  it('should be able to says hello correctly' , () => {
    expect(sayHello()).to.equal("hi");
  });

});
