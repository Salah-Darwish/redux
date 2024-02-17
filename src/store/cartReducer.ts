import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem{
    id:number; 
    name:string; 
    qty:number; 
    sum:number; 
    price:number; 
}
interface CartState {
    items:CartItem[]; 
}

const initialState:CartState={
    items:[],
}

const cartSlice=createSlice({
    name:"cart", 
    initialState, 
    reducers:{
    //1-add item
    addItem: (state, action:PayloadAction<CartItem>) => {
        const isExist=state.items.find(item=>item.id==action.payload?.id)
        if(isExist){
isExist.sum +=action.payload?.price
isExist.qty +=1
        }
        else {
state.items.push({
    ...action.payload,
        sum:action.payload?.price,
        qty:1,
});
        }

        },
        //2-remove item
removeItem:(state, action: PayloadAction<CartItem>)=>{
       const isExist=state.items.find(item=>item.id==action.payload?.id);
       if(isExist && isExist.qty !=1  ){
isExist.sum -=action.payload?.price
isExist.qty -=1
       }else{
state.items=state.items.filter(item=>item.id!==action.payload.id)
       }
            

        }
        //3- clear cart
        
    },
});

export const {addItem,removeItem}=cartSlice.actions

export default cartSlice.reducer
