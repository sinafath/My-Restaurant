const mockRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};
const useRouter = jest.spyOn(require("next/router"), "useRouter");
useRouter.mockReturnValue(mockRouter);

export default mockRouter;
const input = {
  ...document.createElement("input"),
  value: "name",
  type: "text",
};
