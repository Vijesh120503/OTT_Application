import { useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../firebase"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User:", currentUser);
      setUser(currentUser);
      if (currentUser) {
        navigate("/home");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("Signed-in User:", result.user);
      navigate("/home");
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="https://github.com/vijesh0512/image/blob/main/6ba2ef95.jpg?raw=true" alt="Chat App Logo" className="logo" />
        <h2>Welcome to my OTT Website</h2>
        {user ? (
          <>
            <p>Signed in as: <strong style={{ color: "white", fontSize: "18px" }}>{user.displayName || "User"}</strong></p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
      </div>
    </div>
  );
};

export default Login;
