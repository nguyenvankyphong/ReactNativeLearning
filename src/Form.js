import  React from 'react'
import Button from './Button';

const Form = (props) => {
    return (
        <div>
            FORM
            <Button
            nameBtn = 'Back'
            onClick = {props.goBack}
            />
        </div>
        
    )

}
export default Form
