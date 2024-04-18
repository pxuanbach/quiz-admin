import { CategoryType } from '../categoriesList';

export interface Component {
  name: string;
  title: string;
  url: string;
  categories: CategoryType[];
  keywords: string[];
}

// TODO review and come up with a better approach for urls
// maybe we need to have enum with all routes like we had before?

// TODO change urls according to new dashboard routes and add new NFT components
export const components: Component[] = [
  {
    name: 'Log in',
    title: 'common.login',
    url: `/auth/login`,
    categories: ['auth'],
    keywords: ['auth', 'log in', 'login'],
  },
  {
    name: 'Sign up',
    title: 'common.signup',
    url: `/auth/sign-up`,
    categories: ['auth'],
    keywords: ['auth', 'sign up', 'signup'],
  },
  {
    name: 'Lock',
    title: 'common.lock',
    url: `/auth/lock`,
    categories: ['auth'],
    keywords: ['auth', 'lock'],
  },
  {
    name: 'Forgot password',
    title: 'common.forgotPass',
    url: `/auth/forgot-password`,
    categories: ['auth'],
    keywords: ['auth', 'forgot password'],
  },
  {
    name: 'Security code',
    title: 'common.securityCode',
    url: `/auth/security-code`,
    categories: ['auth'],
    keywords: ['auth', 'security code'],
  },
  {
    name: 'New password',
    title: 'common.newPassword',
    url: `/auth/new-password`,
    categories: ['auth'],
    keywords: ['auth', 'new password'],
  },
];
