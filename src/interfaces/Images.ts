export interface Images {
  id: string;
  created_at: string;
  user: User;
  urls: Urls;
}
type User = {
  bio: string;
  id: string;
  name: string;
  portfolio_url: string;
  total_photos: number;
};

type Urls = {
  raw: string;
  regular: string;
  small: string;
};
