import { Request, Response } from 'express'

class HomeControllers{
    //[GET: /]
    index(req: Request, res: Response): void{
        res.send('ahihi')
    }
}

export const HomeControllersClass = new HomeControllers