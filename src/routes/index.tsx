import { HomePage } from '../components/HomePage';

interface IRoutes {
  path: string;
  exact: boolean;
  name: string;
  component: any;
  isPrivateRoute: boolean;
}

export const routes: IRoutes[] = [
  {
    path: "/",
    name: "HomePage",
    exact: true,
    component: () => <HomePage />,
    isPrivateRoute: false,
  },
  {
    path: "/some-component",
    name: "SomeComponent",
    exact: true,
    component: () => <h1>This is some component</h1>,
    isPrivateRoute: false,
  },
];
