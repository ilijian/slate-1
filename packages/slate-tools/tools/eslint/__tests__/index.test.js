jest.mock('child_process', () => ({execSync: jest.fn()}));

describe('eslint', () => {
  beforeEach(() => {
    execSync.mockClear();
  });

  it('executes the ESLint binary with no warnings allowed', async () => {});
});
