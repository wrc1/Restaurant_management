import { Injectable } from '@nestjs/common';
import { User, UsersService } from './users/users.service';
@Injectable()
export class AppService {
  constructor(private userService: UsersService) { }
  
  async getUsers(): Promise<User [] | []> {
    return await this.userService.findAll();
  }

  async createUser(user: User): Promise<any> {
    this.userService.create(user)
  }

  async updateUser(user: User): Promise<any> {
    this.userService.update(user);
  }

  async deleteUser(userId: number): Promise<any> {
    this.userService.delete(userId);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
