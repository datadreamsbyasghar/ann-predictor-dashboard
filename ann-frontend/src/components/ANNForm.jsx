import React, { useState } from 'react';
import axios from 'axios';

function ANNForm() {
  const [formData, setFormData] = useState({
    age_group: '',
    legal_status: '',
    num_dependents: '',
    active_dependents: ''
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = {
      ...formData,
      [name]: value
    };

    // Auto-calculate active_dependents
    if (name === 'legal_status' || name === 'num_dependents') {
      const legal = name === 'legal_status' ? value : updatedForm.legal_status;
      const dependents = name === 'num_dependents' ? value : updatedForm.num_dependents;
      updatedForm.active_dependents = parseFloat(legal) * parseFloat(dependents);
    }

    setFormData(updatedForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    try {
      const payload = {
        age_group: parseFloat(formData.age_group),
        legal_status: parseFloat(formData.legal_status),
        num_dependents: parseFloat(formData.num_dependents),
        active_dependents: parseFloat(formData.active_dependents)
      };

      const response = await axios.post('http://localhost:8000/predict', payload);
      setResult(response.data.prediction);
    } catch (err) {
      setError('Prediction failed. Please check your input or try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header bg-secondary text-white">
          <h5 className="mb-0">ANN Predictor Dashboard</h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label className="form-label">Age Group</label>
                <input
                  type="number"
                  name="age_group"
                  value={formData.age_group}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="0 = Young, 1 = Adult, 2 = Mid-age, 3 = Senior"
                  min="0"
                  max="3"
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Legal Status</label>
                <input
                  type="number"
                  name="legal_status"
                  value={formData.legal_status}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="1 = Legal, 0 = Illegal"
                  min="0"
                  max="1"
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Dependents</label>
                <input
                  type="number"
                  name="num_dependents"
                  value={formData.num_dependents}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. 2"
                  min="0"
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Active Dependents</label>
                <input
                  type="number"
                  name="active_dependents"
                  value={formData.active_dependents}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Auto-calculated"
                  readOnly
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              <i className="fa fa-rocket me-2"></i> Predict
            </button>
          </form>

          {result !== null && (
            <div className={`alert mt-4 text-center ${result === 1 ? 'alert-success' : 'alert-warning'}`}>
              <strong>Result:</strong>{' '}
              {result === 1 ? 'High Income / Eligible' : 'Low Income / Not Eligible'}
              <p className="text-muted mt-2">
                This prediction is based on your age group, legal status, and number of dependents.
                It helps assess income eligibility or risk level for screening, aid, or financial decisions.
              </p>
            </div>
          )}

          {error && (
            <div className="alert alert-danger mt-4 text-center">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ANNForm;