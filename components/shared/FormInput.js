import React from "react";

import { FormGroup, Label, Input } from "reactstrap";

const FormInput = ({ label, name, type, ...props }) => {
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input name={name} type={type} id={name} {...props} />
    </FormGroup>
  );
};

export default FormInput;
