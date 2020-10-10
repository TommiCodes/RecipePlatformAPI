import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity } from './model/recipe-entry.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { RecipeController as RecipeController } from './controller/recipe.controller';
import { RecipeService } from './service/recipe.service';
import { MacrosModule } from 'src/macros/macros.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forFeature([RecipeEntity]),
    AuthModule,
    UserModule,
    MacrosModule,
  ],
  controllers: [RecipeController],
  providers: [
    RecipeService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class BlogModule {}
