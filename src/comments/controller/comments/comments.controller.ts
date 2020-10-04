import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { CommentsEntry } from 'src/comments/model/comments.interface';
import { CommentsService } from 'src/comments/service/comments/comments.service';

@Controller('comment-entries')
export class CommentsController {
  constructor(private commentService: CommentsService) {}

  /*
  @Post('comment/:id')
  async addComment(
    @Param('id') recipeId: number,
    @Body() commentEntry: CommentsEntry,
  ) {
    const generatedId = await this.commentService.addComment(
      recipeId,
      commentEntry,
    );
    return { generatedId };
  }*/
}
