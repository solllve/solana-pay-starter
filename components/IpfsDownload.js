import React, {useState, useEffect}  from 'react';
import useIPFS from '../hooks/useIPFS';

const IPFSDownload = ({ hash, filename }) => {
    const [receiptLink, setReceiptLink] = useState("")
  const file = useIPFS(hash, filename);
    useEffect(() => {
        file ? setReceiptLink(sessionStorage.getItem("receipt")) : null
    }, [file])
  return (
    <div className="orders">
      {file ? (
        <>
        <div className="download-component">
          <a className="download-button" href={file} download={filename}>Download</a>
        </div>
        <div>
             {receiptLink ? <a target="_blank" href={receiptLink}>Your receipt</a>: null }
        </div>
        </>
        
      ) : (
        <p>Downloading file...</p>
      )}
    </div>
  );
};

export default IPFSDownload;
