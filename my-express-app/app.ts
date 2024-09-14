import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());


// Import Router here
import {userRouter} from "./router/userRouter";

interface User {
    name: string;
    age: number;
}

app.post('/user', (req: Request, res: Response) => {
    const user: User = req.body;

    try {
        if (user.name || user.age) {
            console.log("user : ", user.name , ` (${user.age}) `)
        }
    }catch (err){
        console.log("error : ",err)
        return res.status(400).send('Bad Request');
    }


    res.send(`User ${user.name} is ${user.age} years old.`);
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
