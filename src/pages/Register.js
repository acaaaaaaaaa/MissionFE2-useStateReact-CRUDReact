import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginReg.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Kata sandi dan konfirmasi tidak cocok!");
      return;
    }

    console.log("Akun berhasil dibuat:", username);
    navigate('/login');
  };
  return (
    <div className="auth-page" style={{ backgroundImage: "url(/images/daftar.jpg)" }}>
      <div className="auth-card">
        <img src="/images/icon-chill.png" alt="Chill" className="logo-img" />
        <h2 className="judul-auth">Daftar</h2>
        <p className="subjudul-auth">Selamat datang!</p>

        <form onSubmit={handleRegisterSubmit}>
          <div className="form-group">
            <div className="label-wrapper">
              <label className="nama-inp">Username</label>
            </div>
            <input
              type="text" required
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <div className="label-wrapper">
              <label className="nama-inp">Kata Sandi</label>
            </div>
            <div className="password-input">
              <input
                type={showPassword1 ? 'text' : 'password'}
                placeholder="Masukkan kata sandi" required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fa ${showPassword1 ? 'fa-eye' : 'fa-eye-slash'} eye-icon`}
                onClick={() => setShowPassword1(!showPassword1)}
              ></i>
            </div>
          </div>

          <div className="form-group">
            <div className="label-wrapper">
              <label className="nama-inp">Konfirmasi Kata Sandi</label>
            </div>
            <div className="password-input">
              <input
                type={showPassword2 ? 'text' : 'password'}
                placeholder="Konfirmasi kata sandi" required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i
                className={`fa ${showPassword2 ? 'fa-eye' : 'fa-eye-slash'} eye-icon`}
                onClick={() => setShowPassword2(!showPassword2)}
              ></i>
            </div>
          </div>

          <div className="form-footer">
            <span>Sudah punya akun? <Link to="/login" className="linkk">Masuk</Link></span>
          </div>

          <button type="submit">Daftar</button>

          <div className="separator">Atau</div>

          <button type="button" className="google-btn">
            <Link to="/register-google" className="google-btn-link">
              <img src="/images/google.png" alt="google" className="logo-g" />
            Daftar dengan Google
            </Link> 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
