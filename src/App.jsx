import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import FreeDemo from './pages/FreeDemo';
import BookAppointment from './pages/BookAppointment';
import RegistrationForm from './pages/RegistrationForm'; 
import { AuthProvider } from './context/AuthContext';
import ProfileWrapper from './context/ProfileWrapper'; 

import './App.css';
function App() {
    return ( < div >
        
        <AuthProvider> {/* Provides login state to all components */}
            <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/free-demo" element={<FreeDemo />} />
                <Route path="/book-appointment" element={<BookAppointment />} />
                <Route path="/registration-form" element={<RegistrationForm />} />
                <Route path="/profile" element={<ProfileWrapper />} />
            </Routes>
            < Footer />
            </Router>
        </AuthProvider>

        
        </div>
    );
}

export default App;