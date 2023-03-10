import React from 'react';
import logger from '../../utils/logger/logger';


class ErrorBoundary extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      hasError:false
    }
  }

  static getDerivedStateFromError(error){
    return {hasError:true};

  }

  componentDidCatch(error, info){
    console.log(error);
    console.log(info);
    logger.push({error, info});
  }
  
  render(){
    if(this.state.hasError){
      return( <h1>Error occured</h1>);
    }
    return this.props.children;

  }
}

export default ErrorBoundary;
