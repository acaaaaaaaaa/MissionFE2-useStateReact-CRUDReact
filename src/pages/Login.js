import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginReg.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleLoginSubmit = (e) => {
  e.preventDefault();

    if (!username || !password) {
      alert("Harap isi username dan password.");
      return;
    }

    console.log("Login sukses sebagai:", username);
    navigate('/dashboard');
  };

  return (
    <div className="auth-page" style={{ backgroundImage: "url(/images/bg-login.jpg)" }}>
      <div className="auth-card">
        <img src="/images/icon-chill.png" alt="Chill" className="logo-img" />
        <h2 className="judul-auth">Masuk</h2>
        <p className="subjudul-auth">Selamat datang kembali!</p>

        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <div className="label-wrapper">
              <label className="nama-inp">Username</label>
            </div>
            <input type="text" required placeholder="Masukkan username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>

          <div className="form-group">
            <div className="label-wrapper">
              <label className="nama-inp">Kata Sandi</label>
            </div>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'} required
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'} eye-icon`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>

          <div className="form-footer">
            <span>Belum punya akun? <Link to="/register" className="linkk">Daftar</Link></span>
            <Link to="/reset-password" style={{ float: 'right' }} className='linkk'>Lupa kata sandi?</Link>
          </div>

          <button type="submit">Masuk</button>

          <div className="separator">Atau</div>

          <button type="button" className="google-btn">
            <Link to="/register-google" className="google-btn-link">
              <img src="/images/google.png" alt="google" className="logo-g" />
              Masuk dengan Google
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
