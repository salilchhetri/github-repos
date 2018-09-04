import Form from './Form';

it("renders correctly", () => {
  const wrapper = shallow(
    <Form setCurrentUser={() => { }} />
  );
  expect(wrapper).toMatchSnapshot();
});