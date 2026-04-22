import React from 'react';
import './Sidebar.css';

const Sidebar = ({ currentPage, onPageChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'playground', label: 'Playground', icon: '🎮' },
    { id: 'documentation', label: 'Documentation', icon: '📖' },
    { id: 'characters', label: 'Characters', icon: '👥' },
    { id: 'usage', label: 'Usage Analytics', icon: '📈' },
    { id: 'pricing', label: 'Pricing', icon: '💰' },
    { id: 'payments', label: 'Payments', icon: '💳' },
    { id: 'account', label: 'Account', icon: '⚙️' },
    { id: 'contact', label: 'Contact', icon: '📞' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo">Oh API</h1>
        <p className="tagline">Playground</p>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => onPageChange(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <p>Version 1.0.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;