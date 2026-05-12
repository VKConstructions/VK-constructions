import React from "react";
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, message: "" };

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || "Unknown rendering error." };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-porcelain px-5 py-24 text-ink">
          <div className="mx-auto max-w-2xl border border-line bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brass">Website Error</p>
            <h1 className="mt-4 text-3xl font-semibold">The site could not render.</h1>
            <p className="mt-4 text-sm leading-7 text-graphite">
              Please refresh the page and make sure you are opening the Vite URL, not the local HTML file.
            </p>
            <pre className="mt-5 overflow-auto bg-ink p-4 text-xs text-white">{this.state.message}</pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
