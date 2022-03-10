const bookData = require('../data.js');
var notFound = false;
const showBookInfo = (req, res) => {
    let data;
    //101    i=0
    //201    i=1
    //301    i=2
    for(let i=0;i<bookData.length;i++)
    {
        if(bookData[i].id == req.params.id)
        {
            data = bookData[i];
            notFound = false;
            break;
        }
        else{
            notFound = true;
        }
    }
    if(!notFound)
    {
        res.json(data);
    }
    else
    {
        throw new Error('Book not found!');
    }
    console.log('Found!');
    
}

module.exports = {showBookInfo};