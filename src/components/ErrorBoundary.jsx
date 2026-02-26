import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: "2rem", textAlign: "center" }}>
                    <h2>Algo salió mal en esta página.</h2>
                    <p style={{ color: "red" }}>{this.state.error?.message}</p>
                    <button onClick={() => this.setState({ hasError: false, error: null })}>
                        Intentar de nuevo
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
