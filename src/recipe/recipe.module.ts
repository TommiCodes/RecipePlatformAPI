import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity } from './model/recipe-entry.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { BlogController } from './controller/recipe.controller';
import { BlogService } from './service/recipe.service';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeEntity]), AuthModule, UserModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
