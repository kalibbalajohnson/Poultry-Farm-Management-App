import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Poultry Farm Management App</h1>
      </header>

      <main className="app-main">
        <section className="daily-records">
          <h3 className="section-title">Daily Records</h3>
          <form className="record-form">
            <div className="form-group">
              <label htmlFor="numberOfHens" className="form-label">
                Number of Hens:
              </label>
              <input
                type="number"
                id="numberOfHens"
                name="numberOfHens"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="numberOfEggs" className="form-label">
                Number of Eggs:
              </label>
              <input
                type="number"
                id="numberOfEggs"
                name="numberOfEggs"
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantityOfFood" className="form-label">
                Quantity of Food (in kg):
              </label>
              <input
                type="number"
                id="quantityOfFood"
                name="quantityOfFood"
                required
                className="form-input"
              />
            </div>
            <button type="submit" className="submit-button">
              Add Record
            </button>
          </form>
        </section>

        <section>
          <h3 className="section-title">Records</h3>
          <table className="records-table">
            <thead className="table-header">
              <tr>
                <th className="table-cell">Number of Hens</th>
                <th className="table-cell">Number of Eggs</th>
                <th className="table-cell">Quantity of Food (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-cell">1200</td>
                <td className="table-cell">1000</td>
                <td className="table-cell">70</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Poultry Farm Management. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
