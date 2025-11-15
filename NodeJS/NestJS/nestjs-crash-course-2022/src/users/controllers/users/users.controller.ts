import { Controller, Get, Post, Body, Req, Res, Param } from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return [{ username: 'Anson', email: 'anson@anson.com' }];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'Anson',
        email: 'anson@anson.com',
        posts: [
          { title: 'Post 1', content: 'Content 1' },
          { title: 'Post 2', content: 'Content 2' },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        content: 'Content 1',
        comments: [
          { id: 1, text: 'Great post!' },
          { id: 2, text: 'Thanks for sharing.' },
        ],
      },
    ];
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    console.log(payload);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return { id };
  }
}
