import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createStore } from "../../redux/store";

describe("Counter()", () => {
  it("increment the counter value by 1 upon clicking on increment button", async () => {
    user.setup();
    render(
      <Provider store={createStore()}>
        <Counter />
      </Provider>
    );

    const counterValueEl = screen.getByText("0");
    const incrementButton = screen.getByText("Increment");

    await user.click(incrementButton);

    expect(counterValueEl).toHaveTextContent("1");
  });

  it("increment the counter value by 1 upon clicking on increment button", async () => {
    user.setup();
    render(
      <Provider store={createStore()}>
        <Counter />
      </Provider>
    );

    const counterValueEl = screen.getByText("0");
    const incrementButton = screen.getByText("Increment");

    await user.click(incrementButton);

    expect(counterValueEl).toHaveTextContent("1");
  });
});
