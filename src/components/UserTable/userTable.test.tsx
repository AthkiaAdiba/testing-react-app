import { render, screen, within } from "@testing-library/react";
import UserTable from "./UserTable";
import { users } from "../../App";

describe("UserTable()", () => {
  it("Should render the the table correctly", async () => {
    //const { container } = render(<UserTable users={users} />);

    render(<UserTable users={users} />);
    // logRoles(container);

    // screen.logTestingPlaygroundURL();

    //screen.debug();

    const rows = within(screen.getByTestId("users")).getAllByRole("row");

    // screen.debug();
    expect(rows).toHaveLength(3);
  });
});

// describe("UserTable()", () => {
//   it("Should render the welcome message after 5ms", async () => {
//     render(<UserTable users={users} />);

//     const welcomeMessageEl = await screen.findByTestId(
//       "welcome",
//       {},
//       { timeout: 2000 }
//     );

//     expect(welcomeMessageEl).toBeInTheDocument();
//   });
// });
