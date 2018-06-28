var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var locationMessage = generateLocationMessage('Cristian', 1, 2);
        expect(locationMessage).toInclude({
            from: 'Cristian',
            url: 'https://google.com/maps?q=1,2'
        });
        expect(locationMessage.createdAt).toBeA('number');
    });
})