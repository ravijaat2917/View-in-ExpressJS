import path from 'path';
import { cwd } from 'process';
const aboutController = (req , res) =>{
    // res.send("About Page");
    // res.sendFile("C:/Users/ravij/OneDrive/Desktop/Express/View in ExpressJS/views/about.html");
    res.sendFile(path.join(process.cwd(),'views','about.html'));
}

export  {aboutController} ;