import { useState } from "react";
import { Navigate } from "react-router-dom";
import MyButton from "../../components/MyButton/MyButton";
import InfoForm from "../../components/InfoForm/InfoForm";
import './AddCreator.css';
import { supabase } from "../../client";

const AddCreator = () => {
    // State Management
    const [values, setValues] = useState([{}]);
    const [redirect, setRedirect] = useState(false);

    // Functions
    const onButtonSubmit = async () => {
        const { error } = await supabase.from("creators").insert(values);
        if(error) {
            console.log(error);
        }
        setRedirect(true);
    }

    // Callback Method: Get Data from Child to Parent
    const handleValuesChange = (field, value) => {
        setValues(prevValues => {
            const updatedValues = [...prevValues];
            updatedValues[0] = {...updatedValues[0], [field]: value};
            return updatedValues;
        })
    }

    if(redirect) {
        return (
            <Navigate to={'/'} />
        )
    }

    return (
        <div className="add-container">
            <InfoForm values={values[0]} onValuesChange={handleValuesChange} />

            <div>
                <MyButton title="Submit" type="normal" onClick={onButtonSubmit} />
            </div>
        </div>
    )
}

export default AddCreator;