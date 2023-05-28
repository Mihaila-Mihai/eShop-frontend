import {Category, Product} from "../content/model";
import {ProductSize} from "../../cart/content/model";

export interface ProductInfo {
  displayName: string,
  price: number,
  stock: number
  details: ProductDetails
}

export interface ProductDetails {
  color: string,
  storageCapacity: string,
  brand: string,
  otherColors: string,
  rating: number
}

export interface ProductPostResponse {
  displayName: string,
  price: number,
  productId: number,
  stock: number
}

export interface ProductGetResponse {
  productId: number,
  displayName: string
  price: number
  stock: number
  details?: {
    productVariationId: number
    color?: string
    storageCapacity?: string
    brand?: string
    otherColors?: string
    rating?: number
  }

}

export interface ProductsState {
  product?: Product;
}

export interface ProductState {
  [key: number]: ProductsState;
}

export const productInitialState: ProductState = {
  1: {
    product: {
      id: 1,
      name: "TANK TOP DAILY PAPER REENA TOP",
      brand: "",
      price: 389,
      carousel: ["https://static.footshop.com/940120/254584.jpg", "https://static.footshop.com/940123/254584.jpg", "https://static.footshop.com/940126/254584.jpg"],
      color: "blue",
      details: [{
        first: true,
        title: "materials",
        content: [{
          title: "composition",
          content: "100% Organic cotton",
        },
          {
            title: "material",
            content: "jersey",
          }]
      }],
      sizeGuide: "",
      thumbnail: "https://static.footshop.com/940120/254584.jpg",
      categories: [Category.WOMEN, Category.TOP],
      size: ProductSize.S,
      sizes: [{
        size: ProductSize.S,
        id: 1,
        stock: 20
      }],
      variante: [{
        image: "https://static.footshop.com/940123/254584.jpg",
        id: "1"
      },
        {
          image: "https://static.footshop.com/940084/254581.jpg",
          id: "2"
        }]
    }
  },
  2: {
    product: {
      id: 2,
      name: "TANK TOP DAILY PAPER REENA TOP",
      brand: "",
      price: 389,
      carousel: ["https://static.footshop.com/940084/254581.jpg", "https://static.footshop.com/940087/254581.jpg", "https://static.footshop.com/940090/254581.jpg"],
      color: "white",
      details: [
        {
          first: true,
          title: "materials",
          content: [
            {
              title: "composition",
              content: "100% Organic cotton",
            },
            {
              title: "material",
              content: "jersey",
            },
            {
              title: "care instructions",
              content: `Do not dry in a dryer <br> Washable in a washing machine 30º <br> Do not use bleach <br> Don't clean chemically <br> Iron to lowest setting`
            }
          ]
        },
        {
          first: true,
          title: "details",
          content: [
            {
              title: "model height:",
              flex: true,
              content: "186cm"
            },
            {
              title: "wears size:",
              flex: true,
              content: "M"
            }
          ]
        }
      ],
      sizeGuide: "",
      thumbnail: "https://static.footshop.com/940084/254581.jpg",
      categories: [Category.WOMEN, Category.TOP],
      size: ProductSize.S,
      sizes: [{
        size: ProductSize.S,
        id: 2,
        stock: 20
      },
        {
          size: ProductSize.M,
          id: 3,
          stock: 10,
        }],
      variante: [{
        image: "https://static.footshop.com/940123/254584.jpg",
        id: "1"
      },
        {
          image: "https://static.footshop.com/940084/254581.jpg",
          id: "2"
        }]
    }
  },
  3: {
    product: {
      id: 3,
      name: "TANK TOP DAILY PAPER REENA TOP",
      brand: "",
      price: 389,
      carousel: ["https://static.footshop.com/940084/254581.jpg", "https://static.footshop.com/940087/254581.jpg", "https://static.footshop.com/940090/254581.jpg"],
      color: "white",
      details: [{
        title: "materials",
        first: true,
        content: [{
          title: "composition",
          content: "100% Organic cotton",
        },
          {
            title: "material",
            content: "jersey",
          }]
      }],
      sizeGuide: "",
      thumbnail: "https://static.footshop.com/940084/254581.jpg",
      categories: [Category.WOMEN, Category.TOP],
      size: ProductSize.M,
      sizes: [{
        size: ProductSize.S,
        id: 2,
        stock: 20
      },
        {
          size: ProductSize.M,
          id: 3,
          stock: 10,
        }],
      variante: [{
        image: "https://static.footshop.com/940123/254584.jpg",
        id: "1"
      },
        {
          image: "https://static.footshop.com/940084/254581.jpg",
          id: "2"
        }]
    }
  }
}
