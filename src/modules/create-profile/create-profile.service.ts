import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getRandomIntInclusive } from 'src/utils/indes'
import { Repository } from 'typeorm'
import { CreateCreateProfileDto } from './dto/create-create-profile.dto'
import { UpdateCreateProfileDto } from './dto/update-create-profile.dto'
import { FirstName } from './entities/first-name.entity'
import { LastName } from './entities/last-name.entity'

@Injectable()
export class CreateProfileService {
  constructor(
    @InjectRepository(FirstName)
    private readonly firstNameRepository: Repository<FirstName>,
    @InjectRepository(LastName)
    private readonly lastNameRepository: Repository<LastName>,
  ) {}
  create(createCreateProfileDto: CreateCreateProfileDto) {
    return 'This action adds a new createProfile'
  }

  async findOneProfile() {
    const firstNameCount = await this.firstNameRepository.count()
    const firstNameRandomId = getRandomIntInclusive(1, firstNameCount)
    const lastNameCount = await this.lastNameRepository.count()
    const lastNameRandomId = getRandomIntInclusive(1, lastNameCount)
    const firstName = await this.firstNameRepository.findOne({
      where: { id: firstNameRandomId },
    })
    const lastName = await this.lastNameRepository.findOne({
      where: { id: lastNameRandomId },
    })
    return {
      code: 200,
      message: 'created name successfully!',
      data: { name: `${lastName.last_name} ${firstName.first_name}` },
    }
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
