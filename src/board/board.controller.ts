import { Controller, Get, Param } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {

  constructor(private boardService: BoardService){}
  
  @Get('/:id')
  async getAll(@Param('id') id: number): Promise<Board>{
    return await this.boardService.getBoardById(id)
  }


}
