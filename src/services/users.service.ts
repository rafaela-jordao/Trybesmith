import connection from '../models/connection';
import UserModel from '../models/users.model';
import User from '../interfaces/user.interface';

class UserService {
  public userModel: UserModel;

  constructor(model: UserModel = new UserModel(connection)) {
    this.userModel = model;
  }

  public create(user: User): Promise<User> {
    return this.userModel.create(user);
  }
}

export default UserService;
