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
            <div className="info-group">
                <img src={creator[0].imgURL} alt={creator[0].name} />

                <div className="text-info">
                    <h2 className="creator-name">{creator[0].name}</h2>
                    <p className="description-box">{creator[0].description}</p>
                    <ul>
                        <li>
                            <a href={creator[0].ytURL} className="fa fa-youtube-play">
                                <span> {creator[0].name}</span>
                            </a>
                        </li>
                        <li>
                            <a href={creator[0].twitterURL} className="fa fa-twitter">
                                <span> {creator[0].name}</span>
                            </a>
                        </li>
                        <li>
                            <a href={creator[0].igURL} className="fa fa-instagram">
                                <span> {creator[0].name}</span>
                            </a>
                        </li>
                    </ul>      
                </div>
            </div>

            <div className="btn-group">
                <MyButton title="Edit" type="normal" />
                <MyButton title="Delete" type="danger" />
            </div>
        </div>
    )
}

export default ViewCreator;