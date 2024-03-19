export interface IProduct {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  tags: string[];
  options: {
    id: string;
    name: string;
    values: string[];
  }[];
  collections: {
    nodes: { title: string }[];
  };
  priceRange: {
    maxVariantPrice: { amount: string; currencyCode: string };
    minVariantPrice: { amount: string; currencyCode: string };
  };
  featuredImage: {
    url: string;
    altText: string | null;
    width: number;
    height: number;
  };
  seo: {
    description: string | null;
    title: string | null;
  };
  updatedAt: string;
  images: {
    url: string;
    altText: string | null;
    width: number;
    height: number;
  }[];
  variants: IProductVariant[];
}

export interface IProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: { name: string; value: string }[];
  price: { amount: string; currencyCode: string };
}
