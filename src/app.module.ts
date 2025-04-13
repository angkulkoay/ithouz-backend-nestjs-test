import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRecordsModule } from './user-records/user-records.module';
import { UserRecord } from './user-records/entities/user-record.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'sample_db',
      entities: [UserRecord],
      synchronize: true, // This will automatically create the table
    }),
    UserRecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
