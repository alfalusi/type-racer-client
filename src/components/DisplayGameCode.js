import React, {useRef, useState} from 'react';

const DisplayGameCode = ({gameID}) => {
    const [copySuccess, setCopySuccess] = useState(false);
    const textInputRef = useRef(null);

    const copyToClipboard = async (e) => {
        textInputRef.current.select();
        // document.executeCommand('copy');
        await navigator.clipboard.writeText(gameID);
        setCopySuccess(true);
    }

    return(
        <div className='row my-3 text-center'>
            <div className='col-sm'></div>
            <div className='col-sm-8'>
                <h4>Send this Code to Your Friends for them to join</h4>
                <div className='input-group mb-3'>
                    <input type='text'
                           ref={textInputRef}
                           value={gameID} 
                           readOnly
                           className='form-control' />
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary'
                                onClick={copyToClipboard}
                                type='button'>Copy Game Code</button>
                    </div>
                    {copySuccess ? <div className='alert alert-success' role='alert'>Succesfully Copied Game Code</div> : null}
                </div>
            </div>
            <div className='col-sm'></div>
        </div>
    )
};

export default DisplayGameCode;