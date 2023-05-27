export interface CategoryPageRequestResponse {
  products: Product[],
  filterGroups: FilterGroup[]
}

export interface FilterGroup {
  filterGroupName: string,
  filterGroupCode: string,
  filters: Filter[],
  type: FilterType
}

export interface Filter {
  filterCode?: string,
  filterName?: string,
  filterValue?: string
}

export enum FilterType {
  "PRICE",
  "CHECKBOX",
  "COLOR"
}

export interface Product {
  image: string,
  diaplayName: string,
  price: number,
  productId: number,
  productCode: string,
  stockState: StockState
}

export enum StockState {
  "IN_STOCK",
  "OUT_OF_STOCK"
}
