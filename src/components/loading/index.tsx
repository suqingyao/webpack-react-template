import { Spin } from 'antd'

export function Loading({ tip = 'Loading' }: { tip?: string }) {
  return (
    <Spin
      size="large"
      tip={tip}
    />
  )
}
