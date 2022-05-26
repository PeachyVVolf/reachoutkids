import axios from 'axios';
import React, { Fragment, useState } from 'react';
import './Admin.css';

const AddPost = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const addPostFunc = async () => {
        const newPost = {
            title,
            desc
        }
        if(file) {
            const data = await new FormData();
            const filename = await Date.now()+file.name;
            await data.append("name",filename);
            await data.append("file",file);
            newPost.photo = filename; 
            try {
                const ret = await axios.post('https://reachoutkids.herokuapp.com/upload', data);
                console.log(ret);
            } catch (err) {
                console.log(err)
            }
        }
        try {
            const ret1 = await axios.post('https://reachoutkids.herokuapp.com/post', newPost);
            console.log(ret1);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Fragment>
            {localStorage.getItem('admin') ? (
                <Fragment>
                    <div className='addPostImg'>
                        {file && (
                            <img src={URL.createObjectURL(file)} />
                        )}
                    </div>
                    <form className='writeForm' onSubmit={addPostFunc}>
                        <div className='writeFormGroup'>
                            <label htmlFor='fileInput'>
                                <i className="writeIcon fa-solid fa-plus"></i>
                            </label>
                            <input type='file' id='fileInput' style={{display: 'none'}} onChange={e=>setFile(e.target.files[0])} />
                            <input type='text' placeholder='Title' className='writeInput' autoFocus={true} onChange={e => setTitle(e.target.value)}></input>
                        </div>
                        <div className='writeFormGroup'>
                            <textarea placeholder='Tell your story...' type='text' className='writeInput writeText' onChange={e => setDesc(e.target.value)}></textarea>
                        </div>
                        <button className='writeSubmit' type='submit'>Publish</button>
                    </form>
                </Fragment>
            ) : (
                <Fragment>
                    {window.location.replace("/")}
                </Fragment>
            )}
        </Fragment>
    )
}

export default AddPost;