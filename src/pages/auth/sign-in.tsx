import { Button } from "antd";
import { useNavigate } from "react-router";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate("/dashboard/dataVisualize")}>
        Click me
      </Button>
    </div>
  );
};

export default SignIn;
