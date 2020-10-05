import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity } from './model/recipe-entry.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { BlogController } from './controller/recipe.controller';
import { RecipeService } from './service/recipe.service';
import { MacrosModule } from 'src/macros/macros.module';
import { MacroEntity } from 'src/macros/models/macros.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecipeEntity]), AuthModule, UserModule],
  controllers: [BlogController],
  providers: [RecipeService],
})
export class BlogModule {}
