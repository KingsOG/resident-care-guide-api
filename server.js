const express = require ('express')
const app = express()
const cors = require ('cors')
const PORT = 8000


app.use(cors())

const residents = {

    'homer simpson': {
        "age": 50,
        "majorDiagnosis": "Type 2 Diabetes",
        "foodTexture": "Pureed Level 4",
        "fluidTexture": "Moderately thick Level 3",
        "fluidThickner": "Thick&Easy",
        "feedingAbility": "Can feed self",
        "mobility": "Independent",
        "mobility": "Independent",
        "image": "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    },
    'bob belcher': {
        "age": 42,
        "majorDiagnosis": "Dementia",
        "foodTexture": "Soft and bitesized Level 7",
        "fluidTexture": "Slightly thick Level 2",
        "fluidThickner": "Nutilis Clear",
        "feedingAbility": "Has to be fully fed",
        "mobility": "Zimmer frame with assistance of 2 staff",
        "image": "https://static.wikia.nocookie.net/bobsburgerpedia/images/d/dc/Bob-16.jpg/revision/latest/scale-to-width-down/250?cb=20150727145240",
    },
    'glen quagmire': {
        "age": 33,
        "majorDiagnosis": "STI and Dementia",
        "staffAwarenes!": "makes inappropriate sexual advances/remarks. Can touch female care staff inappropriately without notice ",
        "foodTexture": "Soft and bitesized Level 7",
        "fluidTexture": "Thin Level 0",
        "fluidThickner": "None needed",
        "feedingAbility": "Can feed self",
        "mobility": "Zimmer frame with assistance of 2 staff",
        "image": "https://upload.wikimedia.org/wikipedia/en/f/fe/Glenn_Quagmire.png",
    },
    'unknown':{
        'age': 0,
        "majorDiagnosis": "Unknown",
        "staffAwarenes!": "Unknown",
        "foodTexture": "Unknown",
        "fluidTexture": "Unknown",
        "fluidThickner": "Unknown",
        "feedingAbility": "Unknown",
        "mobility": "Unknown",
        "image": "Unknown",
    }
}

app.get('/',(request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:residentName', (request, response) => {
    const residentsName = request.params.residentName.toLowerCase()

    if(residents[residentsName]){
        response.json(residents[residentsName])

    }else{
        response.json(residents['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running at ${PORT}! Go catch it!!`)
})