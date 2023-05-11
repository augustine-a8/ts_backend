import {
    PrimaryGeneratedColumn,
    Entity,
    BaseEntity,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";

import Profile from "./profile";

@Entity("user")
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    username: string;

    @Column({ type: "varchar", length: 120, nullable: false })
    email: string;

    @Column({ type: "text", nullable: false })
    password: string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;
}
