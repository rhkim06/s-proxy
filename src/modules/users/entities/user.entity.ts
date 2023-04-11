import {
  Column,
  CreateDateColumn,
  Entity,
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
}
