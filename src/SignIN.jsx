import { Link } from "react-router-dom";

function SignIN() {
  return (
    <div
      style={{
        width: "350px",
        margin: "100px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h1>Sign In</h1>

      <input
        type="text"
        placeholder="Enter Username"
        style={{
          width: "90%",
          padding: "10px",
          margin: "10px 0",
        }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        style={{
          width: "90%",
          padding: "10px",
          margin: "10px 0",
        }}
      />

      <button
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Sign In
      </button>

      <p style={{ marginTop: "15px" }}>
        Don't have an account?{" "}
        <Link
          to="/register"
          style={{
            color: "red",
            textDecoration: "none",
          }}
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default SignIN;