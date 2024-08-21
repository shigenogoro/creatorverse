/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import MyButton from "../../components/MyButton/MyButton";
import InfoForm from "../../components/InfoForm/InfoForm";
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

    // Callback Method: Get Data from Child to Parent
    const handleValuesChange = (field, value) => {
        setValues(prevValues => {
            const updatedValues = [...prevValues]; 
            updatedValues[0] = { ...updatedValues[0], [field]: value }; 
            return updatedValues;
        });
    }

    if(redirect) {
        return (
            <Navigate to={'/'} />
        )
    }

    return (
        <div className="edit-container">
            <h2 className="main-title">Edit Creator</h2>
            <InfoForm values={values[0]} onValuesChange={handleValuesChange}  />

            <div>
                <MyButton title="Submit" type="normal" onClick={onButtonSubmit} />
                <MyButton title="Delete" type="danger" onClick={onButtonDelete} />
            </div>
        </div>
    )
}

export default EditCreator;