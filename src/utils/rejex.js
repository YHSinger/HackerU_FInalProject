const rejex = new Map([
  ["EMAIL", /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/],
  ["PASSWORD", /^[A-Za-z0-9]{6,150}$/],
]);

const getRejex = (name) => {
  return rejex.get(name);
};

export default getRejex;
