const bookData = require('../data.js');

const searchBook = (req, res) => {
    let data;
    for(let i=0;i<bookData.length;i++)
    {
        if(bookData[i].title == req.params.title)
        {
            data = bookData[i];
            break;
        }
    }
    console.log('Found!');
    res.json(data);
}

module.exports = {searchBook};