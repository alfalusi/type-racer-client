import React from "react";

const token = localStorage.getItem('token');

export const FetchHook = async ( api, method, data ) => {
    
    const response = await fetch('http://192.168.100.121:3001' + api, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

    return response;
}

export const FetchHookAuth = async ( api, method, data ) => {
    
    const response = await fetch('http://192.168.100.121:3001' + api, {
            method: method,
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            },
            body: data
        });

    return response;
}
