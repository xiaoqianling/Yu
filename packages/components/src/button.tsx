import React, { FC } from "react";

export const Button: FC = () => (
  <button type="button" onClick={() => alert(`the meaning of life is ${12}`)}>
    Click me
  </button>
);
