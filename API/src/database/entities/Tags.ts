import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity("tags")
class Tags {

    @PrimaryColumn({
        generated: 'increment'
    })
    readonly id: number

    @Column()
    name: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export { Tags }