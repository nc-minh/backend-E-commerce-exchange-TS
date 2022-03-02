import { Request, Response } from 'express'
import { accountsModel } from '../../models/accounts'
import { User } from '../../models/accounts'

class LoginControllers{
    //[POST: /]
    login(req: Request, res: Response): void{
        const username = req.body.username
        const password = req.body.password

        try {
            accountsModel.find({
                username: username,
                password: password,
            })
                .then((data: any) => {

                    if(data.length != 0){
                        res.json({
                            message: 'Đăng nhập thành công!'
                        }) 
                    }else{
                        res.json({
                            message: 'Đăng nhập thất bại!'
                        }) 
                    }
                })
        } catch (error) {
            res.json({
                error: error
            })
        }

        
    }
}

export const LoginControllersClass = new LoginControllers