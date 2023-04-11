import {ProductsResponse} from "./model";

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
