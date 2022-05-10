import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Login from "../pages/account/login";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import { server, rest } from "../Server/server";
import mockRouter from "../mock/router";

const Email = screen.getByLabelText(/email/i),
  password = screen.getByLabelText(/password/i),
  submit = screen.getByRole("button", { name: /submit/i });

test("renders form and allows the user to log in", async () => {
  render(<Login />);
  expect(Email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
  userEvent.type(Email, faker.internet.email());
  userEvent.type(password, faker.internet.password());
  userEvent.click(submit);
  await waitFor(() =>
    expect(mockRouter.push).toHaveBeenCalledWith("./dashboard")
  );
});

test("shows server error if the request fails", async () => {
  let testErrorMessage = "password or email is not correct";
  server.use(
    rest.post("http://localhost/api/auth/login", async (_, res, ctx) => {
      return res(ctx.status(500), ctx.json({ message: testErrorMessage }));
    })
  );
  render(<Login />);
  userEvent.type(Email, faker.internet.email());
  userEvent.type(password, faker.internet.password());
  userEvent.click(submit);
  expect(await screen.findByRole("alert")).toHaveTextContent(testErrorMessage);
});
