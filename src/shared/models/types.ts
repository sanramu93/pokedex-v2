export interface Types {
  name: string;
  url: string;
}

export interface TypesRes {
  count: number;
  next: null,
  previous: null,
  results: Types[];
}

export interface TypeTags {
    text: string;
    color: string;
    iconPath: string;
}