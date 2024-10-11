import './App.css';
function App() {
  return (
    <div className="app-container">
      {/* Header Section with Navigation */}
      <header className="app-header">
        <h1>Poultry Farm Management</h1>
        <nav className="app-navigation">
          <a href="#dashboard">Dashboard</a>
          <a href="#inventory">Inventory</a>
          <a href="#sales">Sales</a>
          <a href="#analytics">Analytics</a>
        </nav>
      </header>
       {/* Main Content Section */}
      <main className="app-main">
        <section className="dashboard-overview">
          <div className="stat-card">
            <h2>Total Chickens</h2>
            <p>1,200</p>
          </div>
          <div className="stat-card">
            <h2>Egg Production (Today)</h2>
            <p>4,500 eggs</p>
          </div>
          <div className="stat-card">
            <h2>Sales (Monthly)</h2>
            <p>$10,200</p>
          </div>
        </section>

        <section className="action-cards">
          <div className="card">
            <h3>Manage Chickens</h3>
            <p>Update chicken inventory, track health, and more.</p>
            <button className="primary-button">Manage</button>
          </div>
          <div className="card">
            <h3>Track Egg Production</h3>
            <p>Record daily egg production and track trends.</p>
            <button className="primary-button">Track</button>
          </div>
          <div className="card">
            <h3>Analyze Sales</h3>
            <p>View detailed sales reports and insights.</p>
            <button className="primary-button">Analyze</button>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Poultry Farm Management. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
