declare namespace Menu {
  interface MenuOptions {
    path: string
    title: string
    icon?: string
    isLink?: string
    close?: boolean
    children?: MenuOptions[]
  }
}

declare module 'buffer' {
  export { Buffer } from 'buffer/'
}
