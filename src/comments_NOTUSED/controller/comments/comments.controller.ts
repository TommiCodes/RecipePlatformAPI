/*import { Controller } from '@nestjs/common';
import { CommentsService } from 'src/comments_NOTUSED/service/comments/comments.service';

@Controller('comment-entries')
export class CommentsController {
  constructor() {}

  
  @Post('recipe/:recipe_id/comment/:id')
  async create(
    @Param() params,
    @Request() req,
    @Body() commentEntry: CommentsEntry,
  ): Promise<CommentsEntry> {
    const user = req.user;
    const id: number = params.recipe_id;
    return await this.commentService.create(id, user, commentEntry);
  }
}*/

import { Controller } from '@nestjs/common';

@Controller('comment-entries')
export class CommentsController {}
