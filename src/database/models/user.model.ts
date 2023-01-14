import { Column, DataType, Table } from 'sequelize-typescript';
import { BaseModel } from '../common/base.model';

@Table
export class User extends BaseModel {

    @Column(DataType.STRING)
    username: string;
}
