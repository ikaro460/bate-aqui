import { createContext, useState, useContext } from "react"


const OpenModalCheckoutContext = createContext()

export const OpenModalCheckoutProvider = ({children}) => {

  const [ modalCheckout, setModalCheckout ] = useState(false)

  const [ group, setGroup ]                 = useState("")

  const toggleModalCheckout = (comingGroup) => {
    setModalCheckout(!modalCheckout)
    setGroup(comingGroup)
  }

  return(
    <OpenModalCheckoutContext.Provider value={{ modalCheckout, toggleModalCheckout, group }} >
      {children}
    </OpenModalCheckoutContext.Provider>
  )

}

export const useOpenModalCheckout = () => useContext(OpenModalCheckoutContext)