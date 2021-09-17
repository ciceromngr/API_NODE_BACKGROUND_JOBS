import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class compliments1631898701120 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'compliments',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'user_sender',
                        type: 'integer'
                    },
                    {
                        name: 'user_receiver',
                        type: 'integer'
                    },
                    {
                        name: 'message',
                        type: 'varchar'
                    },
                    {
                        name: 'tag_id',
                        type: 'integer'
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKUserSenderCompliments',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_sender'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKUserReceiverCompliments',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_receiver'],
                        onUpdate: 'SET NULL',
                        onDelete: 'SET NULL'
                    },
                    {
                        name: 'FKTagsCompliments',
                        referencedTableName: 'tags',
                        referencedColumnNames: ['id'],
                        columnNames: ['tag_id'],
                        onUpdate: 'SET NULL',
                        onDelete: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('compliments')
    }

}
