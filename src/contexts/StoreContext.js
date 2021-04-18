import React, {createContext, useState, useEffect} from 'react';
import initialStore from '/Users/seanc/csci3366/enviornmental-racism/src/utils/initialStore.js';



// export the context so that other components can import
export const StoreContext = createContext(); 


function StoreContextProvider(props){
    const [store, setStore] = useState(()=>{
        return JSON.parse(window.localStorage.getItem('store')) || initialStore;
    });
    useEffect(()=>{
        window.localStorage.setItem('store', JSON.stringify(store));
    }, [store]);
	return (
        <StoreContext.Provider value = {{...store}}>
            {props.children}
        </StoreContext.Provider >
    ) 

}


export default StoreContextProvider; // export this component as default