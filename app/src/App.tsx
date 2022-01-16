import logo from './img/logo.svg';
import './css/app.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    React × Typescript × Jest 練習用アプリケーション
                </p>
                <a
                    className="App-link"
                    href="/practice.html"
                    rel="noopener noreferrer"
                >
                    Let's begin !!
                </a>
            </header>
        </div>
    );
}

export default App;
