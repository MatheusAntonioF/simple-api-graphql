import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
class BookModel extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  author: string;

  @Field(() => Boolean)
  @Column({ default: false })
  isPublished: boolean;
}

export default BookModel;
