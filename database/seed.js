require('./db/connect');
var mongoose = require('mongoose');
var Question = require('./models/Question');

var seedTerms = [
    {
        question_pos: 1,
        german: "Apfel",
        english: "Apple",
        definition: "A  round fruit; probably Snow White's least favorite food.",
        image: "https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg"
    },
    {
        question_pos: 2,
        german: "Pferd",
        english: "Horse",
        definition: "A quadripedal animal which may or may not kick you to death.",
        image: "http://buzzsharer.com/wp-content/uploads/2015/06/beautiful-running-horse.jpg"
    },
    {
        question_pos: 3,
        german: "Geld",
        english: "Gold",
        definition: "A precious mineral. Also a slang term for money.",
        image: "http://gold4power.com/wp-content/uploads/2016/02/gold.jpg"
    },
    {
        question_pos: 4,
        german: "Banane",
        english: "Banana",
        definition: "A curved yellow fruit favored by apes, monkeys and sometimes people.",
        image: "http://www.theartofdoingstuff.com/wp-content/uploads/2013/03/Banana.jpg"
    },
    {
        question_pos: 5,
        german: "Essen",
        english: "To eat",
        definition: "To deliver essential nutrients into one's body.",
        image: "http://www.healthline.com/hlcmsresource/images/News/childrens-health/022315_peanut_BODY.jpg"
    },
    {
        question_pos: 6,
        german: "Schlafen",
        english: "To sleep",
        definition: "To konk out, if you will.",
        image: "http://healthexpedia.com/wp-content/uploads/2016/03/bbbdb_5-Ways-to-Sleep-Better-Every-Night-700x600.jpg"
    }
]

Question.collection.drop(); // Resets database for seeding.

Question.insertMany(seedTerms, function() {
  mongoose.disconnect();
}); // seeds each term in the array.
