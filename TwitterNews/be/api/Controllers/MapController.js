const config = require('../config');
const Twitter = require('twitter');

exports.getAvailableTrends = (req,res) => {
    config.twitterClient.get('trends/available', (error, tweets, response) => {
        if (error) console.log(error);
        return res.json(tweets); 
    });
}
