import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

export interface IFeed {
  url: string;
}

@Entity()
export class Feed {
  @ObjectIdColumn()
  public id!: ObjectID;

  @Column()
  public url!: string;
}