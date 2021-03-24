import React from 'react'

export default class NewVideoForm extends React.Component {

    CLOUDINARY_UPLOAD_PRESET = "ml_default/image/upload"
    CLOUDINARY_API = "https://api.cloudinary.com/v1_1/celestialheathen/image/upload"

    state = {
        image: {},
        video: {}
    }

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            return {
                [e.target.name]: e.target.files[0]
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("image", this.state.image)
        form.append("video", this.state.video)
        form.append("upload_preset", this.CLOUDINARY_UPLOAD_PRESET)
        fetch(this.CLOUDINARY_API, {
            method: "POST",
            headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin': '*',
                      'Access-Control-Allow-Headers': 'Origin',
                      'Access-Control-Allow-Credentials': true},
            body: form
        })
         .then(r => console.log(r))
    }
    render(){
        return (
            <div className="form">
                <h1>New Upload</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Image Upload</label>
                    <input type="file" name="image" onChange={this.onChange}/>
                    <br/>
                    <label>Video Upload</label>
                    <input type="file" name="video" onChange={this.onChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}