from groq import Groq
from schemas import Userinput , AIoutput
from dotenv import load_dotenv
from groq.types.chat import (
    ChatCompletionSystemMessageParam ,
    ChatCompletionUserMessageParam
)

import os

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def LLM_generation(data:Userinput):
    PROMPT = f"""
    You are a story creator with a soft tone. Create a creative story based on:

    Title: {data.Title}
    Important info: {data.Important_info}
    return the output strictly in JSON format :-
    {{
    "better_title": "{{data.better_title}}",
    "story": "{{data.story}}"
    }}
    """


    response = client.chat.completions.create(
        model = "llama-3.1-8b-instant",
        messages = [
        ChatCompletionSystemMessageParam(
            role="system",
            content="You are a story creator"
        ),
        ChatCompletionUserMessageParam(
            role="user",
            content=PROMPT
        ),
    ],
        temperature = 0.3
    )
    content = response.choices[0].message.content
    return content