import { Button } from 'antd'
import { useNavigate } from 'react-router'

function SignIn() {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={() => navigate('/dashboard/dataVisualize')}>
        Login
      </Button>
    </div>
  )
}

export default SignIn
