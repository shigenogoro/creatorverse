/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import MyButton from "../../components/MyButton/MyButton";
import './EditCreator.css'
import { supabase } from "../../client";

const EditCreator = () => {
    // get user
    const creatorId = useParams();

    // State Management
    const [values, setValues] = useState([{}]);
    const [redirect, setRedirect] = useState(false);

    // Mounting as Page Loaded
    useEffect(() => {
        getCreator();
    }, [])

    // Functions
    const getCreator = async () => {
        const { data } = await supabase.from("creators").select().eq('id', creatorId.id);
        setValues(data);
    }

    const onValuesChange = (field) => (event) => {
        setValues(prevValues => {
            const updatedValues = [...prevValues]; // Copy the previous array
            updatedValues[0] = { ...updatedValues[0], [field]: event.target.value }; // Update the first element
            return updatedValues;
        });
    }

    const onButtonSubmit = async () => {
        const { error } = await supabase.from('creators').update(values[0]).eq('id', creatorId.id)
        if(error) {
            console.log(error)
        }
        setRedirect(true)
    }

    const onButtonDelete = async () => {
        const res = await supabase.from('creators').delete().eq('id', creatorId.id)
        console.log(res);
        setRedirect(true);
    }

    if(redirect) {
        return (
            <Navigate to={'/'} />
        )
    }

    return (
        <div className="edit-container">
            <h2 className="title">Personal Info</h2>
            <div className="info-container">
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input 
                            onChange={onValuesChange('name')}
                            type="text" 
                            name="name"  
                            id="name" 
                            value={values[0].name ? values[0].name : ''}
                        />
                    </div>

                    <div>
                        <label htmlFor="imgURL">Image</label>
                        <br />
                        <input 
                            onChange={onValuesChange('imgURL')}
                            type="text" 
                            name="imgURL"  
                            id="imgURL" 
                            value={values[0].imgURL ? values[0].imgURL : ''}
                        />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <br />
                        <input 
                            onChange={onValuesChange('description')}
                            type="textarea" 
                            name="description"  
                            id="description" 
                            value={values[0].description ? values[0].description : ''}
                        />
                    </div>
                </form>
            </div>

            <h2 className="title">Social Media Link</h2>
            <div className="social-container">
                <form>
                    <div>
                        <label htmlFor="ytURL">
                            <span><i className="fa fa-youtube-play"></i> YouTube</span>
                        </label>
                        <br />
                        <input 
                            onChange={onValuesChange('ytURL')}
                            type="text" 
                            name="ytURL"  
                            id="ytURL" 
                            value={values[0].ytURL ? values[0].ytURL : ''}
                        />
                    </div>

                    <div>
                        <label htmlFor="twitterURL">
                            <span><i className="fa fa-twitter"></i>Twitter</span>
                        </label>
                        <br />
                        <input 
                            onChange={onValuesChange('twitterURL')}
                            type="text" 
                            name="twitterURL"  
                            id="twitterURL" 
                            value={values[0].twitterURL ? values[0].twitterURL : ''}
                        />
                    </div>

                    <div>
                        <label htmlFor="igURL">
                            <span><i className="fa fa-instagram"></i>Instagram</span>
                        </label>
                        <br />
                        <input 
                            onChange={onValuesChange('igURL')}
                            type="text" 
                            name="igURL"  
                            id="igURL" 
                            value={values[0].igURL ? values[0].igURL : ''}
                        />
                    </div>
                </form>
            </div>

            <div className="btn-group">
                <MyButton title="Submit" type="normal" onClick={onButtonSubmit} />
                <MyButton title="Delete" type="danger" onClick={onButtonDelete} />
            </div>
        </div>
    )
}

export default EditCreator;