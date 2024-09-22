interface Specifications {
    processor?: string;
    graphics?: string;
    storage?: string;
    resolution?: string;
    maxFrameRate?: string;
    type?: string;
    gender?: string;
    color?: string;
    size?: string;
  }
  
  interface Product {
    productName: string;
    manufacturer: string;
    price: number;
    quantity: number;
    category: string;
    imageUrls: string[];
    specifications: Specifications;
    includedItems?: string[];
    availableColors: string[];
  }