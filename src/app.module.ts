import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [RecipesModule], //apjungia modelius
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
