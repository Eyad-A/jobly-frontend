import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
    username: "demouser",
    first_name: "demouser",
    last_name: "demouser",
    email: "demouser@demouser.com",
    photo_url: null,
};

const UserProvider = ({
    children, currentUser = demoUser, hasAppliedToJob = () => false 
}) => (
    <UserContext.Provider value={{ currentUser, hasAppliedToJob }}>
        {children}
    </UserContext.Provider>
);

export { UserProvider};