export interface Tech {
  id: string;
  name: string;
}
export interface Skill {
  id: string;
  title: string;
}
export interface Project {
  id: string;
  title: string;
}

export interface Thumb {
  __typename?: string;
  id: string;
  attributes: {
    url: string;
  };
}
export interface Tag {
  __typename?: string;
  id: string;
  attributes: {
    name: string;
    posts?: Post[];
  };
}

export interface Category {
  __typename?: string;
  id: string;
  attributes: {
    thumb?: Thumb;
    name: string;
    slug: string;
    posts?: Post[];
  };
}

export interface Post {
  __typename?: string;
  id: string;
  attributes: {
    slug: string;
    title: string;
    shortDescription: string;
    thumb: {
      data: Thumb;
    };
    body: string;
    updatedAt?: string;
    publishedAt?: string;
    category?: {
      data: Category;
    };
    tags?: {
      data: Tag[];
    };
  };
}
