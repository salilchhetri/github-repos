import Repositories from './Repositories';

describe('Repositories', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Repositories repos='' />)

  })

  it('should render header correctly', () => {
    expect(wrapper.length).toEqual(1)
  });
});