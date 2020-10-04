import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';
import { UserService } from 'src/user/service/user.service';
import { BlogService } from '../service/recipe.service';
import { Observable } from 'rxjs';
import { User } from 'src/user/models/user.interface';
import { switchMap, map } from 'rxjs/operators';
import { RecipeEntry } from '../model/recipe-entry.interface';

@Injectable()
export class UserIsAuthorGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private recipeService: BlogService,
  ) {}

  canActivate(context: ExecutionContext): Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const params = request.params;
    const recipeEntryId: number = Number(params.id);
    const user: User = request.user;

    return this.userService.findOne(user.id).pipe(
      switchMap((user: User) =>
        this.recipeService.findOne(recipeEntryId).pipe(
          map((recipeEntry: RecipeEntry) => {
            let hasPermission = false;

            if (user.id === recipeEntry.author.id) {
              hasPermission = true;
            }

            return user && hasPermission;
          }),
        ),
      ),
    );
  }
}
