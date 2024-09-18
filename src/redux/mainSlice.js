import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
export const fetchStorgeFavorites = createAsyncThunk(
  "Favorite/fetchStorgeFavorites",
  async () => {
    const response = await AsyncStorage.getItem("Favorites");
    return response;
  }
);
export const fetchStorgeBasket = createAsyncThunk(
  "Basket/fetchStorgeBasket",
  async () => {
    const response = await AsyncStorage.getItem("Basket");
    return response;
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
  favorite:[],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    addToBasket: (state, action) => {
      const productToAdd = action.payload;

      const existingProduct = state.basket.find(
        (item) => item.id === productToAdd.id
      );

      if (existingProduct) {
        existingProduct.count += 1;
        existingProduct.totalPrice += productToAdd.price;
      } else {
        state.basket = [
          ...state.basket, 
          { 
            ...productToAdd, 
            count: 1, 
            totalPrice: productToAdd.price 
          }
        ];
      }
      state.totalAmount = state.basket.reduce(
        (total, item) => total + item.totalPrice, 0
      );
      AsyncStorage.setItem("Basket", JSON.stringify(state.basket))
    },
    incrementCount: (state, action) => {
      const productId = action.payload.id;
      const existingProduct = state.basket.find(
        (item) => item.id === productId
      );
      if (existingProduct) {
        existingProduct.count += 1;
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
    allRemoveToBasket: (state)=>{
      state.basket = []
      AsyncStorage.removeItem("Basket")
    },
    setFavorite:(state, action)=>{
      const data = action.payload
      
      if(state.favorite.some(item=>item.id === data.id)){
        state.favorite = state.favorite.filter((item)=>item.id !== data.id)
      }else{
        state.favorite.push(data)
      }
      AsyncStorage.setItem("Favorites", JSON.stringify(state.favorite))
    },
    removeToFavorite:(state, action)=>{
      state.favorite = state.favorite.filter(item=>item.id !== action.payload.id)
      AsyncStorage.setItem("Favorites", JSON.stringify(state.favorite))
    }
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
      })
      .addCase(fetchStorgeFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStorgeFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.favorite = action.payload ? JSON.parse(action.payload) : []
      })
      .addCase(fetchStorgeFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchStorgeBasket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStorgeBasket.fulfilled, (state, action) => {
        state.loading = false;
        state.basket = action.payload ? JSON.parse(action.payload) : []
      })
      .addCase(fetchStorgeBasket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setSelectedCategory,
  setSearchText,
  addToBasket,
  incrementCount,
  decrementCount,
  removeToBasket,
  setFavorite,
  removeToFavorite,
  allRemoveToBasket,
} = mainSlice.actions;

export default mainSlice.reducer;