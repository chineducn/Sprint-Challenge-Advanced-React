import React, { useState } from 'react';

export default function useInput(key, initialValue) {
    const [value, setValue] = useState(key, initialValue);

    const handleChange = e => {
        
        setValue(e.target.value);
    };
    
    return [value, setValue, handleChange];
};