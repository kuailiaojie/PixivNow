// Env
import { version } from '../package.json'
export { version } from '../package.json'
export const SITE_ENV =
  process.env.NODE_ENV === 'development' || version.includes('-')
    ? 'development'
    : 'production'

// Copyright links
// Do not modify please
export const GITHUB_OWNER = 'kuailiaojie'
export const GITHUB_REPO = 'PixivNow'
export const GITHUB_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`

// Site name
export const PROJECT_NAME = 'pixiv'
export const PROJECT_TAGLINE = 'Pixiv Service Proxy '

// Image proxy cache seconds
export const IMAGE_CACHE_SECONDS = 12 * 60 * 60 * 1000
