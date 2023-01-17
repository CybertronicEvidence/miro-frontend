import React,{Component} from 'react';
import ErrorStates from './ErrorStates.jsx';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);

        this.state = {
            hasError: false
        };
    }


    static getDerivedStateFromError (error){
        // Update state so the next render will show the fallback UI
        return {
            hasError:true
        };
    }

    componentDidCatch(error, errorInfo){
        // You can also log the error tot a reporting service
        console.log(error, errorInfo);
    }

    render(){
        if(this.state.hasError){
            return (
                <ErrorStates code={500}/>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;