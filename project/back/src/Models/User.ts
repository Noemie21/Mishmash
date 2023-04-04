import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany  } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    //@OneToMany(() => Command, command => command.id)
    //commands: Command[];
}