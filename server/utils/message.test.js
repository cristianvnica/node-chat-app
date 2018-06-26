var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var message = generateMessage('Cristian', 'Hi, I am Cristian!');
        expect(message).toInclude({
            from: 'Cristian',
            text: 'Hi, I am Cristian!'
        });
        expect(message.createdAt).toBeA('number');
    });
});