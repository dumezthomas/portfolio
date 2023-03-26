import React from "react";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit } from "@fortawesome/free-solid-svg-icons";

import { Form, FormGroup, Label, Button } from "reactstrap";

const unpopulateProject = (project) => {
  if (JSON.stringify(project) === "{}") return "{}";

  const technologies = project.technologies.map((tech) => tech._id);
  return { ...project, technologies };
};

const ProjectForm = ({ initialData = {}, onSubmit, skills }) => {
  const unpopulatedInitialData = unpopulateProject(initialData);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: unpopulatedInitialData });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup className="form-floating">
        <input
          type="text"
          className="form-control"
          placeholder="My new project"
          aria-invalid={errors.project}
          {...register("project", { required: true, maxLength: 64 })}
        />
        <Label for="project">Project name</Label>
        {errors.project?.type === "required" && <p className="text-danger">Required</p>}
        {errors.project?.type === "maxLength" && <p className="text-danger">64 characters max</p>}
      </FormGroup>

      <FormGroup className="form-floating">
        <input
          type="text"
          className="form-control"
          placeholder="Mr. Smith"
          aria-invalid={errors.client}
          {...register("client", { required: true, maxLength: 32 })}
        />
        <Label for="client">Client</Label>
        {errors.client?.type === "required" && <p className="text-danger">Required</p>}
        {errors.client?.type === "maxLength" && <p className="text-danger">32 characters max</p>}
      </FormGroup>

      <FormGroup className="form-floating">
        <input
          type="text"
          className="form-control"
          placeholder="https://www.mywebsite.com"
          aria-invalid={errors.website}
          {...register("website", { maxLength: 128 })}
        />
        <Label for="website">Website</Label>
        {errors.website?.type === "maxLength" && <p className="text-danger">128 characters max</p>}
      </FormGroup>

      <FormGroup className="input-group">
        <span className="input-group-text">https://github.com/</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="myaccount/myrepositery"
            aria-invalid={errors.github}
            {...register("github", { maxLength: 128 })}
          />
          <Label for="github">GitHub repositery</Label>
          {errors.github?.type === "maxLength" && <p className="text-danger">128 characters max</p>}
        </div>
      </FormGroup>

      <FormGroup>
        <select className="form-select" size="5" multiple {...register("technologies")}>
          <option value="" disabled>
            Technologies used in this project
          </option>
          {skills.map((skill) => (
            <option key={skill._id} value={skill._id}>
              {skill.name}
            </option>
          ))}
        </select>
      </FormGroup>

      <FormGroup className="form-floating">
        <textarea
          className="form-control"
          style={{ height: "120px" }}
          placeholder="About this new project..."
          aria-invalid={errors.description}
          {...register("description", { required: true })}
        />
        <Label for="description">Project description</Label>
        {errors.description?.type === "required" && <p className="text-danger">Required</p>}
      </FormGroup>

      {JSON.stringify(initialData) === "{}" ? (
        <Button type="submit" color="success" size="lg">
          <FontAwesomeIcon icon={faAdd} className="me-2" />
          Add
        </Button>
      ) : (
        <Button type="submit" color="dark" size="lg">
          <FontAwesomeIcon icon={faEdit} className="me-2" />
          Edit
        </Button>
      )}
    </Form>
  );
};

export default ProjectForm;
