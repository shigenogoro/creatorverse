/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MyButton from "./../../components/MyButton/MyButton"
import { supabase } from "../../client";

import './ViewCreator.css'

const ViewCreator = () => {
    const creatorId = useParams();

    // State Management
    const [creator, setCreator] = useState([{}]);
    const [redirectEdit, setRedirectEdit] = useState(false);
    const [redirectHome, setRedirectHome] = useState(false);

    // Mounting as Page Loaded
    useEffect(() => {
        getCreator();
    }, [])

    // Functions
    const getCreator = async () => {
        const { data } = await supabase.from("creators").select().eq('id', creatorId.id);
        setCreator(data);
    }

    const onButtonEdit = () => {
        setRedirectEdit(true);
    }

    const onButtonDelete = async () => {
        const res = await supabase.from('creators').delete().eq('id', creatorId.id)
        console.log(res);
        setRedirectHome(true);
    }

    if(redirectEdit) {
        return (
            <Navigate to={'/'} state={{page: 'edit', creatorId: creatorId.id}} />
        )
    }

    if(redirectHome) {
        return (
            <Navigate to={'/'} state={{page: 'show'}} />
        )
    }

    return (
        <div className="view-container">
            <div className="view-info-group">
                <img src={creator[0].imgURL} alt={creator[0].name} />

                <div className="view-text-info">
                    <h2 className="view-creator-name">{creator[0].name}</h2>
                    <p className="view-description-box">{creator[0].description}</p>
                    <ul className="view-ul">
                        {
                            creator[0].ytURL ? (
                                <li className="view-li">
                                    <a href={creator[0].ytURL} className="fa fa-youtube-play view-fa">
                                        <span> {creator[0].name}</span>
                                    </a>
                                </li>
                            ) : (
                                <div></div>
                            )
                        }
                        
                        {
                            creator[0].twitterURL ? (
                                <li className="view-li">
                                    <a href={creator[0].twitterURL} className="fa fa-twitter view-fa">
                                        <span> {creator[0].name}</span>
                                    </a>
                                </li>
                            ) : (
                                <div></div>
                            )
                        }

                        {
                            creator[0].igURL ? (
                                <li className="view-li">
                                    <a href={creator[0].igURL} className="fa fa-instagram view-fa">
                                        <span>   {creator[0].name}</span>
                                    </a>
                                </li>
                            ) : (
                                <div></div>
                            )
                        }
                    </ul>      
                </div>
            </div>

            <div className="view-btn-group">
                <MyButton title="Edit" type="normal" onClick={onButtonEdit} />
                <MyButton title="Delete" type="danger" onClick={onButtonDelete} />
            </div>
        </div>
    )
}

export default ViewCreator;