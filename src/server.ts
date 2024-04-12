import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
})


route.post('/filtro/:name', (req: Request, res: Response) => {
    const name = req.params.name
    res.json({ message: 'Rota 2', name })
})

route.post('/:name', (req: Request, res: Response) => {
    const name = req.params.name
    res.json({ message: 'Rota 1', name })
})

app.use(route)


app.listen(3333, () => 'server running on port 3333')
