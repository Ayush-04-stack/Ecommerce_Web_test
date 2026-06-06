import { Link } from "react-router-dom";

function SignUp() {
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
      <h1>Sign Up</h1>

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
        type="email"
        placeholder="Enter Email"
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

      {/* <input
        type="password"
        placeholder="Confirm Password"
        style={{
          width: "90%",
          padding: "10px",
          margin: "10px 0",
        }}
      /> */}

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
        Sign Up
      </button>

      <p style={{ marginTop: "15px" }}>
        Already have an account?{" "}
        <Link
          to="/login"
          style={{
            color: "red",
            textDecoration: "none",
          }}
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default SignUp;