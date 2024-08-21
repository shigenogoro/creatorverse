import { useState, useEffect } from "react";
import useParams from "react-router-dom";
import MyButton from "../../components/MyButton/MyButton";
import './EditCreator.css'
import { supabase } from "../../client";

const EditCreator = () => {
    // get user
    const { creatorId } = useParams();

    // State Management
    const [values, setValues] = useState([{}]);

    // Mounting as Page Loaded
    useEffect(() => {
        getCreator();
    }, [])

    // Functions
    const getCreator = async () => {
        const { data } = await supabase.from("creators").select.eq('id', creatorId);
        setValues(data);
    }

    const onValuesChange = (field) => (event) => {
        setValues({...values, [field]: event.target.value});
    }


    return (
        <div className="edit-container">
            <h2 className="title">Personal Info</h2>
            <div className="info-container">
                <form>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input 
                            onChange={onValuesChange('name')}
                            type="text" 
                            name="name"  
                            id="name" 
                            value={values.name}
                        />
                    </div>

                    <div>
                        <label htmlFor="imgURL">Image</label>
                        <input 
                            onChange={onValuesChange('imgURL')}
                            type="text" 
                            name="imgURL"  
                            id="imgURL" 
                        />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <input 
                            onChange={onValuesChange('description')}
                            type="text" 
                            name="description"  
                            id="description" 
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
                        <input 
                            onChange={onValuesChange('ytURL')}
                            type="text" 
                            name="ytURL"  
                            id="ytURL" 
                        />
                    </div>

                    <div>
                        <label htmlFor="twitterURL">
                            <span><i className="fa fa-twitter"></i>Twitter</span>
                        </label>
                        <input 
                            onChange={onValuesChange('twitterURL')}
                            type="text" 
                            name="twitterURL"  
                            id="twitterURL" 
                        />
                    </div>

                    <div>
                        <label htmlFor="igURL">
                            <span><i className="fa fa-instagram"></i>Instagram</span>
                        </label>
                        <input 
                            onChange={onValuesChange('igURL')}
                            type="text" 
                            name="igURL"  
                            id="igURL" 
                        />
                    </div>
                </form>
            </div>

            <div className="btn-group">
                <MyButton title="Submit" type="normal" />
                <MyButton title="Delete" type="danger" />
            </div>
        </div>
    )
}

export default EditCreator;