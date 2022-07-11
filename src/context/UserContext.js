import { createContext, useState, useEffect } from "react";

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={false}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContext