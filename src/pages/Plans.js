
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { markUserAsPremium } from "../utils/updateSubscription";

export default function Plans({ currentUser, isPremium, setIsPremium }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchSubscription = async () => {
      if (!currentUser || !currentUser.uid) {
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          
          setIsPremium(docSnap.data().premium === true);
        }
      } catch (error) {
        console.error("Error checking subscription:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, [currentUser, setIsPremium]);

 
  const handleUpgrade = async () => {
    if (!currentUser || !currentUser.uid) {
      alert("Please log in to upgrade!");
      return;
    }

    try {
      
      window.open(
        "https://buy.stripe.com/test_7sYeVed6OgOb6TFdW5ak000",
        "_blank"
      );

      // Immediately mark user as premium (for demo; ideally use Stripe webhooks)
      await markUserAsPremium(currentUser.uid);
      setIsPremium(true); // Update App.js state so Home sees premium features immediately

      alert("🎉 You are now a Premium user!");
      
      // ✅ Redirect to Home page
      navigate("/home");
    } catch (error) {
      console.error("Upgrade failed:", error);
      alert("Upgrade failed. Try again.");
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ padding: "50px 20px", textAlign: "center" }}>
      <h1 style={{ marginBottom: "40px" }}>Choose Your Plan</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            width: "280px",
          }}
        >
          <h2>Personal</h2>
          <h3 style={{ color: "#2d3748" }}>Free</h3>
          <p>For small, ad hoc social gatherings.</p>
          <ul style={{ textAlign: "left" }}>
            <li>Up to 10 participants</li>
            <li>Unlimited events</li>
            <li>Unlimited organizers</li>
            <li>Standard matching</li>
          </ul>
          <button
            style={{
              marginTop: "20px",
              background: "#2d3748",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/home")}
          >
            Get Started for Free
          </button>
        </div>

        {/* Premium Plan */}
        <div
          style={{
            background: "#0a033c",
            color: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            width: "300px",
          }}
        >
          <h2>Premium</h2>
          <h3>$10 / month</h3>
          <p>For organizations serious about connection.</p>
          <ul style={{ textAlign: "left" }}>
            <li>Everything in Free</li>
            <li>Up to 200 participants</li>
            <li>Unlimited event joins</li>
            <li>Event data exports</li>
          </ul>

          {isPremium ? (
            <p
              style={{
                marginTop: "20px",
                fontWeight: "bold",
                color: "lightgreen",
              }}
            >
              ✅ You are already subscribed to Premium
            </p>
          ) : (
            <button
              onClick={handleUpgrade}
              style={{
                marginTop: "20px",
                background: "#fff",
                color: "#0a033c",
                padding: "10px 20px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Upgrade Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
