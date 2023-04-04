import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany  } from "typeorm";

@Entity()
export class Like extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

}