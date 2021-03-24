import React, {useState} from 'react'

export default function VideoUploadForm() {

    const [imageFile, setImageFile] = useState("")
    const [videoFile, setVideoFile] = useState("")

    function submitHandler(e) {
        e.preventDefault()
        const data = new FormData()
        data.append("image", document.querySelector('input#image').files[0])
        data.append("video", document.querySelector('input#video').files[0])
        fetch('http://localhost:3000/videos', {
            method: "POST",
            body: data
        })
         .then(r => r.json())
         .then(info => console.log(info))
    }

    // function changeHandler(e) {
    //     e.persist()
    //     return e.target.files[0]
    // }

    return (
        <form onSubmit={submitHandler}>
            <h1>New Upload</h1>
            <label>Image Upload</label>
            <input type="file" name="image" 
                // value={imageFile} 
                // onChange={changeHandler}
                >
            </input>

            <label>Video Upload</label>
            <input type="file" name="video" 
                // value={videoFile} 
                // onChange={changeHandler}
                >
            </input>

            <input type="submit"/>

        </form>



    )
}