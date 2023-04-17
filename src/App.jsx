import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./component/Form/Form";
import News from "./component/News/News";
import Forgot from "./component/Forgot/Forgot";
import ForgotMobile from "./component/ForgotMobile/ForgotMobile";

function App() {
  return (
    <div className="background ">
      <div className="container-fluid ">
        <div className="row did">
          <div className="col-md-6 col-sm-6 col-xs-12 col-size">
            <Form />
            <ForgotMobile />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 col-size">
            <News />
          </div>
          <Forgot />
        </div>
      </div>
    </div>
  );
}

export default App;
