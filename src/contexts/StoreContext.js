import React, {createContext, useState} from 'react';
import initialStore from '../utils/initialStore.js';



// export the context so that other components can import
export const StoreContext = createContext(); 


function StoreContextProvider(props){
    const [store, setStore] = useState(initialStore);

    function addLike(contentId){
        const like = {
            userId: store.currentUserId, 
            contentId,
            datetime: new Date().toISOString()
        };
        setStore({
            ...store,
            likes: store.likes.concat(like)
        });
    }
        
    function removeLike(contentId){
        const newLikes = store.likes.filter(like=>!(like.userId===store.currentUserId && like.contentId===contentId));
        setStore({
            ...store,
            likes: newLikes
        });
    }
        
    function addComment(contentId, text){
        const comment = {
            userId: store.currentUserId, 
            contentId,
            text,
            datetime: new Date().toISOString()
        };
        setStore({
            ...store,
            comments:store.comments.concat(comment)
        });
    }

	return (
        <StoreContext.Provider value = {{...store, addComment, addLike, removeLike}}>
            {props.children}
        </StoreContext.Provider >
    ) 

}


export default StoreContextProvider; // export this component as default