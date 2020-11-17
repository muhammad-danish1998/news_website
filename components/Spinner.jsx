import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = () => {
    return (
        <div style={{
            width: '100%',
            height: '700px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ClipLoader 
            size={100}
            color="red"
            loading={true}/>
        </div>
    )
}

export default Spinner
