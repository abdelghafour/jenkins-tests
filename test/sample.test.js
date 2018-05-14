const request = require('request');
const { expect } = require('chai');


describe('API dropDown', () => {
	it('should create DropDown', async () => {
		const response = await request('127.0.0.1:3000')
			.get('/api/users')
			.expect(httpStatus.OK);
			
			expect(res.body.users).to.be.an.instanceof(Array);
	});
});
