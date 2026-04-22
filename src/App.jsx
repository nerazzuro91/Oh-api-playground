import React, { useState } from 'react';

const App = () => {
    const [activeTab, setActiveTab] = useState('Tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div style={{ display: 'flex' }}>
            <nav style={{ width: '200px', padding: '10px', borderRight: '1px solid #ccc' }}>
                <h2>Sidebar</h2>
                <ul>
                    <li onClick={() => handleTabClick('Tab1')}>
                        Tab 1
                    </li>
                    <li onClick={() => handleTabClick('Tab2')}>
                        Tab 2
                    </li>
                    <li onClick={() => handleTabClick('Tab3')}>
                        Tab 3
                    </li>
                </ul>
            </nav>
            <main style={{ padding: '10px' }}>
                {activeTab === 'Tab1' && <h1>Content for Tab 1</h1>}
                {activeTab === 'Tab2' && <h1>Content for Tab 2</h1>}
                {activeTab === 'Tab3' && <h1>Content for Tab 3</h1>}
            </main>
        </div>
    );
};

export default App;