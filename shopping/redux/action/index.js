import * as ActionType from "./../constants/ActionType";
import Axios from "axios";
import * as ur from "./../../app/url"
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";



export const actGetListProductAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
      `${ur.url}/product/`
    })
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_PRODUCT,
          listProduct: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actBuyProduct = (product) => {
  return {
      type: ActionType.BUY_PRODUCT,
      arrProduct:product
  };
};
export const actMinMaxProduct = (_MinMaxProduct,_MinMaxProductStatus) => {
  return {
      type: ActionType.MIN_MAX_PRODUCT,
      minMaxProduct:_MinMaxProduct,
      minMaxProductStatus:_MinMaxProductStatus,
  };
};

export const postProduct = (item) => {
  return dispatch => {
    Axios({
      method: "POST",
      url:`${ur.url}/don-hang`,
      data: item,
    })
    .then(result => {
      console.log(result.data);
    })
    .catch(err => {
      console.log(err.response.data);
    });
  };
};

// export const actGetListProductAPI2 = () => {
//   return dispatch => {
//     Axios({
//       method: "GET",
//       url:
//         "http://192.168.1.194:5000/product/"
//     })
//       .then(result => {
//         console.log(result.data)
//         dispatch({
//           type: ActionType.GET_LIST_PRODUCT,
//           listProduct: result.data
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// };

export const actDetailColorSize = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
      `${ur.url}/color-size/`
    })
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_COLOR_SIZE,
          listColorSize: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actLoginAdmin = (user) => {
  // const navigation = useNavigation();
  return dispatch => {
    Axios({
      method: "POST",
      url: `${ur.url}/user/login`,
      data: user
    })
      .then(result => {
        dispatch({
          type: ActionType.LOGIN,
          login: result.data
        });
      
      })
      .catch(err => {
        alert("Bạn đã sai tài khoản hoặc mật khẩu");
        console.log(err.response.data);
      });
  };
};


export const actDeleteArr = () => {
  return {
      type: ActionType.DELETEARR,
  };
};

export const actDeleteCardProduct = () => {
  return {
      type: ActionType.DELETE_CARDPRODUCT,
  };
};

export const actSuccessful = (data) => {
  return {
      type: ActionType.SUCCESSFUL,
      successful:data

  };
};


export const actPatchUser = (item,id) => {
  return dispatch => {
    Axios({
      method: "PATCH",
      url:`${ur.url}/user/${id}`,
      data: item,
    })
    .then(result => {
      console.log(result.data);
    })
    .catch(err => {
      console.log(err.response.data);
    });
  };
};

export const actGetUserOne = (id) => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
      `${ur.url}/user/${id}`
    })
      .then(result => {
        dispatch({
          type: ActionType.GET_USER_ONE,
          userOne: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};






