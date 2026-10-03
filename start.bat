@echo off

echo Starting Account Service...
start cmd /k "cd AccountService && python app.py"


//echo Starting Trail Service...
//start cmd /k "cd TrailService && python app.py"

//echo Starting Recommender Service...
//start cmd /k "cd RecommenderService && python app.py"

echo Starting Frontend Server...
start cmd /k "cd Frontend && python -m http.server 5500"

echo All services started.