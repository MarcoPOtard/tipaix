import { navItem } from './objects/navItem'
import { socialLink } from './objects/socialLink'
import { homePage } from './documents/homePage'
import { show } from './documents/show'
import { spectaclesPage } from './documents/spectaclesPage'
import { troupePage } from './documents/troupePage'
import { siteSettings } from './documents/siteSettings'

export const schemaTypes = [
  // Objects
  navItem,
  socialLink,
  // Singletons
  homePage,
  spectaclesPage,
  troupePage,
  siteSettings,
  // Regular documents
  show,
]
