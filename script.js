/* General */
body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #eef2f7, #ffffff);
  padding: 30px;
}

.container {
  max-width: 720px;
  margin: auto;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

/* Headings */
h1, h2 {
  text-align: center;
  font-weight: 700;
  color: #333;
}

/* Dashboard */
.dashboard {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.card {
  flex: 1;
  margin: 5px;
  background: #f7f9fc;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-3px);
}

.dash-title {
  font-size: 0.9rem;
  color: #555;
}

.dash-value {
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: 5px;
  color: #222;
}

/* Form */
.form-section input,
.form-section select,
.form-section button {
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  transition: border 0.2s, box-shadow 0.2s;
}

.form-section input:focus,
.form-section select:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0,123,255,0.3);
  outline: none;
}

button {
  background-color: #007bff;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Result */
.result {
  padding: 12px;
  border-radius: 6px;
  margin-top: 12px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s;
}

.result.success { background: #ddffdd; color: #0a650a; }
.result.fail { background: #ffdddd; color: #a80000; }

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

tbody tr:nth-child(even) { background: #f7f9fc; }

/* Card Type Colors */
.cash { background-color: #d9f7d9; }
.amazon { background-color: #ffe6b3; }
.target { background-color: #ffd6d6; }
.jcpenny { background-color: #cce0ff; }