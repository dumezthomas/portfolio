import React from "react";

import FormInput from "@/components/shared/FormInput";
import { Form, Button } from "reactstrap";

const PortfolioForm = () => {
  return (
    <Form>
      <FormInput label="Title" name="title" type="text" />
      <FormInput label="Company" name="company" type="text" />
      <FormInput label="Company Website" name="companyWebsite" type="url" />
      <FormInput label="Location" name="location" type="text" />
      <FormInput label="Job Title" name="jobTitle" type="text" />
      <FormInput label="Description" name="description" type="textarea" rows="5" />
      <FormInput label="Start Date" name="startDate" type="date" />
      <FormInput label="End Date" name="endDate" type="date" />

      <Button type="submit" color="primary">
        Create
      </Button>
    </Form>
  );
};

export default PortfolioForm;
