import { Injectable } from '@nestjs/common';
import { User, UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) { }
  

  async validateUser(username: String, password: String): Promise<Partial<User>>{
    const user = await this.userService.findOne(username);
    if (user && password === user.password) {
      const { password, ...result } = user;
      return result
    }
    return null;
  }

  async login(user: User): Promise<any> {
    const payload = { username: user.name, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
