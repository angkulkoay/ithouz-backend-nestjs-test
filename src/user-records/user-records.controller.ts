import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserRecordsService } from './user-records.service';
import { CreateUserRecordDto } from './dto/create-user-record.dto';

@Controller('user-records')
export class UserRecordsController {
  constructor(private readonly userRecordsService: UserRecordsService) {}

  @Post()
  create(@Body() createUserRecordDto: CreateUserRecordDto) {
    return this.userRecordsService.create(createUserRecordDto);
  }

  @Get()
  findAll() {
    return this.userRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserRecordDto: Partial<CreateUserRecordDto>) {
    return this.userRecordsService.update(+id, updateUserRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userRecordsService.remove(+id);
  }
} 