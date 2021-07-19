import React, {useState, useEffect} from 'react';

const Demo = () => {
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        console.log(inputs.name);
    }, [inputs.name]);

    const handleChange = (e) => {
        setInputs( inputs => ({...inputs, [e.target.name] : e.target.value}))
    }

    return(
        <React.Fragment> 
            <input type="text" name="name" value={inputs.name} onChange={handleChange}/>
            <input type="number" name="age" value={inputs.age} onChange={handleChange}/>
            {
                inputs.name && inputs.age ? 
                <div> Hello {inputs.name} is {inputs.age} years old.</div> :
                null
            }
        </React.Fragment>
    )

}

export default Demo;