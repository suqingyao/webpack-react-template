import type { FormProps } from 'antd'
import API from '@/api'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router'

interface FieldType {
  username: string
  password: string
}

function SignIn() {
  const [form] = Form.useForm<FieldType>()

  const navigate = useNavigate()

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.warn('Received values:', values)

    API.login({
      username: values.username,
      password: values.password,
    }).then((res) => {
      console.warn('登录成功', res)
      // 登录成功后跳转到首页
      navigate('/dashboard')
    })
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[800px] h-[500px] bg-[#EEE] rounded-lg p-10 shadow-sm">
        <h1 className="text-3xl font-bold mb-10">Sign In</h1>

        <div className="w-full">
          <Form
            name="login"
            form={form}
            onFinish={onFinish}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            style={{ maxWidth: 600, margin: '0 auto' }}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" className="w-full">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
