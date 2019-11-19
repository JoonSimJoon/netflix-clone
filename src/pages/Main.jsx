import React from "react";
import Banner from '../components/Banner';

class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <Banner ></Banner>
            </React.Fragment>
        )
    }
}

export default Main;