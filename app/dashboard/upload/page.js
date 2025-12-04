'use client';
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';

export default function UploadPage(){
  const [file,setFile]=useState(null);
  const [message,setMessage]=useState('');
  const [progress,setProgress]=useState(0);

  async function handleUpload(e){
    e.preventDefault();
    if (!file) return setMessage('Choose a file');
    const path = `manuscripts/${Date.now()}_${file.name}`;
    const token = (await supabase.auth.getSession()).data.session?.access_token;
    const res = await fetch('/api/upload-url',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body: JSON.stringify({bucket:'manuscripts', path})}).then(r=>r.json());
    if (!res?.url) return setMessage('Upload URL failed');
    // use XHR for progress
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', res.url);
    xhr.upload.onprogress = function(evt){
      if (evt.lengthComputable) {
        const percent = Math.round((evt.loaded / evt.total) * 100);
        setProgress(percent);
      }
    };
    xhr.onload = async function(){
      if (xhr.status >= 200 && xhr.status < 300) {
        setMessage('Uploaded. Registering...');
        await fetch('/api/manuscripts',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify({path, filename: file.name})});
        setMessage('Done');
      } else {
        setMessage('Upload failed: ' + xhr.status);
      }
    };
    xhr.onerror = function(){ setMessage('Upload failed'); };
    xhr.send(file);
  }

  return (
    <div>
      <h2>Upload Manuscript</h2>
      <div className='card'>
        <form onSubmit={handleUpload}>
          <input type='file' onChange={e=>setFile(e.target.files[0])} /><br/>
          <button className='btn' type='submit'>Upload</button>
        </form>
        <div style={{marginTop:8}}>Progress: {progress}%</div>
        <p>{message}</p>
      </div>
    </div>
  );
}
