import React , { useState } from "react";
import InputText from "./components/inputText.jsx";
import GenerateButton from "./components/generateButton.jsx";
import DisplayName from "./components/displayName.jsx";
import DisplayDate from "./components/displayDate.jsx";
import DisplayTime from "./components/displayTime.jsx";
import DisplayTitle from "./components/displayTitle.jsx";
import DisplayWelcome from "./components/displayWelcome.jsx";
import "./styles/homeStyle.css";


function Index(){
  // defining states
  const [title , setTitle] = useState("");
  const [importantInfo , setImportantInfo] = useState("");
  const [response , setResponse] = useState(null);
  const [loading , setLoading] = useState(false);

  // handle API call
  const handleGenerate = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:8000/generate-story",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          Title: title,
          Important_info: importantInfo
        })
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error :",error);
    } finally {
      setLoading(false);
    }
  };

  return ( 
  <React.Fragment>
    {/* header */}
    <div className="header">
      <DisplayName />
    </div>
    {/* main content */}
    <div className="main-content">
      <DisplayTitle />
      <DisplayWelcome></DisplayWelcome>
    </div>
    <div className="main-content">
      <InputText Text="Give the title for your story" value = {title} onChange = {(e) => setTitle(e.target.value)}></InputText>
      <InputText Text="Some important info about story" value = {importantInfo} onChange = {(e) => setImportantInfo(e.target.value)}></InputText>
      <GenerateButton onClick = {handleGenerate} />
    </div>
    {/* Response Section */}
    {loading && <p>Generating story ...</p>}
    {response && (
      <div className="ai-result-box">
        <h2>{response.title}</h2>
        <p>{response.story}</p>
      </div>
    )}
    {/* footer */}
    <div className="footer-box">
      <DisplayDate></DisplayDate>
      <DisplayTime></DisplayTime>
    </div>
  </React.Fragment>
  )
}
export default Index;