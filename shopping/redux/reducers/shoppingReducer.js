import * as ActionType from "../constants/ActionType";

let initialState = {
  listProduct: [],
  listColorSize: [],
  movie: {},
  userOne: {},
  cardProduct: [],
  login: [],
  successful: "",
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_PRODUCT:
      state.listProduct = action.listProduct;
      return { ...state };
    case ActionType.GET_USER_ONE:
      state.userOne = action.userOne;
      return { ...state };
    case ActionType.SUCCESSFUL:
      state.successful = action.successful;
      return { ...state };
    case ActionType.DELETEARR:
      state.login = [];
      return { ...state };
    case ActionType.LOGIN:
      let mang = [...state.login, action.login];
      state.login = mang;
      return { ...state };
    case ActionType.GET_LIST_COLOR_SIZE:
      state.listColorSize = action.listColorSize;
      return { ...state };
    case ActionType.BUY_PRODUCT:
      // state.cardProduct = [action.arrProduct, ...state.cardProduct];
      const objProduct = {
        id: action.arrProduct._id,
        name: action.arrProduct.productId.name,
        images: action.arrProduct.productId.images,
        price: action.arrProduct.productId.price,
        size: action.arrProduct.size,
        color: action.arrProduct.color,
        categoryId: action.arrProduct.productId.categoryId,
        soLuong: 1,
      };

      let index = state.cardProduct.findIndex(
        (item) => item.id === action.arrProduct._id
      );
      let mangGioHang = [...state.cardProduct];
      if (index !== -1) {
        mangGioHang[index].soLuong++;
      } else {
        mangGioHang = [...state.cardProduct, objProduct];
      }
      state.cardProduct = mangGioHang;
      return { ...state };

    case ActionType.MIN_MAX_PRODUCT:
      let timViTri = (id) => {
        return state.cardProduct.findIndex((item) => item.id === id);
      };

      let index2 = timViTri(action.minMaxProduct.id);
      if (index2 !== -1) {
        let mangGioHang = [...state.cardProduct];
        if (action.minMaxProductStatus == "max") {
          //Tang
          mangGioHang[index2].soLuong += 1;
        } else {
          //Giam
          if (mangGioHang[index2].soLuong > 1) {
            mangGioHang[index2].soLuong -= 1;
          } else {
            mangGioHang.splice(index2, 1);
            state.cardProduct = mangGioHang;
          }
        }

        state.cardProduct = mangGioHang;
      }
      return { ...state };
    case ActionType.DELETE_CARDPRODUCT:
      state.cardProduct = [];
      return { ...state };
    default:
      return { ...state };
  }
};

export default shoppingReducer;
