import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from 'uuid'
@Entity('users')
class Users {
    
    @PrimaryColumn()
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    constructor() {
        if (!this.id) this.id = uuid()
    }

}

export { Users }