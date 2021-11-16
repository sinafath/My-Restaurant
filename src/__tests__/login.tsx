import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Login from "../pages/login";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import { server, rest } from "../server/server";
import mockRouter from "../mock/router";
function setUpLogin() {
  render(<Login />);
  let Email = screen.getByLabelText(/email/i);
  let password = screen.getByLabelText(/password/i);
  let submit = screen.getByRole("button", { name: /submit/i });
  return { Email, password, submit };
}

test("renders form and allows the user to log in", async () => {
  const elements = setUpLogin();
  expect(elements.Email).toBeInTheDocument();
  expect(elements.password).toBeInTheDocument();
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
    rest.post("http://localhost/api/auth/login", async (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ message: testErrorMessage }));
    })
  );
  const elements = setUpLogin();
  userEvent.type(elements.Email, faker.internet.email());
  userEvent.type(elements.password, faker.internet.password());
  userEvent.click(elements.submit);
  expect(await screen.findByRole("alert")).toHaveTextContent(testErrorMessage);
});
