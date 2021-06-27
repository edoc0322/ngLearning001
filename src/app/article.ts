
export interface Articles {
  articles:      Article[];
  articlesCount: number;
}

export interface Article {
  title:          string;
  slug:           string;
  body:           string;
  createdAt:      Date;
  updatedAt:      Date;
  tagList:        TagList[];
  description:    string;
  author:         Author;
  favorited:      boolean;
  favoritesCount: number;
}

interface Author {
  username:  string;
  bio:       Bio | null;
  image:     string;
  following: boolean;
}

export enum Bio {
  MakingCypressTests = "Making cypress tests",
}

export enum TagList {
  Ds = "ds",
  Test = "test",
  Xxx = "xxx",
}
