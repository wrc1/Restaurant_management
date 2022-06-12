import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

// Remove after creating UserDto class
export type User = {
  userId: number,
  phone: string,
  name: string,
  lastName: string,
  email: string,
  password: string,
  number_restaurants: string,
  status: string
};

export type ViewUser = {
  userId: number,
  phone: string,
  name: string,
  lastName: string,
  email: string,
  number_restaurants: string,
  status: string
}



@Injectable()
export class UsersService {

  private readonly generatedData = [...Array(10).keys()].map(v => {
  return {
    userId: v,
    name: faker.name.findName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber('05#-####-###'),
    password: "ron_pass",
    status: faker.helpers.arrayElement(['1', '2', '3']),
    number_restaurants: faker.helpers.arrayElement(['1', '2', '3'])
  }
  })
  database = {
    users: [...this.generatedData,
      {
        name: "ron",
        userId: 999,
        phone: '05#-####-###',
        lastName: 'Leybo',
        email: 'tt@gmail.com',
        password: 'ron_pass',
        status: '1',
        number_restaurants: '3'
      }
    ]
  }

  async create(user: User): Promise<any> {
    const newUser = {
      userId: this.database.users.length + 1,
      ...user
    }
    await this.database.users.push(newUser);
    return { success: true, message: 'created'}
  }

  async update(user: User): Promise<any> {
    const userIndex = this.database.users.findIndex(u => u.userId === user.userId);
    const oldUser = this.database.users[userIndex];
    const updatedUser = {
      oldUser,
      ...user,
    }
    this.database.users.splice(userIndex, 1, updatedUser)
  }

  async delete(userId: number): Promise<any> {
    const index = this.database.users.findIndex(user => user.userId === userId);
    this.database.users.splice(index, 1)
  }

  async findAll(): Promise<ViewUser [] | []> {
    return this.database.users.map(user => {
      const { password, ...rest } = user
      return rest
    })
  }

  async findOne(name: String): Promise<User | undefined> {
    return this.database.users.find(user => user.name === name)
  }
}
