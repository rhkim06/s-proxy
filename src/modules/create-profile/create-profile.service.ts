import { Injectable } from '@nestjs/common'
import { CreateCreateProfileDto } from './dto/create-create-profile.dto'
import { UpdateCreateProfileDto } from './dto/update-create-profile.dto'

@Injectable()
export class CreateProfileService {
  create(createCreateProfileDto: CreateCreateProfileDto) {
    return 'This action adds a new createProfile'
  }

  findOneProfile() {
    return `This action returns all createProfile`
  }

  findOne(id: number) {
    return `This action returns a #${id} createProfile`
  }

  update(id: number, updateCreateProfileDto: UpdateCreateProfileDto) {
    return `This action updates a #${id} createProfile`
  }

  remove(id: number) {
    return `This action removes a #${id} createProfile`
  }
}
