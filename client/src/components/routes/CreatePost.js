import React from 'react';
const CreatePost = () =>{
    return (
        <div className = "card input-field"
        style = {{
            margin : "30px auto",
            maxWidth : "700px",
            padding : "20px",
            textAlign : "center"
        }}
        >
            <input type = "text" placeholder = "Title"/>
            <input type = "text" placeholder = "Body"/>
            <div className = "file-field input-field">
            <div className = "btn waves-effect waves-light #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input type = "file"/>
            </div>
            <div className = "file-path-wrapper">
                <input className = "file-path validate" type = "text"/>
            </div>
            </div>
                <button type="submit" className = "btn waves-effect waves-light #64b5f6 blue darken-2">Submit Post</button>
        </div>
    )
}
export default CreatePost