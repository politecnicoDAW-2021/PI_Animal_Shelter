import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from 'src/modules/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AnimalController } from '../controllers/animal.controller';
import { SpecieEntity } from 'src/database/entities/animal/specie.entity';
import { AnimalEntity } from 'src/database/entities/animal/animal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalService } from '../services/animal.service';



@Module({
    imports: [
        TypeOrmModule.forFeature([SpecieEntity])
    ],
    providers: [AnimalService,],
    controllers: [AnimalController],
    exports: [AnimalService]
})
export class AnimalModule{

    
}
