import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagDto } from './dto/tag.dto';
import { Tag } from '@prisma/client';

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  @Get('/:tagId')
  async findTagById(@Param('tagId') tagId: number): Promise<Tag> {
    return await this.tagsService.findTagById(tagId);
  }

  @Post()
  async createTags(@Body() tagDto: TagDto): Promise<Tag> {
    return await this.tagsService.createTags(tagDto);
  }

  @Get('/:tagId/boards')
  async findBoardByTagId(@Param('tagId') tagId: number): Promise<Tag> {
    return await this.tagsService.findBoardByTagId(tagId);
  }
}
