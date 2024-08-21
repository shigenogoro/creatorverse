const InfoForm = ({values, onValuesChange}) => {    
    // Callback for lifting change to the parent component.
    const handleChange = (field) => (event) => {
        const value = event.target.value;
        onValuesChange(field, value); // Call the parent's callback with the updated field and value
    }


    return (
        <div className="form-container">
            <div className="info-container">
                <form>
                    <legend>Personal Information</legend>
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <br />
                        <input 
                            onChange={handleChange('name')}
                            type="text" 
                            name="name"  
                            id="name" 
                            value={values.name || ''}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="imgURL">Image</label>
                        <br />
                        <input 
                            onChange={handleChange('imgURL')}
                            type="text" 
                            name="imgURL"  
                            id="imgURL" 
                            value={values.imgURL || ''}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="description">Description</label>
                        <br />
                        <input 
                            onChange={handleChange('description')}
                            type="textarea" 
                            name="description"  
                            id="description" 
                            value={values.description || ''}
                        />
                    </div>
                </form>
            </div>
            <div className="social-container">
                    <form>
                        <legend>Social Media Link</legend>
                        <div className="form-field">
                            <label htmlFor="ytURL">
                                <span><i className="fa fa-youtube-play"></i> YouTube</span>
                            </label>
                            <br />
                            <input 
                                onChange={handleChange('ytURL')}
                                type="text" 
                                name="ytURL"  
                                id="ytURL" 
                                value={values.ytURL || ''}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="twitterURL">
                                <span><i className="fa fa-twitter"></i>Twitter</span>
                            </label>
                            <br />
                            <input 
                                onChange={handleChange('twitterURL')}
                                type="text" 
                                name="twitterURL"  
                                id="twitterURL" 
                                value={values.twitterURL|| ''}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="igURL">
                                <span><i className="fa fa-instagram"></i>Instagram</span>
                            </label>
                            <br />
                            <input 
                                onChange={handleChange('igURL')}
                                type="text" 
                                name="igURL"  
                                id="igURL" 
                                value={values.igURL || ''}
                            />
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default InfoForm;