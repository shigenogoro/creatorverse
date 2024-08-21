import { useState } from "react";
import MyButton from "../../components/MyButton/MyButton";
import InfoForm from "../../components/InfoForm/InfoForm";
import './AddCreator.css';
import { supabase } from "../../client";

const AddCreator = ({onPageChange}) => {
    // State Management
    const [values, setValues] = useState([{}]);

    // Functions
    const onButtonSubmit = async () => {
        const { error } = await supabase.from("creators").insert(values);
        if(error) {
            console.log(error);
        } else {
            onPageChange('show');
        }
    }

    // Callback Method: Get Data from Child to Parent
    const handleValuesChange = (field, value) => {
        setValues(prevValues => {
            const updatedValues = [...prevValues];
            updatedValues[0] = {...updatedValues[0], [field]: value};
            return updatedValues;
        })
    }

    return (
        <div>
            <h2 className="main-title">Add Creator</h2>
            <InfoForm values={values[0]} onValuesChange={handleValuesChange} />

            <div className="submit-btn-container">
                <MyButton title="Submit" type="normal" onClick={onButtonSubmit} />
            </div>
        </div>
    )
}

export default AddCreator;