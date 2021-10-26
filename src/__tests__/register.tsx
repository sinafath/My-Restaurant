import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Register from "../pages/register";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import { server, rest } from "../server/server";
import mockRouter from "../mock/router";
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(() => mockRouter), 
}));

function setUpLogin() {
  render(<Register />);
  let username = screen.getByLabelText(/username/i);
  let Email = screen.getByLabelText(/email/i);
  let password = screen.getByLabelText(/password/i);
  let confirm = screen.getByLabelText(/confirm/i);
  let submit = screen.getByRole("button", { name: /submit/i });
  return { username, Email, password, confirm, submit };
}

test("renders form and allows the user to log in", async () => {
  const elements = setUpLogin();
  expect(elements.username).toBeInTheDocument();
  expect(elements.Email).toBeInTheDocument();
  expect(elements.password).toBeInTheDocument();
  expect(elements.confirm).toBeInTheDocument();
  expect(elements.submit).toBeInTheDocument();
  
  userEvent.type(elements.Email, faker.internet.email());
  userEvent.type(elements.password, faker.internet.password());
  userEvent.click(elements.submit);
  await waitFor(() =>
    expect(mockRouter.push).toHaveBeenCalledWith("./dashboard")
  );
});

test("shows server error if the request fails", async () => {
  let testErrorMessage = "password or email is not correct";
  server.use(
    rest.post("http://localhost/api/register", async (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ message: testErrorMessage }));
    })
  );
  const elements = setUpLogin();
  let fakePassword= faker.internet.password()
  userEvent.type(elements.username, faker.internet.userName());
  userEvent.type(elements.Email, faker.internet.email());
  userEvent.type(elements.password, fakePassword);
  userEvent.type(elements.confirm, fakePassword);
  userEvent.click(elements.submit);
  expect(await screen.findByRole("alert")).toHaveTextContent(testErrorMessage);
});
