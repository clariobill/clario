import React from 'react';

// Design Tokens
const colors = {
    primary: '#0070f3',
    secondary: '#1c1c1e',
};

const fontSizes = {
    small: '12px',
    medium: '16px',
    large: '24px',
};

// Sample Bills Data
const sampleBills = [
    { id: 1, amount: '$100', dueDate: '2026-05-01', paid: false },
    { id: 2, amount: '$50', dueDate: '2026-04-30', paid: true },
];

// Main Component
const ClarioApp = () => {
    return (
        <div style={{ fontFamily: 'Arial', padding: '20px' }}>
            <h1 style={{ color: colors.primary }}>Clario App</h1>
            <HomeScreen />
            <ScanningScreen />
            <ResultsScreen />
            <ChatScreen />
        </div>
    );
};

// Home Screen
const HomeScreen = () => {
    return <div>Welcome to the Clario App! Here are your bills:</div>;
};

// Scanning Screen
const ScanningScreen = () => {
    return <div>Scanning functionality will be implemented here.</div>;
};

// Results Screen
const ResultsScreen = () => {
    return <div>Results of the scanning will be displayed here.</div>;
};

// Chat Screen with Claude API Integration
const ChatScreen = () => {
    const [messages, setMessages] = React.useState([]);

    const handleSendMessage = (message) => {
        // Integrate with Claude API to send the message and receive a response
        // This is a placeholder for the API integration
    };

    return <div>Chat interface will be here.</div>;
};

export default ClarioApp;
