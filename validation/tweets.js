const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTweetInput(data) {
    let errors = {};
    data.text = validText(data.text) ? data.text : '';

    if(!Validator.isLength(data.text, { min: 5, max: 280 })) {
        errors.text = 'Tweet must be at least 5 characters and less than 280';
    }

    if(Validator.isEmpty(data.text)) {
        errors.text = 'Tweet cannot be empty'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}