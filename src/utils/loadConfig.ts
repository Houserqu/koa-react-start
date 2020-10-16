import dotenv, { DotenvConfigOptions } from 'dotenv'

// 加载 .env 到环境变量
export function loadConfig(option?: DotenvConfigOptions): void {
  const res = dotenv.config(option)
  if (res.error) {
    throw res.error
  }
}