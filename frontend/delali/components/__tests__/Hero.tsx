import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../Hero";

test("Hero component renders correctly", () => {
  // Render the Hero component
  const { getByText, getByTestId } = render(<Hero />);

  // Test for specific elements or content within the component
  const fullStackExperienceText = getByText("A full Stack Experience");
  const frontendText = getByText("Frontend");
  const backendText = getByText("Backend");
  const uiuxText = getByText("UI/UX");
  const myPortfolioButton = getByText("My Portfolio");
  const contactMeButton = getByText("Contact me");

  // Assert that the expected elements are present in the component
  expect(fullStackExperienceText).toBeInTheDocument();
  expect(frontendText).toBeInTheDocument();
  expect(backendText).toBeInTheDocument();
  expect(uiuxText).toBeInTheDocument();
  expect(myPortfolioButton).toBeInTheDocument();
  expect(contactMeButton).toBeInTheDocument();

  // You can add more tests as needed to ensure your component behaves as expected.
});
