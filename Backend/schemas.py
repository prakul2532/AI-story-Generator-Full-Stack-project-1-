from pydantic import BaseModel

class Userinput(BaseModel):
    Title : str
    Important_info : str

class AIoutput(BaseModel):
    better_title: str
    story : str
