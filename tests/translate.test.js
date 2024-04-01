import { toMorse, toText } from "./translate";

describe("toMorse", () => {
  it("Should translate text to morse code.", () => {
    expect(toMorse("HELLO, WORLD!")).toBe(
      ".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--"
    );
  });

  it("Should ignore invalid characters", () => {
    expect(toMorse("HELLO, {}WORLD!")).toBe(
      ".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--"
    );
  });
});

describe("toText", () => {
  it("Should translate morse code to text", () => {
    expect(toText(".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--")).toBe(
      "HELLO, WORLD!"
    );
  });

  it("Should ignore invalid characters", () => {
    expect(toText(".... . .-.. .-.. --- --..-- a / ...... .-- --- .-. .-.. -.. -.-.--")).toBe(
      "HELLO, WORLD!"
    );
  });
});
