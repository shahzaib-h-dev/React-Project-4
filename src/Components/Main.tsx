import defaultMeme from "../assests/MainMeme.jpg"
import {useState} from "react";

export function Main(){
    
    const [meme, setMeme] = useState({
        
        topText:"ONE DOES NOT SIMPLY",
        bottomText:"WALK INTO MORDOR",
        imageUrl:defaultMeme
         
    })

    function handleChange(event: any){
       const {value} = event.currentTarget 
       setMeme((prevMeme: any) => ({
        ...prevMeme,
        topText: value
       }));    
      
    }

    return(
        <main className="main-container">
            <div className="form">
                
                <label className="form-label">Top Text
                    <input 
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        className="form-input"
                        onChange={handleChange}
                    />
                </label>
                
                <label className="form-label">Bottom Text
                    <input 
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        className="form-input"
                        
                    />
                </label>
                
                <button className="form-button">Get a new meme image 🖼️</button>
            </div>
            
            <div className="meme">
                <img src={meme.imageUrl} className="meme-image" alt="Meme" />
                <span className="meme-text top">{meme.topText}</span>
                <span className="meme-text bottom">{meme.bottomText}</span>
            </div>
        </main>
    );
}