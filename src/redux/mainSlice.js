import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async (url) => {
  const response = await axios.get(url);
  return response.data;
});

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async (url) => {
    const response = await axios.get(url);
    return response.data;
  }
);

const initialState = {
  product: [],
  category: [],
  loading: true,
  error: null,
  selectedCategory: "All",
  searchText: "",
  basket: [],
  totalAmount: 0,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSerachText: (state, action) => {
      state.searchText = action.payload;
    },
    addToBasket: (state, action) => {
      const productToAdd = action.payload;

      const existingProduct = state.basket.find(
        (item) => item.id === productToAdd.id
      );

      if (existingProduct) {
        existingProduct.count += 1;
        // Ürünün adedi arttıkça toplam fiyatını güncelle
        existingProduct.totalPrice += productToAdd.price;
      } else {
        state.basket = [
          ...state.basket, 
          { 
            ...productToAdd, 
            count: 1, 
            totalPrice: productToAdd.price // Yeni eklenen ürünün başlangıç fiyatı
          }
        ];
      }
      state.totalAmount = state.basket.reduce(
        (total, item) => total + item.totalPrice, 0
      );
    },
    incrementCount: (state, action) => {
      const productId = action.payload.id;
      const existingProduct = state.basket.find(
        (item) => item.id === productId
      );
      if (existingProduct) {
        existingProduct.count += 1;
        // Ürünün fiyatını her artışta güncelle
        existingProduct.totalPrice += existingProduct.price;
      }
      state.totalAmount = state.basket.reduce(
        (total, item) => total + item.totalPrice, 0
      );
    },
    decrementCount: (state, action) => {
      const productId = action.payload.id;
      const existingProduct = state.basket.find(
        (item) => item.id === productId
      );
      if (existingProduct && existingProduct.count > 1) {
        existingProduct.count -= 1;
        // Ürünün toplam fiyatını azalt
        existingProduct.totalPrice -= existingProduct.price;
      }
      state.totalAmount = state.basket.reduce(
        (total, item) => total + item.totalPrice, 0
      );
    },
    removeToBasket: (state, action) => {
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalAmount = state.basket.reduce(
        (total, item) => total + item.totalPrice, 0
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.products;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setSelectedCategory,
  setSerachText,
  addToBasket,
  incrementCount,
  decrementCount,
  removeToBasket,
} = mainSlice.actions;

export default mainSlice.reducer;