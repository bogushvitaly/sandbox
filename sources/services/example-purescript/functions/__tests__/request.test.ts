import * as triggers from '../dist/lib/index';

it("sends a response", () => {
  const req = {};
  const res = {
    send: text => {
      expect(text).toBe("Hello from Purescript!");
    }
  };

  (triggers as any).helloWorld(req, res);
});
