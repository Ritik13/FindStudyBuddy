let  changeState = (result, state) => {
  
    if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          switch (result[i]) {
            case 'na':
              {   
                
  
                this.setState(prevState => ({
                  ...prevState,
                  errorArray: {
                    ...prevState.errorArray,
                    Errorname: true
                  }
                })
                ) //state
                console.log("n error", this.state.errorArray)
                break;
              }
            case 'em':
              {
  
                this.setState(prevState => ({
                  ...prevState,
                  errorArray: {
                    ...prevState.errorArray,
                    Erroremail: true
                  }
                })
                )
  
                console.log("e error", this.state.errorArray);
                break;
              }
            case 'pa':
              {
                this.setState(prevState => ({
                  ...prevState,
                  errorArray: {
                    ...prevState.errorArray,
                    Errorpassword: true
                  }
                })
                )
                console.log("p error", this.state.errorArray)
  
                break;
              }
            case 'ph':
              {
                this.setState(prevState => ({
                  ...prevState,
                  errorArray: {
                    ...prevState.errorArray,
                    Ephone: true
                  }
                })
                )
                console.log("ph error", this.state.errorArray)
  
                break;
              }
            default:
              break;
          }
  
        }
  
  
  
      }
  

}

export default changeState