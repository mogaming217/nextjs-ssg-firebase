interface PublicEnv {
  appEnv: string
  host: string
}

export const publicEnv: PublicEnv = {
  appEnv: process.env.APP_ENV!,
  host: process.env.PUBLIC_HOST!,
}
