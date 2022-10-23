import {createContext,useState} from 'react'

export const MusicContext = createContext()

const Context = ({children}) => {
    const [newRelease, setNewRelease] = useState([])
  return (
   <MusicContext.Provider value={{ newRelease, setNewRelease }}>{children}</MusicContext.Provider>
  )
}

export default Context
