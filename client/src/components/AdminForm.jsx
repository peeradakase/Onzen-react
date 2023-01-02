import { useFormik } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import { apiUrl } from "../data/constant";

const AdminForm = (props) => {
  const { onFormSubmit, isLoading, formValue, mode } = props;
  const [avatarUrl, setAvatarUrl] = useState(null);

  const formik = useFormik({
    initialValues: {
      avatar: null,
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirmation: "",
      role: "admin",
    },
    validate: (value) => {
      const errors = {};

      if (mode === "create") {
        if (value.password.length < 4) {
          errors.password = true;
        }

        if (value.password !== value.passwordConfirmation) {
          errors.passwordConfirmation = true;
        }
      }

      return errors;
    },
    onSubmit: (values, { setErrors }) => {
      onFormSubmit(values, setErrors);
    },
    validateOnChange: false,
  });

  const previewImage = (file) => {
    if (file) {
      setAvatarUrl(URL.createObjectURL(file));
    }
  };

  const onAvatarInputChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("avatar", file);
    previewImage(file);
  };

  const updateFormValue = (value) => {
    if (!value) {
      return;
    }

    const { avatar, name, email, phoneNumber, role } = value;

    if (avatar) {
      const imageUrl = `${apiUrl}/${avatar}`;
      setAvatarUrl(imageUrl);
    }

    if (name) {
      formik.setFieldValue("name", name);
    }

    if (email) {
      formik.setFieldValue("email", email);
    }

    if (phoneNumber) {
      formik.setFieldValue("phoneNumber", phoneNumber);
    }

    if (role) {
      formik.setFieldValue("role", role);
    }
  };

  useEffect(() => {
    updateFormValue(formValue);
    // eslint-disable-next-line
  }, [formValue]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-6 mb-3">
          <label htmlFor="input-avatar" className="form-label">
            Avatar
          </label>
          <input
            type="file"
            className="form-control"
            id="input-avatar"
            onChange={onAvatarInputChange}
          />

          {avatarUrl && (
            <img src={`${avatarUrl}`} alt="avartar" className="max-width-80" />
          )}
        </div>
        <div className="col-6 mb-3">
          <label htmlFor="input-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="input-name"
            name="name"
            value={formik.values.name}
            placeholder="Name"
            onChange={formik.handleChange}
            required
          />
        </div>

        <div className="col-6 mb-3">
          <label htmlFor="input-email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="input-email"
            name="email"
            value={formik.values.email}
            placeholder="Email"
            onChange={formik.handleChange}
            required
          />
          {formik.errors.email && <p>{formik.errors.email}</p>}
        </div>
        <div className="col-6 mb-3">
          <label htmlFor="input-phone-number" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="input-phone-number"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            placeholder="Phone number"
            onChange={formik.handleChange}
          />
        </div>

        {mode === "create" && (
          <div className="col-6 mb-3">
            <label htmlFor="input-password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="input-password"
              name="password"
              value={formik.values.password}
              placeholder="Password"
              onChange={formik.handleChange}
            />
            {formik.errors.password && <p>Password more than 3 characters</p>}
          </div>
        )}

        {mode === "create" && (
          <div className="col-6 mb-3">
            <label htmlFor="input-confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="input-confirm-password"
              name="passwordConfirmation"
              value={formik.values.passwordConfirmation}
              placeholder="Password Confirmation"
              onChange={formik.handleChange}
            />
            {formik.errors.passwordConfirmation && (
              <p>Error Password not match</p>
            )}
          </div>
        )}

        <div className="col-6 mb-3">
          <label htmlFor="input-role" className="form-label">
            Role
          </label>
          <select
            className="form-select"
            aria-label="Role"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
          >
            <option value="admin">Admin</option>
            <option value="superAdmin">Super Admin</option>
          </select>
        </div>
      </div>

      <div>
        {isLoading ? (
          "Loading"
        ) : (
          <button className="btn btn-primary mb-3" type="submit">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default AdminForm;
