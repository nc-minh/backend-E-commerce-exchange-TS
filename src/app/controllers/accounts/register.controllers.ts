import { Request, Response } from 'express'
import { accountsModel } from '../../models/accounts'
import { User } from '../../models/accounts'

class RegisterControllers{
    //[POST: /]
    register(req: Request, res: Response): void{
        const username = req.body.username
        const password = req.body.password

        try {
            accountsModel.create({
                username,
                password,
            } as User)
                .then((data: any) => {
                    res.json({
                        data: data
                    })
                })
        } catch (error) {
            res.json({
                error: error
            })
        }

        
    }
}

export const RegisterControllersClass = new RegisterControllers