var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { PrimaryGeneratedColumn, Column, Entity, BaseEntity, } from "typeorm";
let Profile = class Profile extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Profile.prototype, "id", void 0);
__decorate([
    Column({ type: "text" }),
    __metadata("design:type", String)
], Profile.prototype, "fullName", void 0);
__decorate([
    Column({
        type: "varchar",
        length: 20,
        enum: ["Male", "Female", "Rather not say"],
    }),
    __metadata("design:type", String)
], Profile.prototype, "gender", void 0);
__decorate([
    Column({ type: "int" }),
    __metadata("design:type", Number)
], Profile.prototype, "age", void 0);
__decorate([
    Column({ type: "date" }),
    __metadata("design:type", Date)
], Profile.prototype, "dateOfBirth", void 0);
__decorate([
    Column({ type: "text" }),
    __metadata("design:type", String)
], Profile.prototype, "profilePicUrl", void 0);
Profile = __decorate([
    Entity("profile")
], Profile);
export default Profile;
