import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Tags } from "./Tags";
import { Users } from "./Users";

@Entity('complements')
class Compliments {

    @PrimaryColumn()
    readonly id: string
    // -------------- USER SENDER ----------- //
    @Column()
    user_sender: number

    @JoinColumn({ name: 'user_sender' })
    @ManyToOne(() => Users)
    userSender: Users
    // -------------------------------------- //

    // ------------ USER RECEIVE ------------ //
    @Column()
    user_receiver: number

    @JoinColumn({ name: 'user_receiver' })
    @ManyToOne(() => Users)
    userReceiver: Users
    // -------------------------------------- //

    // ------------- TAGS ------------------ //
    @Column()
    tag_id: number // Por default ele so tras o id mais com a referencia do join ele tras todos os atributos

    @JoinColumn({ name: 'tag_id' })
    @ManyToOne(() => Tags)
    tag: Tags
    // -------------------------------------- //

    @Column()
    message: string

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) this.id = uuid()
    }

}

export { Compliments }