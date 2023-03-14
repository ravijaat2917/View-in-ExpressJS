import {join} from 'path';
const homeController = (req,res) =>{
    // res.send("Home Page");
    // res.sendFile("C:/Users/ravij/OneDrive/Desktop/Express/View in ExpressJS/views/index.html");
    res.sendFile(join(process.cwd(),'views','index.html'));

}

export {homeController};