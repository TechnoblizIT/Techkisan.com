import {toast} from 'react-toastify';

export const showSucess=(message)=>{
    toast.success(message,{
        position:"top-left",
        autoClose:3000,
        hideProgressBar:false,
    })
};
export const showError=(message)=>{
    toast.error(message,{
        position:"top-left",
        autoClose:3000,
        hideProgressBar:false,
    })
}

export const showWarn=(message)=>{
    toast.warn(message,{
        position:"top-left",
        autoClose:3000,
        hideProgressBar:false,
    })
}

export const showInfo = (message) => {
    toast.info(message, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };