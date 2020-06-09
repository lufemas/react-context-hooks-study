import React, { Component } from "react"
import {ThemeContext} from '../contexts/ThemeContext'

class ToggleTheme extends Component{

    render(){
        return (
            <ThemeContext.Consumer>{(context)=>{
                
                
                return (

                    <button onClick={context.toggleTheme}>Toggle Theme</button>
                )
            }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default ToggleTheme