import React from "react";

import { FormGroup, Label, Input } from "reactstrap";

const FormInput = ({ label, name, ...props }) => {
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input id={name} name={name} {...props} />
    </FormGroup>
  );
};

export default FormInput;
