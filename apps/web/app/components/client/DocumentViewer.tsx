"use client"
import React, { useEffect, useState } from 'react';

const DocumentViewer = ({ document }) => {
  const [blobUrl, setBlobUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(document);
        const blob = await response.blob();
        const newBlobUrl = URL.createObjectURL(blob);
        setBlobUrl(newBlobUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [document]);

  const openBlobUrlInNewTab = () => {
    if (blobUrl) {
      window.open(blobUrl, '_blank');
    }
  };

  return (
    document ? <div>
      {blobUrl ? (
        <button className='w-full text-black font-bold rounded px-2 py-[5px] bg-blue-500' onClick={openBlobUrlInNewTab} disabled={!blobUrl}>{blobUrl ? 'Abrir' : '...Carregando'}</button>
      ) : (
        <div>Fetching data...</div>
      )}
    </div>
  : null);
};

export default DocumentViewer