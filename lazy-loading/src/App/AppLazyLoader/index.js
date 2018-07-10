import lazy from '../../components/lazy'

export const HomePage = lazy(() =>
  import('../../pages/HomePage').then(module => module.default)
)

export const ProfilePage = lazy(() =>
  import('../../pages/ProfilePage').then(module => module.default)
)