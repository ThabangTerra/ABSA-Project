import { Image } from 'src/app/shared/models/image.model';

export class Holiday {
  ID: string;
  Name: string;
  Description: string;
  Price: number;
  Images: Image[];
}
