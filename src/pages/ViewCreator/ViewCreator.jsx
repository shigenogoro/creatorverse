/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MyButton from "./../../components/MyButton/MyButton"
import { supabase } from "../../client";

import './ViewCreator.css'

const ViewCreator = () => {
    const creatorId = useParams();

    // State Management
    const [creator, setCreator] = useState([{}]);

    // Mounting as Page Loaded
    useEffect(() => {
        getCreator();
    }, [])

    // Functions
    const getCreator = async () => {
        const { data } = await supabase.from("creators").select().eq('id', creatorId.id);
        setCreator(data);
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
                <MyButton title="Edit" type="normal" />
                <MyButton title="Delete" type="danger" />
            </div>
        </div>
    )
}

export default ViewCreator;