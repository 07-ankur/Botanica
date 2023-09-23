import { Typography } from "@mui/material";
import { useState } from "react";
import { Box, Container } from "@mui/system";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadIcon from "@mui/icons-material/Upload";
import React from "react";
import axios from "axios";

const FileUpload_Pg = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);
  const [preview, setPreview] = useState(null);

  function formatFileSize(bytes) {
    if (bytes >= 1024 * 1024) {
      return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    } else if (bytes >= 1024) {
      return (bytes / 1024).toFixed(2) + " KB";
    } else {
      return bytes + " bytes";
    }
  }

  const handleUpload = () => {
    if (!file) {
      setMsg("No File Selected");
      return;
    }

    const image = new FormData();
    image.append("file", file);

    setMsg("Uploading...");
    setProgress((prevState) => {
      return { ...prevState, started: true };
    });

    axios
      .post("https://httpbin.org/post", image, {
        onUploadProgress: (progressEvent) => {
          setProgress((prevState) => {
            return { ...prevState, pc: progressEvent.progress * 100 };
          });
        },
        headers: {
          "Custom-Header": "value",
        },
      })
      .then((res) => {
        setMsg("Image uploaded successfully");
        console.log(res.data);
      })
      .catch((err) => {
        setMsg("Upload Failed!! Please try again");
        console.error(err);
      });
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          my: 2,
          width: "100%",
          border: "2px dashed olive",
        }}
      >
        <Typography variant="h2">Uploading the plant Images</Typography>
        <Box
          onClick={() => document.querySelector("input").click()}
          sx={{
            border: "2px solid red",
            m: 2,
            width: "25em",
            height: "10em",
            cursor: "pointer",
          }}
        >
          <input
            id="input"
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files[0]);
              if (e.target.files) {
                setPreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          {file ? (
            <Box sx={{ display: "flex", flexDirection: "row", mx:2 }}>
              <img src={preview} width={200} height={200} alt={"file"} />
              <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Typography sx={{fontSize:'1.3em',mx:2,my:1}}>Image Details</Typography>
              <Typography sx={{fontSize:'1.3em',mx:2,my:1}}>{file.name}</Typography>
              <Typography sx={{fontSize:'1.1em',mx:2, my:0.5}}>Size: {formatFileSize(file.size)}</Typography>
              </Box>
            </Box>
          ) : (
            <CloudUploadIcon fontSize="1em" />
          )}
        </Box>
        <Box
          onClick={handleUpload}
          sx={{
            width: "7em",
            height: "3.5em",
            bgcolor: `#84914B`,
            borderRadius: "5%",
            mx: 2,
            my: 1,
            p: 1,
            textAlign: "center",
            boxShadow: "0 0 20px olive",
            cursor: "pointer",
          }}
        >
          <UploadIcon sx={{ color: "white", fontSize: "1.3em" }} />
          <Typography sx={{ color: "white" }} variant="h6">
            Upload Image
          </Typography>
        </Box>
        {progress.started && <progress max="100" value={progress.pc} />}
        {msg && <span>{msg}</span>}
      </Box>
    </Container>
  );
};

export default FileUpload_Pg;

