/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Get,
  Query,
  Param,
  Delete,
  Put,
  UploadedFile,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { RecipeService } from '../service/recipe.service';
import { Observable, of } from 'rxjs';
import { RecipeEntry } from '../model/recipe-entry.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { UserIsAuthorGuard } from '../guards/user-is-author.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path = require('path');
import { Image } from '../model/Image.interface';
import { join } from 'path';
import { User } from 'src/user/models/user.interface';
import { RecipeEntity } from '../model/recipe-entry.entity';

export const BLOG_ENTRIES_URL = 'http://localhost:3000/api/recipe-entries';

export const storage = {
  storage: diskStorage({
    destination: './uploads/recipe-entry-images',
    filename: (req, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller('recipe-entries')
export class BlogController {
  constructor(private recipeService: RecipeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() recipeEntry: RecipeEntry,
    @Request() req,
  ): Observable<RecipeEntry> {
    const user = req.user;
    return this.recipeService.create(user, recipeEntry);
  }

  // @Get()
  // findBlogEntries(@Query('userId') userId: number): Observable<RecipeEntry[]> {
  //     if(userId == null) {
  //         return this.recipeService.findAll();
  //     } else {
  //         return this.recipeService.findByUser(userId);
  //     }
  // }

  @Get('')
  index(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    limit = limit > 100 ? 100 : limit;

    return this.recipeService.paginateAll({
      limit: Number(limit),
      page: Number(page),
      route: BLOG_ENTRIES_URL,
    });
  }

  @Get('user/:user')
  indexByUser(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Param('user') userId: number,
  ) {
    limit = limit > 100 ? 100 : limit;

    return this.recipeService.paginateByUser(
      {
        limit: Number(limit),
        page: Number(page),
        route: BLOG_ENTRIES_URL + '/user/' + userId,
      },
      Number(userId),
    );
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<RecipeEntry> {
    return this.recipeService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, UserIsAuthorGuard)
  @Put(':id')
  updateOne(
    @Param('id') id: number,
    @Body() recipeEntry: RecipeEntry,
  ): Observable<RecipeEntry> {
    return this.recipeService.updateOne(Number(id), recipeEntry);
  }

  @UseGuards(JwtAuthGuard, UserIsAuthorGuard)
  @Delete(':id')
  deleteOne(@Param('id') id: number): Observable<any> {
    return this.recipeService.deleteOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('image/upload')
  @UseInterceptors(FileInterceptor('file', storage))
  uploadFile(@UploadedFile() file): Observable<Image> {
    return of(file);
  }

  @Get('image/:imagename')
  findImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
    return of(
      res.sendFile(
        join(process.cwd(), 'uploads/recipe-entry-images/' + imagename),
      ),
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post('comment/:id')
  async createComment(
    @Param('id') id: number,
    @Body('comment') comment: string,
  ): Promise<RecipeEntry> {
    return await this.recipeService.createComment(id, comment);
  }

  @UseGuards(JwtAuthGuard)
  @Get('comments/:id')
  async findAllComments(@Param('id') id: number): Promise<string[]> {
    return await this.recipeService.findAllComments(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('likes/:id')
  async createLikes(
    @Param('id') recipe_id: number,
    @Request() req,
  ): Promise<RecipeEntry> {
    const user = req.user;
    return await this.recipeService.createLikes(user, recipe_id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('likes/:id')
  async findAllLikes(@Param('id') id: number): Promise<number> {
    return await this.recipeService.findAllLikes(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('ingredients/:id')
  async createIngredients(
    @Param('id') id: number,
    @Body('ingr') ingr: string,
  ): Promise<string> {
    return await this.recipeService.createIngredients(id, ingr);
  }

  @UseGuards(JwtAuthGuard)
  @Get('ingredients/:id')
  async findAllIngredients(@Param('id') id: number): Promise<RecipeEntry> {
    return await this.recipeService.findAllIngredients(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('macros/:id')
  async findAllMacros(@Param('id') id: number): Promise<RecipeEntry> {
    return await this.recipeService.findAllMacros(id);
  }
}
