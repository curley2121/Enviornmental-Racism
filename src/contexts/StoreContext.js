import React, {createContext, useState, useEffect} from 'react';
import initialStore from '../utils/initialStore.js';



// export the context so that other components can import
export const StoreContext = createContext(); 


function StoreContextProvider(props){
    const [store, setStore] = useState(initialStore);
	return (
        <StoreContext.Provider value = {{...store}}>
            {props.children}
        </StoreContext.Provider >
    ) 

}


export default StoreContextProvider; // export this component as default