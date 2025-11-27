export interface MenuItem {
  id: string;
  category: string;
  items: {
    name: string;
    price: string;
    description: string;
    image: string;
  }[];
}

export interface Story {
  id: number;
  image: string;
  text?: string;
  type: 'image' | 'quote';
  offset: number; // For parallax speed
}

export interface SignatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface MaterialTexture {
  id: string;
  name: string;
  description: string;
  image: string;
  detail: string;
}