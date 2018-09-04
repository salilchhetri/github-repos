import Header from './Header';

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)

  })

  it('should render header correctly', () => {
    expect(wrapper.length).toEqual(1)
  });
});