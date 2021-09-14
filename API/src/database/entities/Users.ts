import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
@Entity('users')
class Users {
    
    @PrimaryColumn({
        generated: "increment" 
    })
    readonly id: number

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

}

export { Users }