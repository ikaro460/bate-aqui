import { toast } from "react-toastify";


/** Componente Toast
 * 
 * para utilizar os toast desse componente você deve inportar a função no lugar desejado e chamar a função 
 * e passar a mensagem que vc quer no toast como parametro
 * 
 * para utilixar o toast padrao chame a função "Toast"
 * 
 * para utilixar o toast de sucesso chame a função "ToastSuccess"
 * 
 * para utilixar o toast de error chame a função "ToastError"
 * 
 * para utilixar o toast de Aviso chame a função "ToastWarning"
 */

export const ToastSuccess = (
  message = "Voce deve inserir sua mensagem como parametro da função"
) => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const ToastError = (
  message = "Voce deve inserir sua mensagem como parametro da função"
) => {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const ToastWarning = (
  message = "Voce deve inserir sua mensagem como parametro da função"
) => {
  toast.warning(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const Toast = (
  message = "Voce deve inserir sua mensagem como parametro da função"
) => {
  toast(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
