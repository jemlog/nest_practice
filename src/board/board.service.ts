import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {


  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ){}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id)

    if(!found)
    {
      throw new NotFoundException()
    }

    return found;
  }
}
