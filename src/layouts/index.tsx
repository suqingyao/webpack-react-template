import { Layout } from 'antd'
import { Outlet } from 'react-router'
import { LayoutFooter } from './components/footer'
import { LayoutHeader } from './components/header'
import { LayoutMenu } from './components/menu'
import { LayoutTabs } from './components/tabs'

const { Sider, Content } = Layout

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
  height: '100%',
}

function LayoutIndex() {
  return (
    <Layout style={layoutStyle}>
      <Sider width="220">
        <LayoutMenu />
      </Sider>
      <Layout>
        <LayoutHeader />
        <LayoutTabs />
        <Content>
          <Outlet />
        </Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  )
}

export default LayoutIndex
