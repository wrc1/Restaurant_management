import { Controller, Request, Post, Get, UseGuards, Body, Delete, ParseIntPipe, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { User } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) { }

  // @UseGuards(JwtAuthGuard)
  @Get()
  getUsers(): Promise<any> {
    return this.appService.getUsers();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @UseGuards(JwtAuthGuard)
  @Post('new')
  async createUser(@Body() user: User): Promise<any> {
    // console.log(user);
    return await this.appService.createUser(user);
  }

  // @UseGuards(JwtAuthGuard)
  @Post('update')
  async updateUser(@Body() user: User): Promise<User> {
    return await this.appService.updateUser(user);
  }

  // @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<any> {
    console.log('this is the id param', id);
    this.appService.deleteUser(id);
  }
  
}
