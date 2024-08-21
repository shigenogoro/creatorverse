/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import MyButton from "../../components/MyButton/MyButton";
import InfoForm from "../../components/InfoForm/InfoForm";
import './EditCreator.css'
import { supabase } from "../../client";

const EditCreator = ({ creatorId, onPageChange }) => {
    // State Management
    const [values, setValues] = useState([{}]);

    // Mounting as Page Loaded
    useEffect(() => {
        getCreator();
    }, [])

    // Functions
    const getCreator = async () => {
        const { data } = await supabase.from("creators").select().eq('id', creatorId);
        setValues(data);
    }

    const onButtonSubmit = async () => {
        console.log(values);
        const { error } = await supabase.from('creators').update(values[0]).eq('id', creatorId)
        if(error) {
            console.log(error)
        } else {
            onPageChange('show'); // Switch back to ShowCreators
        }

    }

    const onButtonDelete = async () => {
        // eslint-disable-next-line no-unused-vars
        const res = await supabase.from('creators').delete().eq('id', creatorId)
        onPageChange('show'); // Switch back to ShowCreators
    }

    // Callback Method: Get Data from Child to Parent
    const handleValuesChange = (field, value) => {
        setValues(prevValues => {
            const updatedValues = [...prevValues]; 
            updatedValues[0] = { ...updatedValues[0], [field]: value }; 
            return updatedValues;
        });
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