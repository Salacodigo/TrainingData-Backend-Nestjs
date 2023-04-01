import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './usersManual.service';

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
        return this.UsersService.findOneById(id);   
    }

    @Post()
    createUser(@Body() body: any){
        return body;
    }

    @Patch(':id')
    updateUser(
        @Param('id') id: string,
        @Body() body: any,
    ){
        return {
            method: 'Patch',
            id,
            body,
        }
    }
    
    @Delete(':id')
    deleteUser( @Param('id') id: string){
        return {
            method: 'delete',
            id
        }

    }

}
