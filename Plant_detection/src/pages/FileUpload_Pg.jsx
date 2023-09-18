import { Typography } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import React from "react";
import axios from "axios";

const FileUpload_Pg = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState({started:false, pc:0});
  const [msg, setMsg] = useState(null);

  const handleUpload = () => {
    if(!file) {
        setMsg('No File Selected');
        return;
    }

    const image = new FormData();
    image.append('file',file);

    setMsg('Uploading...');
    setProgress(prevState=>{
        return {...prevState, started:true}
    })

    axios.post('https://httpbin.org/post', image,{
        onUploadProgress: (progressEvent) =>{
            setProgress(prevState => {
                return {...prevState, pc: progressEvent.progress*100}
            })
        },
        headers: {
            "Custom-Header":'value',
        }
    })
    .then(res => {
        setMsg('Image uploaded successfully')
        console.log(res.data)})
    .catch(err => {
        setMsg('Upload Failed!! Please try again')
        console.error(err)})
}

  return (
    <Box>
      <Typography variant="h2">Uploading the plant Images</Typography>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          {setFile(e.target.files[0])};
        }}
      />
      <button onClick={handleUpload}>Upload</button>

      { progress.started && <progress max='100' value={progress.pc}/>}
      {msg && <span>{msg}</span>}
    </Box>
  );
};

export default FileUpload_Pg;
