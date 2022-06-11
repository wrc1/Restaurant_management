import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) { }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async getEmployess(): Promise<Employee[]> {
    try {
      return await [{ phone: 1234, email: "www@www.com", name: "ttt" }];
    } catch (e) {
      console.log(e)
    }
  }

  @Get('test2')
  getString(): String {
    return "hi";
  }

  
}
