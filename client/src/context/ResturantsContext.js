import React, {useState, createContext} from "react";

export const ResturantContext = createContext();

export const ResturantContextProvider = props => {
    const [resturants, setResturants] = useState([])

    return (
        <ResturantContext.Provider value={{resturants, setResturants}}>
            {props.children}
        </ResturantContext.Provider>
    );
};