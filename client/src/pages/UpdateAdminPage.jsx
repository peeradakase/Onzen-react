import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AdminForm from "../components/AdminForm";
import { apiUrl, requestHeader, requestHeaderFormData } from "../data/constant";

const UpdateAdminPage = () => {
  let { id } = useParams();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [admin, setAdmin] = useState(null);

  const getAdminData = async (id) => {
    try {
      const { data } = await axios.get(`${apiUrl}/api/admin/teams/${id}`);
      setAdmin(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdminData(id);
  }, [id]);

  const onUpdateAdminRequest = async (adminData, isFormData, setErrors) => {
    try {
      setIsFormLoading(true);
      await axios.put(
        `${apiUrl}/api/admin/teams/${id}`,
        adminData,
        isFormData ? requestHeaderFormData : requestHeader
      );
      alert("Success Update Admin");
    } catch (error) {
      alert("Failed to Update Admin");
      if (error.response?.data) {
        setErrors(error.response?.data);
      }
      console.log(error.response);
    } finally {
      setIsFormLoading(false);
    }
  };

  const onUpdateAdminFormSubmit = async (formValue, setErrors) => {
    const { avatar, name, email, phoneNumber, role } = formValue;
    // if has avatar update, then send as form data
    if (avatar) {
      // Send formValue to Backend
      // Conwert data type
      // from
      // application/json
      // to
      // form-data

      const formData = new FormData();

      formData.append("avatar", avatar);

      if (name) {
        formData.append("name", name);
      }

      if (email) {
        formData.append("email", email);
      }

      if (phoneNumber) {
        formData.append("phoneNumber", phoneNumber);
      }

      if (role) {
        formData.append("role", role);
      }

      await onUpdateAdminRequest(formData, true, setErrors);
    } else {
      // if No avatar update, then send as json
      const data = {};

      if (name) {
        data.name = name;
      }

      if (email) {
        data.email = email;
      }

      if (phoneNumber) {
        data.phoneNumber = phoneNumber;
      }

      if (role) {
        data.role = role;
      }

      await onUpdateAdminRequest(data, false, setErrors);
    }
  };

  return (
    <div>
      <h1>Update Admin Page</h1>
      {admin && (
        <AdminForm
          mode="update"
          formValue={admin}
          onFormSubmit={onUpdateAdminFormSubmit}
          isLoading={isFormLoading}
        />
      )}
    </div>
  );
};

export default UpdateAdminPage;
