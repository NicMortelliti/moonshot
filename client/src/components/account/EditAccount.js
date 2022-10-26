import React, { useState } from "react";

function EditAccount({ user }) {
  const [formData, setFormData] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
  });

  const handleFormFieldChange = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

function EditAccount() {
  return <div>EditAccount</div>;
}

export default EditAccount;
