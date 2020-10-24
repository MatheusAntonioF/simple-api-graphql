import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import BookModel from '../models/Book';

import CreateBookInput from '../inputs/CreateBookInput';
import UpdateBookInput from '../inputs/UpdateBookInput';

@Resolver()
class BookResolver {
  @Query(() => [BookModel])
  books() {
    return BookModel.find();
  }

  @Query(() => BookModel)
  book(@Arg('id') id: string) {
    return BookModel.findOne({ where: { id } });
  }

  @Mutation(() => BookModel)
  async createBook(@Arg('data') data: CreateBookInput) {
    const book = BookModel.create(data);
    await book.save();
    return book;
  }

  @Mutation(() => BookModel)
  async updateBook(@Arg('id') id: string, @Arg('data') data: UpdateBookInput) {
    const book = await BookModel.findOne({ where: { id } });

    if (!book) throw new Error('Book not found');

    Object.assign(book, data);

    await book.save();

    return book;
  }

  @Mutation(() => Boolean)
  async deleleBook(@Arg('id') id: string) {
    const book = await BookModel.findOne({ where: { id } });

    if (!book) throw new Error('Book not found');

    const removed = await book.remove();

    return !!removed;
  }
}

export default BookResolver;
