import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRecord } from './entities/user-record.entity';
import { CreateUserRecordDto } from './dto/create-user-record.dto';

@Injectable()
export class UserRecordsService {
  constructor(
    @InjectRepository(UserRecord)
    private userRecordsRepository: Repository<UserRecord>,
  ) {}

  create(createUserRecordDto: CreateUserRecordDto) {
    const userRecord = this.userRecordsRepository.create(createUserRecordDto);
    return this.userRecordsRepository.save(userRecord);
  }

  findAll() {
    return this.userRecordsRepository.find();
  }

  findOne(id: number) {
    return this.userRecordsRepository.findOneBy({ id });
  }

  async update(id: number, updateUserRecordDto: Partial<CreateUserRecordDto>) {
    await this.userRecordsRepository.update(id, updateUserRecordDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const userRecord = await this.findOne(id);
    if (!userRecord) {
      throw new NotFoundException(`User record with ID ${id} not found`);
    }
    return this.userRecordsRepository.remove(userRecord);
  }
} 