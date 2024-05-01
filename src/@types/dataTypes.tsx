export interface Game {
  _id: string;
  gameTitle: string;
  gameSubTitle: string;
  gameSlug: string;
  cardType: string;
  userId: string;
  files: GameFile[];
}

export interface GameFile {
  _id: string;
  destination: string;
  endCoding: string;
  fieldName: string;
  fileName: string;
  mimeType: string;
  originalName: string;
  path: string;
  size: number;
}
