import { Request, Response } from 'express';
import UserService from '../services/users.service';
import jwtService from '../services/jwtService';

class UserController {
  public service: UserService;

  constructor(service: UserService = new UserService()) {
    this.service = service;
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.service.create(user);
    const token = jwtService.createToken(userCreated);
    res.status(201).json({ token }); 
  };
}

export default UserController;
