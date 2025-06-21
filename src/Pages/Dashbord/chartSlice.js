import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userByDevice: [],
  userByLocation: [],
  totalSpend: [],
  purchaseVolume: [],
  payment: [],
  itemPurchase: [],
};

const chartSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    setUserByDevice: (state, action) => { state.userByDevice = action.payload; },
    setUserByLocation: (state, action) => { state.userByLocation = action.payload; },
    setTotalSpend: (state, action) => { state.totalSpend = action.payload; },
    setPurchaseVolume: (state, action) => { state.purchaseVolume = action.payload; },
    setPayment: (state, action) => { state.payment = action.payload; },
    setItemPurchase: (state, action) => { state.itemPurchase = action.payload; },
  },
});

export const {
  setUserByDevice,
  setUserByLocation,
  setTotalSpend,
  setPurchaseVolume,
  setPayment,
  setItemPurchase,
} = chartSlice.actions;

export default chartSlice.reducer;