import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    BaseEntity,
} from "typeorm";

@Entity("profile")
export default class Profile extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "text" })
    fullName: string;

    @Column({
        type: "varchar",
        length: 20,
        enum: ["Male", "Female", "Rather not say"],
    })
    gender: string;

    @Column({ type: "int" })
    age: number;

    @Column({ type: "date" })
    dateOfBirth: Date;

    @Column({ type: "text" })
    profilePicUrl: string;
}
