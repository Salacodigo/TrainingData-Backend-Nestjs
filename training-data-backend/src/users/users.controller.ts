import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly UsersService: UsersService
    ){}

    @Get()
    getAllUsers(){
        return this.UsersService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: string){
        return this.UsersService.findOneById(Number(id));   
    }

    @Post()
    createUser(@Body() body: any){
        return body;
    }

    @Patch(':id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any,
    ){
        return {
            method: 'Patch',
            id,
            body,
        }
    }
    
    @Delete(':id')
    deleteUser( @Param('id', ParseIntPipe) id: number){
        return {
            method: 'delete',
            id
        }

    }

}
