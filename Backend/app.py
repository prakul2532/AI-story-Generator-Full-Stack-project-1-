from fastapi import FastAPI
from schemas import *
from call_llm import LLM_generation
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "https://ai-story-generator-tau-eight.vercel.app/",
]
app = FastAPI(title="My Simple API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/generate-story",response_model=AIoutput,summary="It will create an creative story")
def index(data : Userinput):
    result = LLM_generation(data)
    AIresult = result.split("\n",1)
    better_title = AIresult[0].replace("2.)","").strip()
    Story = AIresult[1].replace("1.)","").strip() if len(AIresult) > 1 else ""
    return {
        "better_title": better_title,
        "story": Story
    }