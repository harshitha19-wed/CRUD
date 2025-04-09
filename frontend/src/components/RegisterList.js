// src/components/RegisterList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'; // Make sure you import the CSS file

const RegisterList = ({ refresh }) => {
  const [registers, setRegisters] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    axios.get('http://localhost:8000/api/registers/')
      .then(res => setRegisters(res.data))
      .catch(err => console.log(err));
  }, [refresh]);

  const deleteRegister = (id) => {
    axios.delete(`http://localhost:8000/api/registers/${id}/`)
      .then(() => setRegisters(registers.filter(r => r.id !== id)))
      .catch(err => console.error(err));
  };

  const startEdit = (register) => {
    setEditingId(register.id);
    setEditData({ name: register.name, email: register.email, phone: register.phone });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditData({ name: '', email: '', phone: '' });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (id) => {
    axios.put(`http://localhost:8000/api/registers/${id}/`, editData)
      .then(() => {
        setEditingId(null);
        setEditData({ name: '', email: '', phone: '' });

        axios.get('http://localhost:8000/api/registers/')
          .then(res => setRegisters(res.data));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="register-container">
      <h2>Registered Users</h2>
      <ul className="register-list">
        {registers.map((reg) => (
          <li key={reg.id} className="register-item">
            {editingId === reg.id ? (
              <>
                <input name="name" value={editData.name} onChange={handleEditChange} />
                <input name="email" value={editData.email} onChange={handleEditChange} />
                <input name="phone" value={editData.phone} onChange={handleEditChange} />
                <div className="register-item-buttons">
                  <button className="save-btn" onClick={() => handleUpdate(reg.id)}>Save</button>
                  <button className="cancel-btn" onClick={cancelEdit}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <div>{reg.name} - {reg.email} - {reg.phone}</div>
                <div className="register-item-buttons">
                  <button className="edit-btn" onClick={() => startEdit(reg)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteRegister(reg.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisterList;
