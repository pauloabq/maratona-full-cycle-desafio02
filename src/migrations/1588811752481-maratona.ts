import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class maratona1588811752481 implements MigrationInterface {
    private maratonaTable = new Table({
        name: 'maratona',
        columns: [
            {
                name: 'id',
                type: 'INTEGER',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'aula',
                type: 'varchar',
                length: '255',
                isNullable: false,
            }
        ]
    });
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.maratonaTable);        
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.maratonaTable);
    }

}
