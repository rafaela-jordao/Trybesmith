import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const jwtService = {
  createToken: (data: object) => {
    const token = jwt.sign({ data }, process.env.JWT_SECRET || 'suaSenhaSecreta');
    return token;
  },

};

export default jwtService;