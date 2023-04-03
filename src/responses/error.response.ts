import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponse {
  @ApiProperty({
    example: 'error_at_server',
  })
  type: string;

  @ApiProperty({
    example: 'Hubo un error en el servidor',
  })
  message: string;
}
