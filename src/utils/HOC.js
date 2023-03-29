import AuthErrorPage from "../components/401Error"

const EnhancedComponent = (WrappedComponent) => {
    return(()=> {
        const token = sessionStorage.getItem('accessToken')
        // if(token == null) {
        //    return <AuthErrorPage />
        // }
        return <WrappedComponent />
    })
}

export default EnhancedComponent

