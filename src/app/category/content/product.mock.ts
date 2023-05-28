import {ProductsResponse} from "../store/category.state";
import {CategoryPageRequestResponse, FilterGroup, FilterType, Product, StockState} from "./model";


export const ProductMock: ProductsResponse = {
  _embedded: {
    productModels: [
      {
        productId: 1,
        displayName: 'Iphone',
        price: 20.00,
        stock: 10,
        variations: [
          {
            color: 'blue',
            storageCapacity: '20GB'
          }
        ]
      },
      {
        productId: 2,
        displayName: 'Iphone',
        price: 20.00,
        stock: 10,
        variations: [
          {
            color: 'blue',
            storageCapacity: '20GB'
          }
        ]
      },
      {
        productId: 3,
        displayName: 'Iphone',
        price: 20.00,
        stock: 10,
        variations: [
          {
            color: 'blue',
            storageCapacity: '20GB'
          }
        ]
      },
      {
        productId: 4,
        displayName: 'Iphone',
        price: 20.00,
        stock: 10,
        variations: [
          {
            color: 'blue',
            storageCapacity: '20GB'
          }
        ]
      }
    ]
  },
  _links: {
    first: {
      href: 'ref'
    },
    next: {
      href: 'ref',
    },
    last: {
      href: 'ref',
    },
    self: {
      href: 'ref'
    }
  },
  page: {
    number: 0,
    size: 1,
    totalPages: 1,
    totalElements: 1
  }
}

export const FILTERGROUPS: FilterGroup[] = [
  {
    filterGroupCode: "brand",
    filterGroupName: "brand",
    type: FilterType.CHECKBOX,
    filters: [
      {
        filterCode: "ellesse",
        filterName: "Ellesse",
      },
      {
        filterCode: "adidas",
        filterName: "Adidas",
      }
    ]
  },
  {
    filterGroupCode: "price",
    filterGroupName: "price",
    type: FilterType.PRICE,
    filters: [
      {
        filterValue: "75",
      },
      {
        filterValue: "250"
      }
    ]
  },
  {
    filterGroupCode: "color",
    filterGroupName: "color",
    type: FilterType.COLOR,
    filters: [
      {
        filterCode: "black",
        filterName: "black",
      },
      {
        filterCode: "white",
        filterName: "white",
      },
      {
        filterCode: "green",
        filterName: "green",
      },
      {
        filterCode: "red",
        filterName: "red",
      },
      {
        filterCode: "blue",
        filterName: "blue",
      }
    ]
  },
  {
    filterGroupCode: "categories",
    filterGroupName: "categories",
    type: FilterType.CHECKBOX,
    filters: [
      {
        filterCode: "dresses",
        filterName: "dresses",
      },
      {
        filterCode: "hoodies",
        filterName: "hoodies",
      },
      {
        filterCode: "jackets",
        filterName: "jackets",
      },
      {
        filterCode: "Jeans & Trousers",
        filterName: "Jeans & Trousers",
      },
      {
        filterCode: "Tops",
        filterName: "Tops",
      },
      {
        filterCode: "T-shirts",
        filterName: "T-shirts",
      }
    ]
  },
];

export const PRODUCTS: Product[] = [
  {
    productId: 1,
    price: 1200,
    productCode: "CODE-1",
    diaplayName: "Jacket Ellesse Montellio Jacket",
    image: "https://static.footshop.com/931018-full_product/264595.jpg",
    stockState: StockState.IN_STOCK
  },
  {
    productId: 1,
    price: 1200,
    productCode: "CODE-1",
    diaplayName: "Jacket Ellesse Montellio Jacket",
    image: "https://static.footshop.com/931018-full_product/264595.jpg",
    stockState: StockState.IN_STOCK
  },
  {
    productId: 1,
    price: 1200,
    productCode: "CODE-1",
    diaplayName: "Jacket Ellesse Montellio Jacket",
    image: "https://static.footshop.com/931018-full_product/264595.jpg",
    stockState: StockState.IN_STOCK
  },
  {
    productId: 1,
    price: 1200,
    productCode: "CODE-1",
    diaplayName: "Jacket Ellesse Montellio Jacket",
    image: "https://static.footshop.com/931018-full_product/264595.jpg",
    stockState: StockState.IN_STOCK
  },
  {
    productId: 1,
    price: 1200,
    productCode: "CODE-1",
    diaplayName: "Jacket Ellesse Montellio Jacket",
    image: "https://static.footshop.com/931018-full_product/264595.jpg",
    stockState: StockState.IN_STOCK
  },
  {
    productId: 1,
    price: 1200,
    productCode: "CODE-1",
    diaplayName: "Jacket Ellesse Montellio Jacket",
    image: "https://static.footshop.com/931018-full_product/264595.jpg",
    stockState: StockState.IN_STOCK
  },
  {
    productId: 1,
    price: 1200,
    productCode: "CODE-1",
    diaplayName: "Jacket Ellesse Montellio Jacket",
    image: "https://static.footshop.com/931018-full_product/264595.jpg",
    stockState: StockState.IN_STOCK
  },
  {
    productId: 1,
    price: 1200,
    productCode: "CODE-1",
    diaplayName: "Jacket Ellesse Montellio Jacket",
    image: "https://static.footshop.com/931018-full_product/264595.jpg",
    stockState: StockState.IN_STOCK
  },
  {
    productId: 1,
    price: 1200,
    productCode: "CODE-1",
    diaplayName: "Jacket Ellesse Montellio Jacket",
    image: "https://static.footshop.com/931018-full_product/264595.jpg",
    stockState: StockState.IN_STOCK
  },
  {
    productId: 1,
    price: 1200,
    productCode: "CODE-1",
    diaplayName: "Jacket Ellesse Montellio Jacket",
    image: "https://static.footshop.com/931018-full_product/264595.jpg",
    stockState: StockState.IN_STOCK
  },
];

export const CATEGORY_RESPONSE: CategoryPageRequestResponse = {
  products: PRODUCTS,
  filterGroups: FILTERGROUPS
};
