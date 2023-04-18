import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DataSource, Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}
  create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto)
    const res = this.usersRepository.save(user)
    return res
  }

  findAll() {
    return `This action returns all users`
  }

  async findOneByName(name: string) {
    const user = await this.usersRepository.findOneBy({ name })
    return user
  }

  findOne(id: number) {
    const user = this.usersRepository.findOne({ where: { id } })
    return user
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
