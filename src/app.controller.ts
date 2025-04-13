import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() + '<br>' + 
    `
    Welcome to the User Records API!
    <br><br>
    You can use the following endpoints to perform CRUD operations:
    <br><br>

    CREATE a new user record:
    <br>
    Method: POST
    <br>
    URL: http://localhost:3000/user-records
    <br><br>

    READ all user records:
    <br>
    Method: GET
    <br>
    URL: http://localhost:3000/user-records
    <br><br>

    READ a specific user record:
    <br>
    Method: GET
    <br>
    URL: http://localhost:3000/user-records/{id}
    <br><br>

    UPDATE an existing user record:
    <br>
    Method: PATCH
    <br>
    URL: http://localhost:3000/user-records/{id}

    <br><br>

    DELETE a user record:
    <br>
    Method: DELETE
    <br>
    URL: http://localhost:3000/user-records/{id}
    <br><br>
  `;
    // return 'Hello World';
  }
}
