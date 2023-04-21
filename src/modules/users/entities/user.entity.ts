import { SmsMan } from 'src/modules/sms-man/entities/sms-man.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 25, unique: true })
  name: string

  @Column({ length: 25 })
  password: string

  @Column({ length: 25 })
  proxyId: string

  @Column({ length: 25 })
  proxyPwd: string

  @OneToMany((type) => SmsMan, (smsMan) => smsMan.user)
  smsMan: SmsMan
}
