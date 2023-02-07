import React from "react";
import { useForm } from "react-hook-form";

import { Form, FormGroup, Label, Button } from "reactstrap";

const ProjectForm = ({ initialData = {}, onSubmit }) => {
  const { register, handleSubmit } = useForm({ defaultValues: initialData });
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="project">Project</Label>
        <input id="project" type="text" className="form-control" {...register("project")} />
      </FormGroup>

      <FormGroup>
        <Label for="client">Client</Label>
        <input id="client" type="text" className="form-control" {...register("client")} />
      </FormGroup>

      <FormGroup>
        <Label for="website">Website</Label>
        <input id="website" type="url" className="form-control" {...register("website")} />
      </FormGroup>

      <FormGroup>
        <Label for="github">GitHub</Label>
        <input id="github" type="url" className="form-control" {...register("github")} />
      </FormGroup>

      <FormGroup>
        <Label for="technologies">Technologies</Label>
        <input
          id="technologies"
          type="text"
          className="form-control"
          {...register("technologies")}
        />
      </FormGroup>

      <FormGroup>
        <Label for="description">Description</Label>
        <textarea id="description" rows="5" className="form-control" {...register("description")} />
      </FormGroup>

      <Button type="submit" color="primary">
        {JSON.stringify(initialData) === "{}" ? "Create" : "Update"}
      </Button>
    </Form>
  );
};

export default ProjectForm;
