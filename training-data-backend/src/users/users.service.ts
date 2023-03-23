import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: "Santiago"
        },
        {
            id: 2,
            name: "Guest User"
        },
    ]

    findAll(){
        return this.users;
    }

    findOneById(id){
        const user = this.users.find( user => user.id === id);

        if( !user ) throw new NotFoundException(`The user with id ${id} is not found`)

        return user;
    }
}
