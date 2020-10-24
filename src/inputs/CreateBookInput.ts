import { InputType, Field } from 'type-graphql';

@InputType()
class CreateBookInput {
  @Field()
  title: string;

  @Field()
  author: string;
}
export default CreateBookInput;
