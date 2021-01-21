import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'
//SpacificComponent: wrap page, 
//option:null=anywhere,
           //true=login user,
          //false=none login
//adminRoute:admin user(true, null) 
export default function (SpacificComponent, option, adminRoute = null) {
    
    function AuthenticationCheck(props) {
        //Backend status callback

        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response)

                //none login status
                if(!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login')
                    }
                } else {
                    //login status
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    } else {
                        if(option === false) {
                            props.history.push('/')
                        }
                    }
                }
            })
        }, [])
        return (
                <SpacificComponent />
        )
    }
    return AuthenticationCheck
}