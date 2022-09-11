let mockContext = {
  misc: {
    theme: "Bright",
    fontSize: "8px",
  },
};

const getMockContext = () => {
  return mockContext;
};

export const setMockContext = (context) => {
  mockContext = { ...context };
};

export default getMockContext;
