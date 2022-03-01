const bookData = require('../data.js');

const showBookInfo = (req, res) => {
    let data;
    for(let i=0;i<bookData.length;i++)
    {
        if(bookData[i].id == req.params.id)
        {
            data = bookData[i];
            break;
        }
    }
    console.log('Found!');
    res.json(data);
}

module.exports = {showBookInfo};