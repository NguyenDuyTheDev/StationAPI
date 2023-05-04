import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export interface PostModel {
    id?: number;
    date: Date;
    bikeID: number;
    rentingTime: number;
    total: number;
  }

  export class PostModel {
    @ApiPropertyOptional({ type: Number })
    id?: number;
    @ApiProperty({ type: String, format: 'date-time' })
    date: Date;
    @ApiProperty({ type: Number })
    bikeID: number;
    @ApiProperty({ type: Number })
    rentingTime: number;
    @ApiProperty({ type: Number })
    total: number;
  }