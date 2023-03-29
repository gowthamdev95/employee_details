const AuthErrorPage = () => {
    return (
      <div className="errorPage" data-testid='401'>
        <h1>401</h1>
        <h2>Authorization Required</h2>
        <p>This page is not publically available, To access it please login!</p>
      </div>
    );
  };
  
  export default AuthErrorPage;