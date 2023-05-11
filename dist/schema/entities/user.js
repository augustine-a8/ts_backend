var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PrimaryGeneratedColumn, Entity, BaseEntity, Column, OneToOne, JoinColumn, } from "typeorm";
import Profile from "./profile";
let User = class User extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", length: 50, nullable: false, unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    Column({ type: "varchar", length: 120, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column({ type: "text", nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    OneToOne(() => Profile),
    JoinColumn(),
    __metadata("design:type", Profile)
], User.prototype, "profile", void 0);
User = __decorate([
    Entity("user")
], User);
export default User;
