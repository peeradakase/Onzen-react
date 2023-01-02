import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminForm from "../components/AdminForm";
import { apiUrl, requestHeaderFormData } from "../data/constant";

const CreateAdminPage = () => {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const navigate = useNavigate();

  const onCreateAdminRequest = async (adminData, setErrors) => {
    try {
      setIsFormLoading(true);
      await axios.post(
        `${apiUrl}/api/admin/teams`,
        adminData,
        requestHeaderFormData
      );
      alert('Success Created Admin');
      navigate('/admin/teams');
    } catch (error) {
      alert('Failed to Create new Admin');
      if (error.response?.data) {
        setErrors(error.response?.data)
      }
    } finally {
      setIsFormLoading(false);
    }
  }

  const onCreateAdminFormSubmit = async (formValue, setErrors) => {
    // Send formValue to Backend
    // Conwert data type
    // from
    // application/json
    // to
    // form-data

    const formData = new FormData();

    formData.append('avatar', formValue.avatar);
    formData.append('name', formValue.name);
    formData.append('email', formValue.email);
    formData.append('phoneNumber', formValue.phoneNumber);
    formData.append('password', formValue.password);
    formData.append('role', formValue.role);

    await onCreateAdminRequest(formData, setErrors);
  }

  return (
    <div className="container">
      <h1>Create Admin</h1>
      <AdminForm
        mode="create"
        onFormSubmit={onCreateAdminFormSubmit}
        isLoading={isFormLoading}
      />
    </div>
  )
}

export default CreateAdminPage;