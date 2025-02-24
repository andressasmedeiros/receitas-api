require('dotenv').config()

import "reflect-metadata";
import express from "express"

import {AppDataSource} from "./data-source"

import cors from "cors"

import {handleError} from "./middlewares/handleError";

import recipeRouter from "./routes/recipe.routes";

const app = express()

app.use(cors()) // Permite que o express entenda requisições de outros domínios

app.use(express.json()) // Permite que o express entenda JSON

app.use("/recipes", recipeRouter)

app.use(handleError)

AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
        console.log("O servidor está rodando em http://localhost:3000")
    })
}).catch(error => console.log(error))

