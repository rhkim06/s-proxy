import { Injectable } from '@nestjs/common'
import { inspect } from 'util'
import { CreateMailServiceDto } from './dto/create-mail-service.dto'
import { UpdateMailServiceDto } from './dto/update-mail-service.dto'
import { getMail } from './main'
@Injectable()
export class MailServiceService {
  create(createMailServiceDto: CreateMailServiceDto) {
    return 'This action adds a new mailService'
  }

  findAllOutLook(payload: any) {
    return getMail(payload)
  }

  findOne(id: number) {}

  update(id: number, updateMailServiceDto: UpdateMailServiceDto) {
    return `This action updates a #${id} mailService`
  }

  remove(id: number) {
    return `This action removes a #${id} mailService`
  }
}
